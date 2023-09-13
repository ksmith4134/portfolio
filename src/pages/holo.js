/* eslint-disable @next/next/no-img-element */
import ThreeDCard from "@/components/widgets/hologram/3DCard/ThreeDCard";
import HologramCardLinear from "@/components/widgets/hologram/LinearApp/HologramCardLinear";
import HologramInitials from "@/components/widgets/hologram/Initials/HologramInitials";
import HologramTemplate from "@/components/widgets/hologram/HologramTemplate";
import HologramBitcoin from "@/components/widgets/hologram/Bitcoin/HologramBitcoin";
import HologramReact from "@/components/widgets/hologram/React/HologramReact";
import HologramPinkFloyd from "@/components/widgets/hologram/PinkFloyd/HologramPinkFloyd";
import LineGraph from "@/components/lineGraph";
import IconRender from "@/components/media/iconRender";

export default function Holo() {

    return (
        <div className='relative z-30 max-w-screen min-h-screen py-20 w-full'>
            <div className="max-w-4xl mx-auto">
                <div className="flex justify-center items-center gap-6">
                    
                        <HologramBitcoin />
                        <HologramPinkFloyd />
                        <HologramReact />
                    
                </div>
            </div>
        </div>
    );
}
