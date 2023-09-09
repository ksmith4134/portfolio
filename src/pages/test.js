/* eslint-disable @next/next/no-img-element */
import HologramCardTest from "@/components/widgets/hologram/HologramCardTest"
import HologramCardLinear from "@/components/widgets/hologram/HologramCardLinear"

export default function test() {
  return (
    <div className="relative z-30 max-w-screen min-h-screen py-40">
        <div className="flex justify-center items-center">
            <HologramCardLinear />
            {/* <HologramCardTest /> */}
        </div>
    </div>
  )
}
