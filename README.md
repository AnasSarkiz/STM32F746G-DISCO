# USB Audio VU Meter

USB Audio VU Meter is a 2-layer tscircuit PCB for a USB sound-card endpoint that drives a 24-segment stereo LED bar graph.

## Hardware

- PCM2900 USB audio codec for USB audio enumeration.
- STM32F303 microcontroller for meter DSP, peak hold, fast attack, and slow decay firmware.
- USB-C power/data input with CC pull-downs, fuse, and USB ESD protection.
- AMS1117-3.3 3.3 V regulator.
- Three SN74HC595 shift registers driving 12 left-channel LEDs and 12 right-channel LEDs.
- SWD and BOOT0 service headers are kept as DNP bring-up pads.

## Layout Intent

- Board size: 120 mm x 74 mm, 2 layers.
- USB-C is placed on the left board edge.
- PCM2900 is near USB to keep D+ and D- short and length matched.
- STM32F303 is beside the codec.
- LED bar spans the top edge.
- SWD and BOOT0 access are on the lower-right service area.
- J2 and J3 use through-hole pin-header footprints marked DNP for hand-soldered bring-up access.
- LED colors are arranged as a high-energy mirrored meter: red/yellow at the outer warning zones, green in the mid zones, and blue/white near the center peak.

## Commands

```bash
bun install
bunx tsc --noEmit
bun run build
bun run dev
bunx tsci build
bunx tsci dev
```

## Manufacturing Notes

The project uses JLCPCB/LCSC supplier part numbers in `src/parts/lcsc.ts` where practical. Pin headers are marked DNP because they are intended for optional hand-soldered bring-up/debug access.

Before fabrication, verify the exact PCM2900 package variant and USB-C footprint against vendor datasheets, inspect generated Gerbers, and tune USB differential impedance for the chosen PCB stackup.
