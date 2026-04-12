import { TYPE_C_31_M_12 } from "../../../imports/TYPE_C_31_M_12"
import { USBLC6_2SC6 } from "../../../imports/USBLC6_2SC6"
import { nSMD050_24V as NSMD050_24V } from "../../../imports/nSMD050_24V"
import { supplierPartNumbers } from "../../parts/lcsc"
import { TRACE_WIDTHS } from "../../utils/constants"
import { nets } from "../../utils/nets"

export function UsbSection() {
  return (
    <>
      <TYPE_C_31_M_12
        name="J1"
        pcbX={-47}
        pcbY={-2}
        pcbRotation={90}
      />

      <USBLC6_2SC6
        name="U4"
        pcbX={-39}
        pcbY={-2}
      />

      <NSMD050_24V
        name="F1"
        pcbX={-42}
        pcbY={-12}
      />
      <resistor name="R1" resistance="5.1k" footprint="0603" supplierPartNumbers={supplierPartNumbers.resistor0603} pcbX={-44} pcbY={8} />
      <resistor name="R2" resistance="5.1k" footprint="0603" supplierPartNumbers={supplierPartNumbers.resistor0603} pcbX={-44} pcbY={5} />

      <trace from="J1.A5" to="R1.pin1" width={TRACE_WIDTHS.signal} />
      <trace from="R1.pin2" to={nets.gnd} />
      <trace from="J1.B5" to="R2.pin1" width={TRACE_WIDTHS.signal} />
      <trace from="R2.pin2" to={nets.gnd} />

      <trace from="J1.A4B9" to="J1.B4A9" width={TRACE_WIDTHS.power} />
      <trace from="J1.A4B9" to="F1.pin1" width={TRACE_WIDTHS.power} />
      <trace from="F1.pin2" to={nets.vbus} width={TRACE_WIDTHS.power} />
      <trace from="J1.A1B12" to={nets.gnd} width={TRACE_WIDTHS.power} />
      <trace from="J1.B1A12" to={nets.gnd} width={TRACE_WIDTHS.power} />
      <trace from="J1.A6" to="U4.pin3" width={TRACE_WIDTHS.usb} />
      <trace from="J1.B6" to="U4.pin3" width={TRACE_WIDTHS.usb} />
      <trace from="J1.A7" to="U4.pin2" width={TRACE_WIDTHS.usb} />
      <trace from="J1.B7" to="U4.pin2" width={TRACE_WIDTHS.usb} />
      <trace from="U4.pin3" to={nets.usbDp} width={TRACE_WIDTHS.usb} />
      <trace from="U4.pin2" to={nets.usbDm} width={TRACE_WIDTHS.usb} />
      <trace from="J1.A4B9" to="U4.pin1" width="0.2mm" />
      <trace from="J1.EH1" to={nets.gnd} width="0.3mm" />
      <trace from="J1.EH2" to={nets.gnd} width="0.3mm" />
      <trace from="J1.EH3" to={nets.gnd} width="0.3mm" />
      <trace from="J1.EH4" to={nets.gnd} width="0.3mm" />
      <trace from="U4.pin4" to={nets.gnd} width="0.3mm" />
      <trace from="U4.pin5" to={nets.gnd} width="0.3mm" />

      <silkscreentext pcbX={-39} pcbY={13.5} text="USB-C DATA" fontSize="1.1mm" />
    </>
  )
}
