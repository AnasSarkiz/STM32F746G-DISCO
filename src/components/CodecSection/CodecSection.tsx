import { PCM2900CDBR } from "../../../imports/PCM2900CDBR";
import { X322512MSB4SI } from "../../../imports/X322512MSB4SI";
import { supplierPartNumbers } from "../../parts/lcsc";
import { LAYOUT, TRACE_WIDTHS } from "../../utils/constants";
import { nets } from "../../utils/nets";

export function CodecSection() {
	return (
		<>
			<PCM2900CDBR
				name="U1"
				pcbX={LAYOUT.codec.pcm2900.x}
				pcbY={LAYOUT.codec.pcm2900.y}
			/>
			<X322512MSB4SI
				name="Y1"
				pcbX={LAYOUT.codec.crystal.x}
				pcbY={LAYOUT.codec.crystal.y}
			/>
			<capacitor
				name="C5"
				capacitance="22pF"
				footprint="0603"
				supplierPartNumbers={supplierPartNumbers.capacitor0603_22p}
				pcbX={LAYOUT.codec.c5.x}
				pcbY={LAYOUT.codec.c5.y}
			/>
			<capacitor
				name="C6"
				capacitance="22pF"
				footprint="0603"
				supplierPartNumbers={supplierPartNumbers.capacitor0603_22p}
				pcbX={LAYOUT.codec.c6.x}
				pcbY={LAYOUT.codec.c6.y}
			/>
			<capacitor
				name="C7"
				capacitance="100nF"
				footprint="0603"
				supplierPartNumbers={supplierPartNumbers.capacitor0603_100n}
				pcbX={LAYOUT.codec.c7.x}
				pcbY={LAYOUT.codec.c7.y}
			/>
			<capacitor
				name="C8"
				capacitance="100nF"
				footprint="0603"
				supplierPartNumbers={supplierPartNumbers.capacitor0603_100n}
				pcbX={LAYOUT.codec.c8.x}
				pcbY={LAYOUT.codec.c8.y}
			/>
			<capacitor
				name="C9"
				capacitance="10uF"
				footprint="0805"
				supplierPartNumbers={supplierPartNumbers.capacitor0805_10u}
				pcbX={LAYOUT.codec.c9.x}
				pcbY={LAYOUT.codec.c9.y}
			/>
			<capacitor
				name="C10"
				capacitance="1uF"
				footprint="0603"
				supplierPartNumbers={supplierPartNumbers.capacitor0603_1u}
				pcbX={LAYOUT.codec.c10.x}
				pcbY={LAYOUT.codec.c10.y}
			/>

			<trace from={nets.usbDp} to="U1.D_POS" width={TRACE_WIDTHS.usb} />
			<trace from={nets.usbDm} to="U1.D_NEG" width={TRACE_WIDTHS.usb} />
			<trace from={nets.vbus} to="U1.VBUS" width="0.3mm" />
			<trace from={nets.vbus} to="U1.VCCCI" width="0.3mm" />
			<trace from={nets.vbus} to="U1.VCCP1I" width="0.3mm" />
			<trace from={nets.vbus} to="U1.VCCP2I" width="0.3mm" />
			<trace from={nets.vbus} to="U1.VCCXI" width="0.3mm" />
			<trace from={nets.vbus} to="U1.VDDI" width="0.3mm" />
			<trace from="U1.DGNDU" to={nets.gnd} />
			<trace from="U1.DGND" to={nets.gnd} />
			<trace from="U1.AGNDC" to={nets.gnd} />
			<trace from="U1.AGNDP" to={nets.gnd} />
			<trace from="U1.AGNDX" to={nets.gnd} />

			<trace from="U1.XTI" to="Y1.OSC1" />
			<trace from="U1.XTO" to="Y1.OSC2" />
			<trace from="Y1.OSC1" to="C5.pin1" />
			<trace from="C5.pin2" to={nets.gnd} />
			<trace from="Y1.OSC2" to="C6.pin1" />
			<trace from="C6.pin2" to={nets.gnd} />
			<trace from="Y1.GND1" to={nets.gnd} />
			<trace from="Y1.GND2" to={nets.gnd} />
			<trace from="C7.pin1" to={nets.vbus} />
			<trace from="C7.pin2" to={nets.gnd} />
			<trace from="C8.pin1" to={nets.vbus} />
			<trace from="C8.pin2" to={nets.gnd} />
			<trace from="C9.pin1" to={nets.vbus} />
			<trace from="C9.pin2" to={nets.gnd} />
			<trace from="U1.VCOM" to="C10.pin1" />
			<trace from="C10.pin2" to={nets.gnd} />

			<trace from="U1.SEL0" to={nets.vbus} />
			<trace from="U1.SEL1" to={nets.vbus} />
			<trace from="U1.SSPND" to={nets.vbus} />
			<trace from="U1.TEST0" to={nets.gnd} />
			<trace from="U1.TEST1" to={nets.gnd} />
			<trace from="U1.HID0" to={nets.gnd} />
			<trace from="U1.HID1" to={nets.gnd} />
			<trace from="U1.HID2" to={nets.gnd} />

			<silkscreentext
				pcbX={LAYOUT.codec.label.x}
				pcbY={LAYOUT.codec.label.y}
				text="PCM2900 USB AUDIO"
				fontSize="1.1mm"
			/>
		</>
	);
}
