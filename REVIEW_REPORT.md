# STM32F746G-DISCO Circuit Review Report

Date: 2026-05-31
Reviewer: Codex

## Verdict

The board is not ready to order yet. The logical placement now renders cleanly, but the routed PCB still has DRC and disconnected-route errors around the USB-C connector, PCM2900 codec, and a few dense decoupling/LED-driver routes.

The source-level connectivity does not show a VBUS-to-GND or 3V3-to-GND short. However, the manufactured copper cannot be signed off as short-free until the routed PCB has zero DRC errors.

## Changes Made

- Spread the STM32 decoupling capacitors to remove a C15/C16 placement/courtyard conflict.
- Spread the three 74HC595 LED drivers to reduce routing congestion.
- Moved the PCM2900 output resistors closer to the codec output pins.
- Corrected README references from PCM2902 to PCM2900 and fixed board size from 140 mm x 74 mm to 120 mm x 74 mm.

## Checks Run

- Source connectivity render with routing disabled:
  - Result: Passed with no source-level short/connection errors.
  - Confirmed separate nets for connector-side VBUS, fused `VBUS_5V`, `V3_3`, and `GND`.
- Unrouted render with placement/DRC enabled and routing disabled:
  - Result: Passed for physical placement.
  - Remaining warning: `F1 has no pin with requires_ground=true`, expected for a two-pin fuse import and not a fabrication blocker.
- Full routed render through the tscircuit core:
  - Result: Failed order-readiness due to PCB trace and route endpoint errors.
- `bun run build` / `bunx tsc`:
  - Result: CLI sessions stalled in this environment and were stopped. The direct tscircuit core render was used for actionable DRC output.

## Remaining Blockers

### P1 - Cannot guarantee no manufactured short until routed DRC is clean

The intended schematic nets are separate, but the current routed PCB still reports copper clearance/contact problems. That means the design intent is not shorted, but the generated manufacturing copper is not safe to order yet.

Impact: A fabricated board could have opens, shorts, or marginal clearances even though the logical netlist is mostly correct.

### P1 - Routed PCB still has DRC errors

Representative full-route errors:

- `C14/C13` positive and negative traces overlap or run too close.
- `U1.D_POS` to `U4.IO1B` is too close to an autorouter via and has a disconnected endpoint at the PCM2900 pin.
- `U1` local ground/control traces near pins 3, 8, 22, 24, and 26 create via-clearance or disconnected endpoint errors.
- `RLED6` to `U6` is too close to an autorouter via.
- `J1` USB-C VBUS/GND polygon pads produce disconnected endpoints and pad/trace clearance errors.

Impact: Do not fabricate until these are fixed and the routed build has zero PCB trace, via clearance, pad clearance, and disconnected endpoint errors.

### P1 - USB-C imported footprint/routing needs manual verification

The USB-C connector import uses polygon pads for combined VBUS/GND pins. The autorouter repeatedly reports disconnected endpoints on those pads, especially around `J1.A1B12`, `J1.B1A12`, `J1.A4B9`, and `J1.B4A9`.

Impact: The connector footprint and generated route should be verified against the vendor datasheet and Gerbers. It may need a cleaner imported footprint or manual routing around the connector pads.

### P2 - PCM2900 output and local capacitor routes need cleanup

The codec area still reports disconnected endpoints or clearance problems on the USB D+ route, VOUTR route, VCOM capacitor route, and several local ground/control connections.

Impact: The codec may fail routing/manufacturing checks even though the schematic connectivity intent is clear.

### P2 - LED output-enable should not float during reset

The 74HC595 `OE` pins are active-low and are connected only to the STM32 (`U2.PA3`). This can work once firmware drives the pin, but during reset/boot the MCU pin may be high-impedance. A pull-down on `LED_OE`, or tying `OE` low if PWM blanking is not needed, would make LED enable state deterministic.

Impact: LEDs may behave unpredictably during boot, even though this is not a short-circuit issue.

## Connection Review Notes

- USB-C CC pins are correctly pulled down through 5.1 kΩ resistors for a USB device/UFP.
- USB D+ and D- are mapped consistently through the USBLC6 ESD array into `U1.D_POS` and `U1.D_NEG`.
- Raw connector VBUS goes through `F1` before becoming fused `VBUS_5V`; `VBUS_5V` feeds the PCM2900 VBUS pin and AMS1117 input.
- The AMS1117 output net powers the STM32, 74HC595 devices, SWD header VCC, BOOT header 3V3, and decoupling capacitors.
- PCM2900 internal supply pins (`VCCCI`, `VCCP1I`, `VCCP2I`, `VCCXI`, `VDDI`, `VCOM`) are decoupled to ground, matching TI's pin-function guidance.
- PCM2900 `TEST0` is tied to ground and `TEST1` is left open, matching TI's terminal-function guidance.
- PCM2900 `VINL`/`VINR` are intentionally unconnected; this design uses DAC outputs `VOUTL`/`VOUTR` into STM32 ADC pins `PA4`/`PA5`.
- The 74HC595 cascade is logically correct: STM32 data to `U6.DS`, then `U6.Q7S` to `U7.DS`, then `U7.Q7S` to `U8.DS`; `MR` is tied high and VCC/GND are connected.

## Recommendation

Do one more routing-focused layout pass before ordering:

1. Replace or simplify the USB-C footprint import if its polygon pads remain unroutable.
2. Add manual trace hints/manual routing for USB D+/D- and the connector power/ground pins.
3. Spread the STM32 decoupling row a bit more or route those rails manually.
4. Re-run full routing and only proceed when the generated circuit JSON contains no `*_error` entries.
