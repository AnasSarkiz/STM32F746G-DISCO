# STM32F746G-DISCO Circuit Review Report

Date: 2026-04-18
Reviewer: Codex

## Scope
- Read local tscircuit skill docs under `.codex/skills/tscircuit/`.
- Reviewed circuit source files in `src/` plus imported component definitions in `imports/`.
- Ran validation commands:
  - `bun run typecheck`
  - `bun run build` (tsci build)
  - `bunx tsci check netlist`
  - `bunx tsci check placement`

## Findings (Ordered by Severity)

### P1 - TypeScript compile fails in custom PCM2902 footprint JSX
- File: `src/components/CodecSection/CodecSection.tsx:50-65`
- `bun run typecheck` fails with:
  - `Unused '@ts-expect-error' directive`
  - `Property 'key' does not exist on type 'RectSmtPadProps'`
- Root cause:
  - `key` is passed directly to intrinsic `<smtpad />` elements where the type does not allow it.
  - The current `@ts-expect-error` placement does not suppress the reported location correctly.
- Impact:
  - CI/typecheck failure blocks clean verification pipeline.

### P1 - PCB routing currently has many DRC/clearance violations (manufacturing blocker)
- File: layout generated from board composition in `src/board.tsx` and section files under `src/components/`
- `bun run build` reports many hard issues, including:
  - trace-to-trace overlaps
  - trace-to-pad accidental contacts
  - via-to-via clearance violations (including different nets)
- Representative errors from build output:
  - `trace[.U8 > port.pin12, .U7 > port.pin12] overlaps with trace[.RLED13 > port.cathode, .U7 > port.pin4] (accidental contact)`
  - `trace[.U2 > port.pin47, .U2 > port.pin35] overlaps with pcb_smtpad "pcb_port[.U2 > .PB7]" (accidental contact)`
  - `Vias pcb_via[#pcb_via_18] and pcb_via[#pcb_via_28] from different nets are too close together (gap: 0.066mm)`
- Impact:
  - Board is not fabrication-safe in current routed state.

### P2 - Incomplete pin attributes reduce ERC quality and hide power/ground intent
- Files: imported parts under `imports/*.tsx` (notably `STM32F303CCT6`, `TYPE_C_31_M_12`, `USBLC6_2SC6`, `AMS1117_3_3`, `A_74HC595D_118`, `X322512MSB4SI`, `TS_1187A_B_A_B`, `nSMD050_24V`)
- `bun run build` shows repeated warnings:
  - `All pins on <part> are underspecified (no pinAttributes set)`
  - `<part> has no pin with requires_power=true`
  - `<part> has no pin with requires_ground=true`
- Impact:
  - Logical netlist is valid (`tsci check netlist` passes), but ERC is less effective at catching future wiring mistakes.

### P3 - Documentation mismatch for supplier part numbers file path
- File: `README.md:40`
- README says part numbers are in `src/parts/jlcpcb.ts`, but project uses `src/parts/lcsc.ts`.
- Impact:
  - Onboarding confusion and slower maintenance.

## Checks Summary
- `bun run typecheck`: **Failed** (4 errors in `CodecSection.tsx`)
- `bun run build`: **Completed with errors/warnings** (DRC overlaps/clearance + underspecified pin attributes)
- `bunx tsci check netlist`: **Passed** (`Errors: 0`, `Warnings: 0`)
- `bunx tsci check placement`: **Passed** (`Errors: 0`, `Warnings: 0`)

## Suggested Fix Order
1. Fix TypeScript footprint typing issue in `CodecSection.tsx` so CI is green.
2. Resolve routing/clearance conflicts reported by `tsci build` (especially accidental contacts and cross-net via spacing).
3. Add `pinAttributes` to imported chips/connectors to improve electrical-rule diagnostics.
4. Update README path (`src/parts/lcsc.ts`).
