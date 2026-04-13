import { supplierPartNumbers } from "../../parts/lcsc";
import { LAYOUT, TRACE_WIDTHS } from "../../utils/constants";
import { nets } from "../../utils/nets";

const oledHeaderPinLabels = ["GND", "VCC", "SCL", "SDA"];

export function Display() {
	return (
		<>
			<pinheader
				name="J4"
				pinCount={4}
				footprint="pinrow4"
				pinLabels={oledHeaderPinLabels}
				supplierPartNumbers={supplierPartNumbers.pinHeader}
				pcbX={LAYOUT.display.header.x}
				pcbY={LAYOUT.display.header.y}
				pcbRotation={0}
			/>
			<resistor
				name="R6"
				resistance="4.7k"
				footprint="0603"
				supplierPartNumbers={supplierPartNumbers.resistor0603}
				pcbX={LAYOUT.display.pullupScl.x}
				pcbY={LAYOUT.display.pullupScl.y}
			/>
			<resistor
				name="R7"
				resistance="4.7k"
				footprint="0603"
				supplierPartNumbers={supplierPartNumbers.resistor0603}
				pcbX={LAYOUT.display.pullupSda.x}
				pcbY={LAYOUT.display.pullupSda.y}
			/>

			<trace from="J4.GND" to={nets.gnd} />
			<trace from="J4.VCC" to={nets.v3v3} />
			<trace from="J4.SCL" to={nets.oledScl} width={TRACE_WIDTHS.signal} />
			<trace from="J4.SDA" to={nets.oledSda} width={TRACE_WIDTHS.signal} />
			<trace from={nets.oledScl} to="R6.pin1" />
			<trace from="R6.pin2" to={nets.v3v3} />
			<trace from={nets.oledSda} to="R7.pin1" />
			<trace from="R7.pin2" to={nets.v3v3} />

			<silkscreenrect
				pcbX={LAYOUT.display.module.x}
				pcbY={LAYOUT.display.module.y}
				width={`${LAYOUT.display.module.width}mm`}
				height={`${LAYOUT.display.module.height}mm`}
			/>
			<silkscreenrect
				pcbX={LAYOUT.display.activeArea.x}
				pcbY={LAYOUT.display.activeArea.y}
				width={`${LAYOUT.display.activeArea.width}mm`}
				height={`${LAYOUT.display.activeArea.height}mm`}
			/>
			<silkscreentext
				pcbX={LAYOUT.display.label.x}
				pcbY={LAYOUT.display.label.y}
				text="SSD1306 4P OLED"
				fontSize="0.9mm"
			/>
		</>
	);
}
