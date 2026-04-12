import { CodecSection } from "./components/CodecSection/CodecSection"
import { DebugHeader } from "./components/DebugHeader/DebugHeader"
import { Display } from "./components/Display/Display"
import { LedBar } from "./components/LedBar/LedBar"
import { McuSection } from "./components/McuSection/McuSection"
import { PowerSection } from "./components/PowerSection/PowerSection"
import { UsbSection } from "./components/UsbSection/UsbSection"
import { BOARD_HEIGHT_MM, BOARD_WIDTH_MM } from "./utils/constants"

export default function UsbAudioVuMeter() {
  return (
    <board width={`${BOARD_WIDTH_MM}mm`} height={`${BOARD_HEIGHT_MM}mm`} layers={2} routingDisabled>
      <UsbSection />
      <PowerSection />
      <CodecSection />
      <McuSection />
      <LedBar />
      <Display />
      <DebugHeader />

      <copperpour layer="top" connectsTo="net.GND" clearance="0.2mm" />
      <copperpour layer="bottom" connectsTo="net.GND" clearance="0.2mm" />

      <silkscreentext pcbX={0} pcbY={-21} text="USB AUDIO VU METER - PCM2902 + STM32F303" fontSize="1.1mm" />
      <silkscreentext pcbX={-33} pcbY={-20} text="USB diff pair short/matched; keep GND plane solid" fontSize="0.8mm" />
    </board>
  )
}
