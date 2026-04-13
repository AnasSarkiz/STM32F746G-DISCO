import { AMS1117_3_3 } from "../../../imports/AMS1117_3_3";
import { supplierPartNumbers } from "../../parts/lcsc";
import { LAYOUT, TRACE_WIDTHS } from "../../utils/constants";
import { nets } from "../../utils/nets";

export function PowerSection() {
	return (
		<>
			<capacitor
				name="C1"
				capacitance="10uF"
				footprint="0805"
				supplierPartNumbers={supplierPartNumbers.capacitor0805_10u}
				pcbX={LAYOUT.power.c1.x}
				pcbY={LAYOUT.power.c1.y}
			/>
			<capacitor
				name="C2"
				capacitance="100nF"
				footprint="0603"
				supplierPartNumbers={supplierPartNumbers.capacitor0603_100n}
				pcbX={LAYOUT.power.c2.x}
				pcbY={LAYOUT.power.c2.y}
			/>
			<AMS1117_3_3
				name="U5"
				pcbX={LAYOUT.power.regulator.x}
				pcbY={LAYOUT.power.regulator.y}
			/>
			<capacitor
				name="C3"
				capacitance="10uF"
				footprint="0805"
				supplierPartNumbers={supplierPartNumbers.capacitor0805_10u}
				pcbX={LAYOUT.power.c3.x}
				pcbY={LAYOUT.power.c3.y}
			/>
			<capacitor
				name="C4"
				capacitance="100nF"
				footprint="0603"
				supplierPartNumbers={supplierPartNumbers.capacitor0603_100n}
				pcbX={LAYOUT.power.c4.x}
				pcbY={LAYOUT.power.c4.y}
			/>

			<trace from="C1.pin1" to={nets.vbus} width={TRACE_WIDTHS.power} />
			<trace from="C1.pin2" to={nets.gnd} />
			<trace from="C2.pin1" to={nets.vbus} />
			<trace from="C2.pin2" to={nets.gnd} />
			<trace from={nets.vbus} to="U5.VIN" width={TRACE_WIDTHS.power} />
			<trace from="U5.GND" to={nets.gnd} width="0.35mm" />
			<trace from="U5.VOUT1" to={nets.v3v3} width="0.4mm" />
			<trace from="U5.VOUT2" to={nets.v3v3} width="0.4mm" />
			<trace from="C3.pin1" to={nets.v3v3} width="0.35mm" />
			<trace from="C3.pin2" to={nets.gnd} />
			<trace from="C4.pin1" to={nets.v3v3} />
			<trace from="C4.pin2" to={nets.gnd} />

			<silkscreentext
				pcbX={LAYOUT.power.label.x}
				pcbY={LAYOUT.power.label.y}
				text="3V3 REG"
				fontSize="1mm"
			/>
		</>
	);
}
