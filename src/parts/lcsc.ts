const jlc = (part: string) => ({ jlcpcb: [part] })

export const supplierPartNumbers = {
  pinHeader: jlc("C492405"),
  resistor0603: jlc("C23186"),
  capacitor0603_100n: jlc("C14663"),
  capacitor0603_22p: jlc("C1653"),
  capacitor0603_1u: jlc("C15849"),
  capacitor0805_10u: jlc("C15850"),
  led0603Green: jlc("C72043"),
  led0603Yellow: jlc("C72038"),
  led0603Red: jlc("C2286"),
}

export const pcm2902Part = {
  footprint: "ssop28",
  manufacturerPartNumber: "PCM2902CDBR",
  supplierPartNumbers: jlc("C467656"),
}
