export const BOARD_WIDTH_MM = 120;
export const BOARD_HEIGHT_MM = 74;

export const TRACE_WIDTHS = {
	usb: "0.18mm",
	signal: "0.15mm",
	power: "0.45mm",
	led: "0.15mm",
} as const;

export const LED_COUNT = 24;
export const LED_SPACING_MM = 4;
export const LED_START_X_MM = -41.75;

export const LAYOUT = {
	usb: {
		connector: { x: -55.5, y: -8 },
		esd: { x: -43, y: -8 },
		fuse: { x: -47, y: -15 },
		cc1: { x: -50, y: 5 },
		cc2: { x: -50, y: 1.5 },
		label: { x: -45, y: 10 },
	},
	power: {
		c1: { x: -52, y: -26 },
		c2: { x: -50, y: -29 },
		regulator: { x: -40, y: -24 },
		c3: { x: -30, y: -25 },
		c4: { x: -26, y: -28 },
		label: { x: -42, y: -31 },
	},
	codec: {
		pcm2900: { x: -30, y: -3 },
		crystal: { x: -24, y: 8 },
		c5: { x: -32, y: 10 },
		c6: { x: -16, y: 10 },
		c7: { x: -42, y: 8 },
		c8: { x: -42, y: 5 },
		c9: { x: -42, y: 2 },
		c10: { x: -27, y: -13 },
		c19: { x: -17, y: -13 },
		c20: { x: -13, y: -13 },
		c21: { x: -9, y: -13 },
		r5: { x: -17, y: -5 },
		r6: { x: -17, y: -1 },
		label: { x: -32, y: 14 },
	},
	mcu: {
		stm32: { x: 0, y: -3 },
		decouplingXs: [-6, -3, 0, 3, 6],
		decouplingY: 9,
		resetPulldowns: {
			r3: { x: 8, y: -13 },
			r4: { x: 12, y: -10 },
			switch: { x: 2, y: -17 },
		},
		label: { x: 4, y: 15 },
		resetLabel: { x: -4, y: -22 },
	},
	ledBar: {
		driverXs: [20, 33, 46],
		driversY: 2,
		decouplingY: 12,
		resistorsY: 23,
		ledsY: 27,
		leftLabel: { x: -32, y: 34.5 },
		rightLabel: { x: 32, y: 34.5 },
	},
	debug: {
		swd: { x: 48, y: -30 },
		boot0: { x: 30, y: -30 },
		swdLabel: { x: 48, y: -26 },
		boot0Label: { x: 30, y: -26 },
	},
	boardText: {
		title: { x: 0, y: 35 },
		usbNote: { x: -28, y: -34 },
	},
} as const;
