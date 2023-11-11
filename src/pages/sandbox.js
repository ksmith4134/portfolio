import { useState, useEffect } from "react";
import { BsArrowRightShort } from "react-icons/bs"
import LogoGridSvg from "@/components/svg/LogoGridSvg";
import { TECH } from "@/components/Theme";

export default function Sandbox(props) {


    const [ sliderPosition, setSliderPosition ] = useState({ transform: "translateY(0)"})
    const [ selected, setSelected ] = useState(0)


    useEffect(() => {
        setTimeout(() => {
            if(selected === TECH.length-1){
                setSliderPosition({ transform: "translateY(0%)"})
                setSelected(0)
            } else {
                setSliderPosition({ transform: `translateY(${(selected+1) * -100}%)`})
                setSelected(selected+1)
            }
        }, 3000);
    }, [selected])


    return (
        <main className="relative max-w-screen min-h-screen">
            <div className="max-w-5xl mx-auto px-8 slide-enter-content">

                <section className="mt-8 md:mt-0 md:min-h-screen flex flex-col md:flex-row justify-start items-center gap-8">
                    <div className="mt-8 md:mt-0 basis-1/2 max-w-lg">
                        <div className="text-md h-6 overflow-hidden inline-flex">
                            <h3 className="text-neutral-600">Web developing&nbsp;</h3>
                            <div className={`flex flex-col h-full transition-transform duration-500`} style={sliderPosition}>
                                {TECH.map(item => (
                                    <h3 key={item.id} className={`${item.color}`}>{item.label}</h3>
                                ))}
                            </div>
                        </div>
                        <h1 className="mt-6 text-6xl text-white font-extrabold">Kevin Smith</h1>
                        <p className="mt-6 md:max-w-sm text-white font-light leading-7">
                            My daily programming stack includes JavaScript frameworks like NEXT, React, and Node, along with Tailwind and CSS3 for styling.&nbsp;
                            <span className="hidden md:inline-flex">Hover over icons&nbsp;</span>
                            <span className="inline-flex md:hidden">Click icons&nbsp;</span>
                            <BsArrowRightShort className="text-white text-2xl inline-flex" />
                        </p>
                    </div>
                    <div className="w-fit relative z-20 overflow-hidden md:h-96 flex flex-col justify-center md:shrink-0">
                        <LogoGridSvg techNameID={TECH[selected]} />
                        <span className="mix-blend-overlay bg-gradient-svg absolute -z-10 w-full h-full top-0 left-0"></span>
                        <span className="mix-blend-overlay noise absolute -z-20 pointer-events-none inset-0 opacity-[0.08]"></span>
                    </div>
                </section>            

            </div>    
        </main>
    )
}
