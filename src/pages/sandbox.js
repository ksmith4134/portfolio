import { useState, useEffect } from "react";

import LogoGridSvg from "@/components/svg/LogoGridSvg";


export default function Sandbox(props) {

    const {
        
    } = props

    
    const [ array, setArray ] = useState([
        { label: "everything", color: "text-neutral-500" },
        { label: "", color: "" },
    ])

    const [ sliderPosition, setSliderPosition ] = useState({ transform: "translateY(0)"})
    const [ selected, setSelected ] = useState(0)

    const handleHover = (name) => {
        
        if(name === "default"){
            setSelected(0)
        } else {
            let newArray = [];
            newArray.push(array[0]);
            newArray.push(TECH[name])
            setArray(newArray)    
            setSelected(1)
        }
    }

    useEffect(() => {
        setSliderPosition({ transform: `translateY(${selected * -100}%)`})
    }, [selected])


    const TECH = {
        "default": {label: "everything", color: "text-neutral-500"},
        "javascript": {label: "JavaScript", color: "text-amber-300"},
        "node": {label: "Node.js", color: "text-green-700"},
        "react": {label: "React.js", color: "text-sky-400"},
        "sql": {label: "MySQL", color: "text-orange-400"},
        "redux": {label: "Redux.js", color: "text-purple-600"},
        "tailwind": {label: "Tailwind CSS", color: "text-cyan-600"},
        "next": {label: "NEXT.js", color: "text-white"},
    }


    return (
        <main className="relative max-w-screen min-h-screen">
            <div className="max-w-5xl mx-auto px-8 slide-enter-content">

                <section className="mt-8 md:mt-0 md:min-h-screen flex flex-col md:flex-row justify-start items-center gap-8">
                    <div className="mt-8 md:mt-0 basis-1/2 text-center md:text-left max-w-lg">
                        <div className="text-md h-6 overflow-hidden inline-flex">
                            <h3 className="text-neutral-600">Web developing&nbsp;</h3>
                            <div className={`flex flex-col h-full transition-transform duration-500`} style={sliderPosition}>
                                {array.map(item => (
                                    <h3 key={item.label} className={`${item.color}`}>{item.label}</h3>
                                ))}
                            </div>
                        </div>
                        <h1 className="mt-6 text-6xl text-white font-extrabold">Kevin Smith</h1>
                        <p className="mt-6 md:max-w-sm text-white font-light leading-7">My daily programming stack includes JavaScript frameworks like NEXT, React, and Node, along with Tailwind and CSS3 for styling. Hover to see more...</p>
                    </div>
                    <div className="w-fit relative z-20 overflow-hidden md:h-96 flex flex-col justify-center md:shrink-0">
                        <LogoGridSvg showTechName={handleHover} />
                        <span className="mix-blend-overlay bg-gradient-svg absolute -z-10 w-full h-full top-0 left-0"></span>
                        <span className="mix-blend-overlay noise absolute -z-20 pointer-events-none inset-0 opacity-[0.08]"></span>
                    </div>
                </section>

            </div>    
        </main>
    )
}
