import { Fragment } from "react";
import { A_74HC595D_118 } from "../../../imports/A_74HC595D_118";
import { supplierPartNumbers } from "../../parts/lcsc";
import {
	LAYOUT,
	LED_SPACING_MM,
	LED_START_X_MM,
	TRACE_WIDTHS,
} from "../../utils/constants";
import { nets } from "../../utils/nets";

const ledSources = [
	"U6.Q0",
	"U6.Q1",
	"U6.Q2",
	"U6.Q3",
	"U6.Q4",
	"U6.Q5",
	"U6.Q6",
	"U6.Q7",
	"U7.Q0",
	"U7.Q1",
	"U7.Q2",
	"U7.Q3",
	"U7.Q4",
	"U7.Q5",
	"U7.Q6",
	"U7.Q7",
	"U8.Q0",
	"U8.Q1",
	"U8.Q2",
	"U8.Q3",
] as const;

const ledXs = Array.from(
	{ length: 20 },
	(_, index) => LED_START_X_MM + index * LED_SPACING_MM,
);

function getLedPart(index: number) {
	const segment = index < 10 ? 9 - index : index - 10;
	if (segment >= 8) return supplierPartNumbers.led0603Red;
	if (segment >= 6) return supplierPartNumbers.led0603Yellow;
	return supplierPartNumbers.led0603Green;
}

function getLedColor(index: number) {
	const segment = index < 10 ? 9 - index : index - 10;
	if (segment >= 8) return "red";
	if (segment >= 6) return "yellow";
	return "green";
}

export function LedBar() {
	return (
		<>
			<A_74HC595D_118
				name="U6"
				pcbX={21}
				pcbY={LAYOUT.ledBar.driversY}
				pcbRotation={90}
			/>
			<A_74HC595D_118
				name="U7"
				pcbX={33}
				pcbY={LAYOUT.ledBar.driversY}
				pcbRotation={90}
			/>
			<A_74HC595D_118
				name="U8"
				pcbX={45}
				pcbY={LAYOUT.ledBar.driversY}
				pcbRotation={90}
			/>
			<capacitor
				name="C16"
				capacitance="100nF"
				footprint="0603"
				supplierPartNumbers={supplierPartNumbers.capacitor0603_100n}
				pcbX={21}
				pcbY={LAYOUT.ledBar.decouplingY}
			/>
			<capacitor
				name="C17"
				capacitance="100nF"
				footprint="0603"
				supplierPartNumbers={supplierPartNumbers.capacitor0603_100n}
				pcbX={33}
				pcbY={LAYOUT.ledBar.decouplingY}
			/>
			<capacitor
				name="C18"
				capacitance="100nF"
				footprint="0603"
				supplierPartNumbers={supplierPartNumbers.capacitor0603_100n}
				pcbX={45}
				pcbY={LAYOUT.ledBar.decouplingY}
			/>

			{ledXs.map((x, index) => {
				const part = getLedPart(index);
				return (
					<led
						key={`led-${index + 1}`}
						name={`LED${index + 1}`}
						color={getLedColor(index)}
						footprint="0603"
						supplierPartNumbers={part}
						pcbX={x}
						pcbY={LAYOUT.ledBar.ledsY}
						pcbRotation={90}
					/>
				);
			})}

			{ledXs.map((x, index) => (
				<resistor
					key={`rled-${index + 1}`}
					name={`RLED${index + 1}`}
					resistance="330"
					footprint="0603"
					supplierPartNumbers={supplierPartNumbers.resistor0603}
					pcbX={x}
					pcbY={LAYOUT.ledBar.resistorsY}
					pcbRotation={90}
				/>
			))}

			<trace from={nets.ledSrclk} to="U6.SHCP" width={TRACE_WIDTHS.signal} />
			<trace from={nets.ledSrclk} to="U7.SHCP" width={TRACE_WIDTHS.signal} />
			<trace from={nets.ledSrclk} to="U8.SHCP" width={TRACE_WIDTHS.signal} />
			<trace from={nets.ledLatch} to="U6.STCP" width={TRACE_WIDTHS.signal} />
			<trace from={nets.ledLatch} to="U7.STCP" width={TRACE_WIDTHS.signal} />
			<trace from={nets.ledLatch} to="U8.STCP" width={TRACE_WIDTHS.signal} />
			<trace from={nets.ledOe} to="U6.OE" width={TRACE_WIDTHS.signal} />
			<trace from={nets.ledOe} to="U7.OE" width={TRACE_WIDTHS.signal} />
			<trace from={nets.ledOe} to="U8.OE" width={TRACE_WIDTHS.signal} />
			<trace from={nets.ledData} to="U6.DS" width={TRACE_WIDTHS.signal} />
			<trace from="U6.Q7S" to="U7.DS" width={TRACE_WIDTHS.signal} />
			<trace from="U7.Q7S" to="U8.DS" width={TRACE_WIDTHS.signal} />
			<trace from={nets.v3v3} to="U6.MR" />
			<trace from={nets.v3v3} to="U7.MR" />
			<trace from={nets.v3v3} to="U8.MR" />
			<trace from="U6.VCC" to={nets.v3v3} />
			<trace from="U7.VCC" to={nets.v3v3} />
			<trace from="U8.VCC" to={nets.v3v3} />
			<trace from="U6.GND" to={nets.gnd} />
			<trace from="U7.GND" to={nets.gnd} />
			<trace from="U8.GND" to={nets.gnd} />
			<trace from="C16.pin1" to={nets.v3v3} />
			<trace from="C16.pin2" to={nets.gnd} />
			<trace from="C17.pin1" to={nets.v3v3} />
			<trace from="C17.pin2" to={nets.gnd} />
			<trace from="C18.pin1" to={nets.v3v3} />
			<trace from="C18.pin2" to={nets.gnd} />

			{ledXs.map((_, index) => (
				<Fragment key={`rled-vcc-${index + 1}`}>
					<trace
						from={`RLED${index + 1}.pin1`}
						to={nets.v3v3}
						width={TRACE_WIDTHS.led}
					/>
				</Fragment>
			))}
			{ledXs.map((_, index) => (
				<Fragment key={`driver-rled-${index + 1}`}>
					<trace
						from={ledSources[index]}
						to={`RLED${index + 1}.pin2`}
						width={TRACE_WIDTHS.led}
					/>
				</Fragment>
			))}
			{ledXs.map((_, index) => (
				<Fragment key={`rled-led-${index + 1}`}>
					<trace
						from={`RLED${index + 1}.pin2`}
						to={`LED${index + 1}.pin1`}
						width={TRACE_WIDTHS.led}
					/>
				</Fragment>
			))}
			{ledXs.map((_, index) => (
				<Fragment key={`led-gnd-${index + 1}`}>
					<trace
						from={`LED${index + 1}.pin2`}
						to={nets.gnd}
						width={TRACE_WIDTHS.led}
					/>
				</Fragment>
			))}

			<silkscreentext
				pcbX={LAYOUT.ledBar.leftLabel.x}
				pcbY={LAYOUT.ledBar.leftLabel.y}
				text="LEFT 10 SEG"
				fontSize="1mm"
			/>
			<silkscreentext
				pcbX={LAYOUT.ledBar.rightLabel.x}
				pcbY={LAYOUT.ledBar.rightLabel.y}
				text="RIGHT 10 SEG"
				fontSize="1mm"
			/>
		</>
	);
}
