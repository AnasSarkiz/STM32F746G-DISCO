import { supplierPartNumbers } from "../../parts/lcsc";
import { LAYOUT } from "../../utils/constants";
import { nets } from "../../utils/nets";

const swdHeaderPinLabels = ["VCC", "SWDIO", "GND", "SWCLK", "NRST"];

const bootHeaderPinLabels = ["BOOT0", "3V3", "GND"];

export function DebugHeader() {
	return (
		<>
			<pinheader
				name="J2"
				pinCount={5}
				footprint="pinrow5"
				pinLabels={swdHeaderPinLabels}
				supplierPartNumbers={supplierPartNumbers.pinHeader}
				pcbX={LAYOUT.debug.swd.x}
				pcbY={LAYOUT.debug.swd.y}
			/>
			<pinheader
				name="J3"
				pinCount={3}
				footprint="pinrow3"
				pinLabels={bootHeaderPinLabels}
				supplierPartNumbers={supplierPartNumbers.pinHeader}
				pcbX={LAYOUT.debug.boot0.x}
				pcbY={LAYOUT.debug.boot0.y}
			/>

			<trace from="U2.PA13" to="J2.SWDIO" />
			<trace from="U2.PA14" to="J2.SWCLK" />
			<trace from={nets.reset} to="J2.NRST" />
			<trace from="J2.VCC" to={nets.v3v3} />
			<trace from="J2.GND" to={nets.gnd} />

			<trace from={nets.boot0} to="J3.BOOT0" />
			<trace from="J3.3V3" to={nets.v3v3} />
			<trace from="J3.GND" to={nets.gnd} />

			<silkscreentext
				pcbX={LAYOUT.debug.swdLabel.x}
				pcbY={LAYOUT.debug.swdLabel.y}
				text="SWD"
				fontSize="1mm"
			/>
			<silkscreentext
				pcbX={LAYOUT.debug.boot0Label.x}
				pcbY={LAYOUT.debug.boot0Label.y}
				text="BOOT0"
				fontSize="1mm"
			/>
		</>
	);
}
