/* eslint-disable @next/next/no-img-element */
import HologramBitcoin from "@/components/widgets/hologram/Bitcoin/HologramBitcoin";
import HologramReact from "@/components/widgets/hologram/React/HologramReact";
import HologramPinkFloyd from "@/components/widgets/hologram/PinkFloyd/HologramPinkFloyd";

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
