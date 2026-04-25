import type { ChipProps } from "@tscircuit/props";

const pinLabels = {
	pin1: ["D_POS"],
	pin2: ["D_NEG"],
	pin3: ["VBUS"],
	pin4: ["DGNDU"],
	pin5: ["HID0"],
	pin6: ["HID1"],
	pin7: ["HID2"],
	pin8: ["SEL0"],
	pin9: ["SEL1"],
	pin10: ["VCCCI"],
	pin11: ["AGNDC"],
	pin12: ["VINL"],
	pin13: ["VINR"],
	pin14: ["VCOM"],
	pin15: ["VOUTR"],
	pin16: ["VOUTL"],
	pin17: ["VCCP1I"],
	pin18: ["AGNDP"],
	pin19: ["VCCP2I"],
	pin20: ["XTO"],
	pin21: ["XTI"],
	pin22: ["AGNDX"],
	pin23: ["VCCXI"],
	pin24: ["TEST0"],
	pin25: ["TEST1"],
	pin26: ["DGND"],
	pin27: ["VDDI"],
	pin28: ["SSPND"],
} as const;

export const PCM2900CDBR = (props: ChipProps<typeof pinLabels>) => {
	return (
		<chip
			pinLabels={pinLabels}
			pinAttributes={{
				VBUS: { requiresPower: true },
				VCCCI: { requiresPower: true },
				VCCP1I: { requiresPower: true },
				VCCP2I: { requiresPower: true },
				VCCXI: { requiresPower: true },
				VDDI: { requiresPower: true },
				DGNDU: { requiresGround: true },
				AGNDC: { requiresGround: true },
				AGNDP: { requiresGround: true },
				AGNDX: { requiresGround: true },
				DGND: { requiresGround: true },
			}}
			supplierPartNumbers={{
				jlcpcb: ["C180425"],
			}}
			manufacturerPartNumber="PCM2900CDBR"
			footprint={
				<footprint>
					<smtpad
						portHints={["pin1"]}
						pcbX="-4.225036mm"
						pcbY="-3.455162mm"
						width="0.3640074mm"
						height="2.01549mm"
						shape="rect"
					/>
					<smtpad
						portHints={["pin2"]}
						pcbX="-3.57505mm"
						pcbY="-3.455162mm"
						width="0.3640074mm"
						height="2.01549mm"
						shape="rect"
					/>
					<smtpad
						portHints={["pin3"]}
						pcbX="-2.925064mm"
						pcbY="-3.455162mm"
						width="0.3640074mm"
						height="2.01549mm"
						shape="rect"
					/>
					<smtpad
						portHints={["pin4"]}
						pcbX="-2.275078mm"
						pcbY="-3.455162mm"
						width="0.3640074mm"
						height="2.01549mm"
						shape="rect"
					/>
					<smtpad
						portHints={["pin5"]}
						pcbX="-1.625092mm"
						pcbY="-3.455162mm"
						width="0.3640074mm"
						height="2.01549mm"
						shape="rect"
					/>
					<smtpad
						portHints={["pin6"]}
						pcbX="-0.975106mm"
						pcbY="-3.455162mm"
						width="0.3640074mm"
						height="2.01549mm"
						shape="rect"
					/>
					<smtpad
						portHints={["pin7"]}
						pcbX="-0.324866mm"
						pcbY="-3.455162mm"
						width="0.3640074mm"
						height="2.01549mm"
						shape="rect"
					/>
					<smtpad
						portHints={["pin8"]}
						pcbX="0.32512mm"
						pcbY="-3.455162mm"
						width="0.3640074mm"
						height="2.01549mm"
						shape="rect"
					/>
					<smtpad
						portHints={["pin9"]}
						pcbX="0.975106mm"
						pcbY="-3.455162mm"
						width="0.3640074mm"
						height="2.01549mm"
						shape="rect"
					/>
					<smtpad
						portHints={["pin10"]}
						pcbX="1.625092mm"
						pcbY="-3.455162mm"
						width="0.3640074mm"
						height="2.01549mm"
						shape="rect"
					/>
					<smtpad
						portHints={["pin11"]}
						pcbX="2.275078mm"
						pcbY="-3.455162mm"
						width="0.3640074mm"
						height="2.01549mm"
						shape="rect"
					/>
					<smtpad
						portHints={["pin12"]}
						pcbX="2.925064mm"
						pcbY="-3.455162mm"
						width="0.3640074mm"
						height="2.01549mm"
						shape="rect"
					/>
					<smtpad
						portHints={["pin13"]}
						pcbX="3.57505mm"
						pcbY="-3.455162mm"
						width="0.3640074mm"
						height="2.01549mm"
						shape="rect"
					/>
					<smtpad
						portHints={["pin14"]}
						pcbX="4.225036mm"
						pcbY="-3.455162mm"
						width="0.3640074mm"
						height="2.01549mm"
						shape="rect"
					/>
					<smtpad
						portHints={["pin28"]}
						pcbX="-4.225036mm"
						pcbY="3.455162mm"
						width="0.3640074mm"
						height="2.01549mm"
						shape="rect"
					/>
					<smtpad
						portHints={["pin27"]}
						pcbX="-3.57505mm"
						pcbY="3.455162mm"
						width="0.3640074mm"
						height="2.01549mm"
						shape="rect"
					/>
					<smtpad
						portHints={["pin26"]}
						pcbX="-2.925064mm"
						pcbY="3.455162mm"
						width="0.3640074mm"
						height="2.01549mm"
						shape="rect"
					/>
					<smtpad
						portHints={["pin25"]}
						pcbX="-2.275078mm"
						pcbY="3.455162mm"
						width="0.3640074mm"
						height="2.01549mm"
						shape="rect"
					/>
					<smtpad
						portHints={["pin24"]}
						pcbX="-1.625092mm"
						pcbY="3.455162mm"
						width="0.3640074mm"
						height="2.01549mm"
						shape="rect"
					/>
					<smtpad
						portHints={["pin23"]}
						pcbX="-0.975106mm"
						pcbY="3.455162mm"
						width="0.3640074mm"
						height="2.01549mm"
						shape="rect"
					/>
					<smtpad
						portHints={["pin22"]}
						pcbX="-0.324866mm"
						pcbY="3.455162mm"
						width="0.3640074mm"
						height="2.01549mm"
						shape="rect"
					/>
					<smtpad
						portHints={["pin21"]}
						pcbX="0.32512mm"
						pcbY="3.455162mm"
						width="0.3640074mm"
						height="2.01549mm"
						shape="rect"
					/>
					<smtpad
						portHints={["pin20"]}
						pcbX="0.975106mm"
						pcbY="3.455162mm"
						width="0.3640074mm"
						height="2.01549mm"
						shape="rect"
					/>
					<smtpad
						portHints={["pin19"]}
						pcbX="1.625092mm"
						pcbY="3.455162mm"
						width="0.3640074mm"
						height="2.01549mm"
						shape="rect"
					/>
					<smtpad
						portHints={["pin18"]}
						pcbX="2.275078mm"
						pcbY="3.455162mm"
						width="0.3640074mm"
						height="2.01549mm"
						shape="rect"
					/>
					<smtpad
						portHints={["pin17"]}
						pcbX="2.925064mm"
						pcbY="3.455162mm"
						width="0.3640074mm"
						height="2.01549mm"
						shape="rect"
					/>
					<smtpad
						portHints={["pin16"]}
						pcbX="3.57505mm"
						pcbY="3.455162mm"
						width="0.3640074mm"
						height="2.01549mm"
						shape="rect"
					/>
					<smtpad
						portHints={["pin15"]}
						pcbX="4.225036mm"
						pcbY="3.455162mm"
						width="0.3640074mm"
						height="2.01549mm"
						shape="rect"
					/>
					<silkscreenpath
						route={[
							{ x: 5.079999999999927, y: 2.199868600000059 },
							{ x: 5.079999999999927, y: -2.158999999999878 },
						]}
					/>
					<silkscreenpath
						route={[
							{ x: -5.080000000000041, y: -0.6439915999999357 },
							{ x: -5.080000000000041, y: -2.1999955999999656 },
						]}
					/>
					<silkscreenpath
						route={[
							{ x: -5.080000000000041, y: 0.6349999999999909 },
							{ x: -5.080000000000041, y: 2.199868600000059 },
						]}
					/>
					<silkscreenpath
						route={[
							{ x: -5.080000000000041, y: 2.199868600000059 },
							{ x: 5.079999999999927, y: 2.199868600000059 },
						]}
					/>
					<silkscreenpath
						route={[
							{ x: -5.080000000000041, y: -2.1999955999999656 },
							{ x: 5.079999999999927, y: -2.1999955999999656 },
						]}
					/>
					<silkscreenpath
						route={[
							{ x: -5.080000000000041, y: -0.6439915999999357 },
							{ x: -5.080000000000041, y: 0.6349999999999909 },
						]}
					/>
					<silkscreentext
						text="{NAME}"
						pcbX="0mm"
						pcbY="5.2926mm"
						anchorAlignment="center"
						fontSize="1mm"
					/>
					<courtyardoutline
						outline={[
							{ x: -5.355399999999918, y: 4.542600000000107 },
							{ x: 5.3554000000000315, y: 4.542600000000107 },
							{ x: 5.3554000000000315, y: -4.669599999999946 },
							{ x: -5.355399999999918, y: -4.669599999999946 },
							{ x: -5.355399999999918, y: 4.542600000000107 },
						]}
					/>
				</footprint>
			}
			cadModel={{
				objUrl:
					"https://modelcdn.tscircuit.com/easyeda_models/assets/C180425.obj?uuid=f6684975c608438e85ae4e120e588908",
				stepUrl:
					"https://modelcdn.tscircuit.com/easyeda_models/assets/C180425.step?uuid=f6684975c608438e85ae4e120e588908",
				pcbRotationOffset: 0,
				modelOriginPosition: { x: 0, y: 0, z: 0 },
			}}
			{...props}
		/>
	);
};
