import type { ChipProps } from "@tscircuit/props";

const pinLabels = {
	pin1: ["IO1A"],
	pin2: ["GND"],
	pin3: ["IO2A"],
	pin4: ["IO2B"],
	pin5: ["VBUS"],
	pin6: ["IO1B"],
} as const;

export const USBLC6_2SC6 = (props: ChipProps<typeof pinLabels>) => {
	return (
		<chip
			pinLabels={pinLabels}
			pinAttributes={{
				VBUS: { requiresPower: true },
				GND: { requiresGround: true },
			}}
			supplierPartNumbers={{
				jlcpcb: ["C7519"],
			}}
			manufacturerPartNumber="USBLC6_2SC6"
			footprint={
				<footprint>
					<smtpad
						portHints={["pin1"]}
						pcbX="-0.94996mm"
						pcbY="-1.149096mm"
						width="0.532003mm"
						height="1.072007mm"
						shape="rect"
					/>
					<smtpad
						portHints={["pin2"]}
						pcbX="0mm"
						pcbY="-1.149096mm"
						width="0.532003mm"
						height="1.072007mm"
						shape="rect"
					/>
					<smtpad
						portHints={["pin3"]}
						pcbX="0.94996mm"
						pcbY="-1.149096mm"
						width="0.532003mm"
						height="1.072007mm"
						shape="rect"
					/>
					<smtpad
						portHints={["pin4"]}
						pcbX="0.94996mm"
						pcbY="1.149096mm"
						width="0.532003mm"
						height="1.072007mm"
						shape="rect"
					/>
					<smtpad
						portHints={["pin5"]}
						pcbX="0mm"
						pcbY="1.149096mm"
						width="0.532003mm"
						height="1.072007mm"
						shape="rect"
					/>
					<smtpad
						portHints={["pin6"]}
						pcbX="-0.94996mm"
						pcbY="1.149096mm"
						width="0.532003mm"
						height="1.072007mm"
						shape="rect"
					/>
					<silkscreenpath
						route={[
							{ x: 1.5391891999998961, y: -0.8892031999998835 },
							{ x: 1.5391891999998961, y: 0.8892031999999972 },
						]}
					/>
					<silkscreenpath
						route={[
							{ x: -1.5391892000000098, y: -0.8892031999998835 },
							{ x: -1.5391892000000098, y: 0.8892031999999972 },
						]}
					/>
					<courtyardoutline
						outline={[
							{ x: -2.078800000000001, y: 1.9264000000000578 },
							{ x: 1.7739999999998872, y: 1.9264000000000578 },
							{ x: 1.7739999999998872, y: -2.0279999999999063 },
							{ x: -2.078800000000001, y: -2.0279999999999063 },
							{ x: -2.078800000000001, y: 1.9264000000000578 },
						]}
					/>
				</footprint>
			}
			cadModel={{
				objUrl:
					"https://modelcdn.tscircuit.com/easyeda_models/assets/C7519.obj?uuid=229b69761e2c45dba6a83d8866dec72d",
				stepUrl:
					"https://modelcdn.tscircuit.com/easyeda_models/assets/C7519.step?uuid=229b69761e2c45dba6a83d8866dec72d",
				pcbRotationOffset: 90,
				modelOriginPosition: { x: 0, y: 0, z: -0.048939 },
			}}
			{...props}
		/>
	);
};
