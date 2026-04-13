import type { ChipProps } from "tscircuit";
import { X322512MSB4SI } from "../../../imports/X322512MSB4SI";
import { pcm2902Part, supplierPartNumbers } from "../../parts/lcsc";
import { LAYOUT, TRACE_WIDTHS } from "../../utils/constants";
import { nets } from "../../utils/nets";

const pcm2902PinLabels = {
	pin1: "VCC5",
	pin2: "DGND",
	pin3: "DPLUS",
	pin4: "DMINUS",
	pin5: "VBUS",
	pin6: "XTI",
	pin7: "XTO",
	pin8: "AGND",
	pin9: "VCCL",
	pin10: "VCOM",
	pin11: "LOUT",
	pin12: "ROUT",
	pin13: "HPL",
	pin14: "HPR",
	pin15: "SSPND",
	pin16: "PSEL",
	pin17: "SCKO",
	pin18: "BCK",
	pin19: "DIN",
	pin20: "DOUT",
	pin21: "LRCK",
	pin22: "TEST0",
	pin23: "TEST1",
	pin24: "TEST2",
	pin25: "TEST3",
	pin26: "GNDA2",
	pin27: "VCCP",
	pin28: "GNDP",
} as const;

const pcm2902LeftPadYs = [
	8.255, 6.985, 5.715, 4.445, 3.175, 1.905, 0.635, -0.635, -1.905, -3.175,
	-4.445, -5.715, -6.985, -8.255,
];
const pcm2902RightPadYs = [
	-8.255, -6.985, -5.715, -4.445, -3.175, -1.905, -0.635, 0.635, 1.905, 3.175,
	4.445, 5.715, 6.985, 8.255,
];

const pcm2902Footprint = (
	<footprint>
		{pcm2902LeftPadYs.map((y, index) => (
			// @ts-expect-error React keys are valid on generated JSX children, but tscircuit's intrinsic pad type does not expose them.
			<smtpad
				key={`left-${index}`}
				portHints={[`${index + 1}`]}
				pcbX="-2.05mm"
				pcbY={`${y}mm`}
				width="1.1mm"
				height="0.51mm"
				shape="rect"
			/>
		))}
		{pcm2902RightPadYs.map((y, index) => (
			// @ts-expect-error React keys are valid on generated JSX children, but tscircuit's intrinsic pad type does not expose them.
			<smtpad
				key={`right-${index}`}
				portHints={[`${index + 15}`]}
				pcbX="2.05mm"
				pcbY={`${y}mm`}
				width="1.1mm"
				height="0.51mm"
				shape="rect"
			/>
		))}
		<silkscreenrect pcbX={0} pcbY={0} width="5.2mm" height="17mm" />
	</footprint>
);

const PCM2902 = (props: ChipProps<typeof pcm2902PinLabels>) => (
	<chip
		{...props}
		footprint={pcm2902Footprint}
		manufacturerPartNumber={pcm2902Part.manufacturerPartNumber}
		supplierPartNumbers={pcm2902Part.supplierPartNumbers}
		pinLabels={pcm2902PinLabels}
		pinAttributes={{
			VBUS: { requiresPower: true },
			VCC5: { requiresPower: true },
			VCCL: { requiresPower: true },
			VCCP: { requiresPower: true },
			DGND: { requiresGround: true },
			AGND: { requiresGround: true },
			GNDA2: { requiresGround: true },
			GNDP: { requiresGround: true },
		}}
	/>
);

export function CodecSection() {
	return (
		<>
			<PCM2902
				name="U1"
				pcbX={LAYOUT.codec.pcm2902.x}
				pcbY={LAYOUT.codec.pcm2902.y}
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

			<trace from={nets.usbDp} to="U1.DPLUS" width={TRACE_WIDTHS.usb} />
			<trace from={nets.usbDm} to="U1.DMINUS" width={TRACE_WIDTHS.usb} />
			<trace from={nets.vbus} to="U1.VBUS" width="0.3mm" />
			<trace from={nets.vbus} to="U1.VCC5" width="0.3mm" />
			<trace from={nets.vbus} to="U1.VCCL" width="0.3mm" />
			<trace from={nets.vbus} to="U1.VCCP" width="0.3mm" />
			<trace from="U1.DGND" to={nets.gnd} />
			<trace from="U1.AGND" to={nets.gnd} />
			<trace from="U1.GNDA2" to={nets.gnd} />
			<trace from="U1.GNDP" to={nets.gnd} />

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

			<trace from="U1.PSEL" to={nets.gnd} />
			<trace from="U1.SSPND" to={nets.vbus} />
			<trace from="U1.TEST0" to={nets.gnd} />
			<trace from="U1.TEST1" to={nets.gnd} />
			<trace from="U1.TEST2" to={nets.gnd} />
			<trace from="U1.TEST3" to={nets.gnd} />

			<trace from="U1.SCKO" to={nets.audioMclk} />
			<trace from="U1.BCK" to={nets.audioBclk} />
			<trace from="U1.LRCK" to={nets.audioLrck} />
			<trace from="U1.DOUT" to={nets.audioData} />

			<silkscreentext
				pcbX={LAYOUT.codec.label.x}
				pcbY={LAYOUT.codec.label.y}
				text="PCM2902 USB AUDIO"
				fontSize="1.1mm"
			/>
		</>
	);
}
