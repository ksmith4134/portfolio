/* eslint-disable @next/next/no-img-element */
import ThreeDCard from "@/components/widgets/hologram/3DCard/ThreeDCard"
import HologramCardLinear from "@/components/widgets/hologram/LinearApp/HologramCardLinear"
import HologramInitials from "@/components/widgets/hologram/Initials/HologramInitials"
import HologramTemplate from "@/components/widgets/hologram/HologramTemplate"
import HologramBitcoin from "@/components/widgets/hologram/Bitcoin/HologramBitcoin"


export default function test() {
  return (
    <div className="relative z-30 max-w-screen min-h-screen py-20">
        <div className="flex flex-col justify-center items-center gap-8">
            <HologramBitcoin />
        </div>
    </div>
  )
}
