import { supplierPartNumbers } from "../../parts/lcsc"
import { TRACE_WIDTHS } from "../../utils/constants"
import { nets } from "../../utils/nets"

const oledHeaderPinLabels = ["GND", "VCC", "SCL", "SDA"]

export function Display() {
  return (
    <>
      <pinheader
        name="J4"
        pinCount={4}
        footprint="pinrow4"
        pinLabels={oledHeaderPinLabels}
        supplierPartNumbers={supplierPartNumbers.pinHeader}
        pcbX={-2}
        pcbY={-18}
        pcbRotation={0}
      />
      <resistor name="R6" resistance="4.7k" footprint="0603" supplierPartNumbers={supplierPartNumbers.resistor0603} pcbX={-10.5} pcbY={-18} />
      <resistor name="R7" resistance="4.7k" footprint="0603" supplierPartNumbers={supplierPartNumbers.resistor0603} pcbX={-13.5} pcbY={-18} />

      <trace from="J4.GND" to={nets.gnd} />
      <trace from="J4.VCC" to={nets.v3v3} />
      <trace from="J4.SCL" to={nets.oledScl} width={TRACE_WIDTHS.signal} />
      <trace from="J4.SDA" to={nets.oledSda} width={TRACE_WIDTHS.signal} />
      <trace from={nets.oledScl} to="R6.pin1" />
      <trace from="R6.pin2" to={nets.v3v3} />
      <trace from={nets.oledSda} to="R7.pin1" />
      <trace from="R7.pin2" to={nets.v3v3} />

      <silkscreenrect pcbX={-2} pcbY={-7} width="28mm" height="12mm" />
      <silkscreentext pcbX={-2} pcbY={-7} text="OPTIONAL SSD1306 OLED" fontSize="1mm" />
    </>
  )
}
