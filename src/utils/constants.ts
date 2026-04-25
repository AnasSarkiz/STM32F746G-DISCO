export const BOARD_WIDTH_MM = 100;
export const BOARD_HEIGHT_MM = 60;

export const TRACE_WIDTHS = {
	usb: "0.18mm",
	signal: "0.15mm",
	power: "0.45mm",
	led: "0.15mm",
} as const;

export const LED_SPACING_MM = 4;
export const LED_START_X_MM = -38;

export const LAYOUT = {
	usb: {
		connector: { x: -46.5, y: -2 },
		esd: { x: -39, y: -2 },
		fuse: { x: -42, y: -12 },
		cc1: { x: -44, y: 8 },
		cc2: { x: -44, y: 5 },
		label: { x: -39, y: 11.5 },
	},
	power: {
		c1: { x: -40, y: -15.5 },
		c2: { x: -36, y: -17 },
		regulator: { x: -30, y: -13 },
		c3: { x: -22, y: -14 },
		c4: { x: -18.5, y: -17 },
		label: { x: -26, y: -17.5 },
	},
	codec: {
		pcm2900: { x: -19, y: 0 },
		crystal: { x: -10, y: 8 },
		c5: { x: -18, y: 10 },
		c6: { x: -2, y: 10 },
		c7: { x: -29, y: 8 },
		c8: { x: -29, y: 5 },
		c9: { x: -29, y: 2 },
		c10: { x: -13, y: -9 },
		label: { x: -21, y: 12.5 },
	},
	mcu: {
		stm32: { x: 2, y: 0 },
		decouplingY: 10,
		resetPulldowns: {
			r3: { x: 9, y: -7 },
			r4: { x: 11, y: -5 },
			switch: { x: 0, y: -11 },
		},
		label: { x: 2, y: 12.7 },
		resetLabel: { x: -4, y: -15.2 },
	},
	ledBar: {
		driversY: 3,
		decouplingY: 11,
		resistorsY: 15,
		ledsY: 18,
		leftLabel: { x: -20, y: 20.7 },
		rightLabel: { x: 25, y: 20.7 },
	},
	display: {
		module: { x: 32, y: -16, width: 28, height: 26 },
		activeArea: { x: 32, y: -14, width: 23, height: 12 },
		header: { x: 32, y: -26 },
		pullupScl: { x: 10, y: -25 },
		pullupSda: { x: 13, y: -25 },
		label: { x: 32, y: -3.5 },
	},
	debug: {
		swd: { x: -4, y: -26 },
		boot0: { x: -20, y: -26 },
		swdLabel: { x: -4, y: -22 },
		boot0Label: { x: -20, y: -22 },
	},
	boardText: {
		title: { x: 0, y: 27 },
		usbNote: { x: -27, y: 24 },
	},
} as const;
