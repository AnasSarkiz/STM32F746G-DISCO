# STM32F746G-DISCO Circuit Review Report

Date: 2026-05-31
Reviewer: Codex

## Verdict

The source-level connectivity looks correct, and the latest PCB viewer screenshot shows `0 errors` after moving U2. Based on that current PCB viewer result, the board is reasonable to proceed toward fabrication after the normal Gerber/BOM/PnP review.

I did not find a logical VBUS-to-GND or 3V3-to-GND short. Raw USB connector VBUS, fused `VBUS_5V`, regulated `V3_3`, and `GND` remain separate nets.

## Current Checks

- PCB viewer:
  - Result: `0 errors` in the provided 2026-05-31 screenshot after moving U2.
- Source connectivity render with routing disabled:
  - Result: Passed with no source-level connection errors.
  - Remaining warning: `F1 has no pin with requires_ground=true`, expected for a two-pin fuse import and not a fault.
- Full in-process tscircuit render:
  - Result: One conservative routed clearance warning remained around the local `R3/U2/SW1` area in this environment.
  - Interpretation: The code-level nets there are correct; use the live PCB viewer/gerber DRC as the final copper check if it shows zero errors.
- TypeScript check:
  - `bun run typecheck` did not finish in this environment and was stopped.

## Connection Review Notes

- USB-C CC pins are correctly pulled down through 5.1 kOhm resistors for a USB device/UFP.
- USB D+ and D- are mapped consistently through the USBLC6 ESD array into `U1.D_POS` and `U1.D_NEG`.
- Raw connector VBUS goes through `F1` before becoming fused `VBUS_5V`.
- `VBUS_5V` feeds the PCM2900 VBUS pin and AMS1117 input.
- The AMS1117 output net powers the STM32, 74HC595 devices, SWD header VCC, BOOT header 3V3, and decoupling capacitors.
- Around U2, `VDDA/R3.pin2` are on `V3_3`, `VSSA/SW1.B/SW1.D` are on `GND`, and `NRST/R3.pin1/SW1.A/SW1.C` are on reset. The U2 move did not change these logical nets.
- PCM2900 internal supply pins (`VCCCI`, `VCCP1I`, `VCCP2I`, `VCCXI`, `VDDI`, `VCOM`) are decoupled to ground.
- PCM2900 `SEL0` and `SEL1` are tied high to VBUS, which is valid for PCM2900C because TI specifies those inputs must be high and allows SEL high level up to 5.25 V.
- PCM2900 `TEST0` is tied to ground and `TEST1` is left open, matching the datasheet.
- PCM2900 `VINL`/`VINR` are intentionally unconnected; this design uses DAC outputs `VOUTL`/`VOUTR` into STM32 ADC pins `PA4`/`PA5`.
- The 74HC595 cascade is logically correct: STM32 data to `U6.DS`, then `U6.Q7S` to `U7.DS`, then `U7.Q7S` to `U8.DS`; `MR` is tied high and VCC/GND are connected.

## Remaining Recommendations

- Add a weak pull-down on `LED_OE`, or make sure firmware drives `PA3` immediately after reset. `OE` is active-low, so without a resistor the LED enable state can float during boot.
- Check blue/white LED brightness during prototype bring-up. At 3.3 V with 330 ohm series resistors, high-Vf LEDs may be dimmer than red/yellow/green.
- Before ordering, inspect exported Gerbers, BOM, and pick-and-place files, especially the USB-C connector footprint and polarity/orientation of LEDs.
