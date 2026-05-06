import { STM32F303CCT6 } from "../../../imports/STM32F303CCT6";
import { TS_1187A_B_A_B } from "../../../imports/TS_1187A_B_A_B";
import { supplierPartNumbers } from "../../parts/lcsc";
import { LAYOUT } from "../../utils/constants";
import { nets } from "../../utils/nets";

export function McuSection() {
	return (
		<>
			<STM32F303CCT6
				name="U2"
				pcbX={LAYOUT.mcu.stm32.x}
				pcbY={LAYOUT.mcu.stm32.y}
			/>
			<capacitor
				name="C11"
				capacitance="100nF"
				footprint="0603"
				supplierPartNumbers={supplierPartNumbers.capacitor0603_100n}
				pcbX={LAYOUT.mcu.decouplingXs[0]}
				pcbY={LAYOUT.mcu.decouplingY}
			/>
			<capacitor
				name="C12"
				capacitance="100nF"
				footprint="0603"
				supplierPartNumbers={supplierPartNumbers.capacitor0603_100n}
				pcbX={LAYOUT.mcu.decouplingXs[1]}
				pcbY={LAYOUT.mcu.decouplingY}
			/>
			<capacitor
				name="C13"
				capacitance="100nF"
				footprint="0603"
				supplierPartNumbers={supplierPartNumbers.capacitor0603_100n}
				pcbX={LAYOUT.mcu.decouplingXs[2]}
				pcbY={LAYOUT.mcu.decouplingY}
			/>
			<capacitor
				name="C14"
				capacitance="100nF"
				footprint="0603"
				supplierPartNumbers={supplierPartNumbers.capacitor0603_100n}
				pcbX={LAYOUT.mcu.decouplingXs[3]}
				pcbY={LAYOUT.mcu.decouplingY}
			/>
			<capacitor
				name="C15"
				capacitance="1uF"
				footprint="0603"
				supplierPartNumbers={supplierPartNumbers.capacitor0603_1u}
				pcbX={LAYOUT.mcu.decouplingXs[4]}
				pcbY={LAYOUT.mcu.decouplingY}
			/>

			<resistor
				name="R3"
				resistance="10k"
				footprint="0603"
				supplierPartNumbers={supplierPartNumbers.resistor0603_10k}
				pcbX={LAYOUT.mcu.resetPulldowns.r3.x}
				pcbY={LAYOUT.mcu.resetPulldowns.r3.y}
			/>
			<resistor
				name="R4"
				resistance="100k"
				footprint="0603"
				supplierPartNumbers={supplierPartNumbers.resistor0603_100k}
				pcbX={LAYOUT.mcu.resetPulldowns.r4.x}
				pcbY={LAYOUT.mcu.resetPulldowns.r4.y}
			/>
			<TS_1187A_B_A_B
				name="SW1"
				pcbX={LAYOUT.mcu.resetPulldowns.switch.x}
				pcbY={LAYOUT.mcu.resetPulldowns.switch.y}
			/>

			<trace from="U2.VBAT" to={nets.v3v3} />
			<trace from="U2.VDD1" to={nets.v3v3} />
			<trace from="U2.VDD2" to={nets.v3v3} />
			<trace from="U2.VDD3" to={nets.v3v3} />
			<trace from="U2.VDDA" to={nets.v3v3} />
			<trace from="U2.VSSA" to={nets.gnd} />
			<trace from="U2.VSS1" to={nets.gnd} />
			<trace from="U2.VSS2" to={nets.gnd} />
			<trace from="U2.VSS3" to={nets.gnd} />
			<trace from="C11.pin1" to={nets.v3v3} />
			<trace from="C11.pin2" to={nets.gnd} />
			<trace from="C12.pin1" to={nets.v3v3} />
			<trace from="C12.pin2" to={nets.gnd} />
			<trace from="C13.pin1" to={nets.v3v3} />
			<trace from="C13.pin2" to={nets.gnd} />
			<trace from="C14.pin1" to={nets.v3v3} />
			<trace from="C14.pin2" to={nets.gnd} />
			<trace from="C15.pin1" to={nets.v3v3} />
			<trace from="C15.pin2" to={nets.gnd} />

			<trace from="U2.NRST" to={nets.reset} />
			<trace from={nets.reset} to="R3.pin1" />
			<trace from="R3.pin2" to={nets.v3v3} />
			<trace from={nets.reset} to="SW1.A" />
			<trace from="SW1.B" to={nets.gnd} />
			<trace from={nets.reset} to="SW1.C" />
			<trace from="SW1.D" to={nets.gnd} />

			<trace from="U2.BOOT0" to={nets.boot0} />
			<trace from={nets.boot0} to="R4.pin1" />
			<trace from="R4.pin2" to={nets.gnd} />

			<trace from="U2.PA0" to={nets.ledData} />
			<trace from="U2.PA1" to={nets.ledSrclk} />
			<trace from="U2.PA2" to={nets.ledLatch} />
			<trace from="U2.PA3" to={nets.ledOe} />
			<trace from="U2.PA4" to={nets.audioLeft} />
			<trace from="U2.PA5" to={nets.audioRight} />

			<silkscreentext
				pcbX={LAYOUT.mcu.label.x}
				pcbY={LAYOUT.mcu.label.y}
				text="STM32F303 VU DSP"
				fontSize="1.1mm"
			/>
			<silkscreentext
				pcbX={LAYOUT.mcu.resetLabel.x}
				pcbY={LAYOUT.mcu.resetLabel.y}
				text="RESET"
				fontSize="1mm"
			/>
		</>
	);
}
