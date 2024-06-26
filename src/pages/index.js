import Image from "next/image";
import { useState, useEffect } from "react";

import { SVG_LOGOS, TECH } from "@/components/Theme";
import { projects } from "@/data/projects2";
import { courses } from "@/data/courses";
import { BsTrophyFill } from "react-icons/bs"

import CardGradient from "@/components/ui/cardGradient";
import Link from "next/link";
import HolofoilBento from "@/components/widgets/hologram/BentoCard/HolofoilBento";
import LogoGridSvg from "@/components/svg/LogoGridSvg";


export default function Home(props) {

    const { } = props

    // #region TEXT SLIDER
    const [ sliderPosition, setSliderPosition ] = useState({ transform: "translateY(0)" })
    const [ selected, setSelected ] = useState(0)

    useEffect(() => {
        setTimeout(() => {
            if(selected === TECH.length-1){
                setSliderPosition({ transform: "translateY(0%)" })
                setSelected(0)
            } else {
                setSliderPosition({ transform: `translateY(${(selected+1) * -100}%)` })
                setSelected(selected+1)
            }
        }, 3000);
    }, [selected])
    // #endregion

    // #region SHOW MORE/FEWER PROJECTS
    const [ showProjects, setShowProjects ] = useState(projects.filter((item) => item.seeAll))
    const [ seeAll, setSeeAll ] = useState(false)

    function handleShowProjects(bool){
        setSeeAll(bool)
        bool === true ? 
            setShowProjects(projects) : 
            setShowProjects(projects.filter((item) => item.seeAll))
    }
    // #endregion


    return (
        <main className="relative max-w-screen min-h-screen">
            <div className="max-w-5xl mx-auto px-8 slide-enter-content">

                <section className="mt-8 md:mt-0 md:min-h-screen flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
                    <div className="mt-4 md:mt-0 basis-1/2 order-2 md:order-1 max-w-lg">
                        <div className="text-md h-6 overflow-y-hidden inline-flex">
                            <h3 className="text-neutral-500">Web developing&nbsp;</h3>
                            <div className={`flex flex-col h-full transition-transform duration-500`} style={sliderPosition}>
                                {TECH.map(item => (
                                    <h3 key={item.label} className={`${item.color}`}>{item.label}</h3>
                                ))}
                            </div>
                        </div>
                        <h1 className="mt-6 text-6xl text-white font-extrabold">Kevin Smith</h1>
                        <p className="mt-6 md:max-w-sm text-white font-light leading-7">
                            My daily programming stack includes JavaScript frameworks like NEXT, React, and Node; Styling with Tailwind and CSS3.
                        </p>
                    </div>
                    <div className="relative z-20 overflow-hidden md:h-96 order-1 md:order-2 flex flex-col justify-center w-full md:w-fit">
                        <LogoGridSvg techNameID={TECH[selected]} />
                        <span className="mix-blend-overlay bg-gradient-svg absolute -z-10 w-full h-full top-0 left-0"></span>
                        <span className="mix-blend-overlay noise absolute -z-20 pointer-events-none inset-0 opacity-[0.08]"></span>
                    </div>
                </section>

                <section className="mt-40 md:mt-0">
                    <h3 className="text-xl text-neutral-500">Open-Source</h3>
                    <h2 className="mt-4 text-5xl font-bold text-neutral-200">Code and contributions</h2>
                    <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
                        <Link href={"/articles/dynamic-content"}>
                            <CardGradient
                                alt={"how to do dynamic content modeling with a headless cms"}
                                title={"Dynamic Content Modeling"}
                                image={"/new/dynamic-content-12.svg"}
                                imageWidth={249}
                                imageHeight={130}
                            />
                        </Link>
                        <Link href={"/articles/holofoils"}>
                            <HolofoilBento opacity={0} foregroundImage={'/animations/holofoils/dark-neutral-background.jpg'}>
                                <CardGradient
                                    alt={"holofoil cards using css and javascript"}
                                    title={"Holofoil<br />Cards"}
                                    image={"/new/planet-4.svg"}
                                    imageWidth={249}
                                    imageHeight={130}
                                    holofoil={true}
                                />
                            </HolofoilBento>
                        </Link>
                        <Link href={"/articles/spotify"}>
                            <CardGradient
                                alt={"how to make a custom music player using spotify api"}
                                title={"Spotify Custom<br />Web Player"}
                                image={"/new/music-graphic-6.svg"}
                                imageWidth={249}
                                imageHeight={130}
                            />
                        </Link>
                    </div>
                </section>

                <section className="mt-40">
                    <h3 className="text-xl text-neutral-500">Professional Work</h3>
                    <h2 className="mt-4 text-5xl font-bold text-neutral-200">Websites and apps</h2>
                    <div className="mt-20">
                        { showProjects.map((project) => (
                            <div key={project.id} className="first:pt-0 pt-7 pb-7 last:pb-0 border-b last:border-b-0 border-neutral-800 group">
                                <Link 
                                    href={project.website}
                                    target="_blank"
                                >
                                    <h4 className="text-neutral-200 text-2xl group-hover:underline group-hover:underline-offset-4 group-hover:decoration-1">{project.title}</h4>
                                    <h5 className="mt-2 text-neutral-500 font-light">{project.type}</h5>
                                </Link>
                            </div>
                        ))}
                    </div>
                    <button className="mt-20 relative z-20 overflow-hidden w-36 rounded-md px-8 py-3 border border-neutral-600/50 hover:bg-neutral-900" onClick={() => handleShowProjects(!seeAll)}>
                            <p className="relative z-20 text-neutral-300 text-sm">{ seeAll ? 'See Less' : 'See More' }</p>
                            <span className="absolute z-10 w-full h-full bg-gradient-button-text top-0 left-0"></span>
                            <span className="absolute z-0 w-full h-full bg-gradient-button top-0 left-0"></span>
                            <span className="noise absolute z-0 pointer-events-none inset-0 opacity-[0.08]"></span>
                        </button>
                </section>

                <section className="mt-40">
                    <div className="relative z-10 overflow-hidden min-h-[400px] flex flex-col justify-center rounded-2xl border border-neutral-800 bg-template-card">
                        <span className="noise z-0 absolute pointer-events-none inset-0 opacity-[0.15]"></span>
                        <div className="relative w-full h-full p-8 md:p-16 flex flex-col md:flex-row justify-between items-center gap-8">
                            <div className="md:pl-4">
                                <h3 className="text-center md:text-left -ml-2 md:ml-0 text-xl text-neutral-500">Education</h3>
                                <h2 className="mt-4 text-center md:text-left  text-5xl font-bold text-neutral-200">Always.</h2>
                                <h2 className="mt-2 text-center md:text-left  text-5xl font-bold text-neutral-200">Learning.</h2>
                            </div>
                            <div className="w-full md:w-[400px] relative z-10">
                                { courses.map((course, index) => (
                                    <a key={course.id} href={course.certificateURL} target="_blank" className="first:mt-0 mt-4 rounded-xl border border-white/10 bg-neutral-400/5 hover:bg-neutral-400/10 hover:cursor-pointer flex justify-start items-center gap-4 p-2 relative group">
                                        <div className="w-10 h-10 rounded-lg bg-neutral-950/50 border border-neutral-800 p-2 flex justify-center items-center">
                                            <BsTrophyFill className="text-neutral-200 text-lg opacity-70 group-hover:opacity-100" />
                                        </div>
                                        <p className="text-sm text-white font-extralight">{course.title}</p>
                                        <div className={`${courses.length === index + 1 && 'hidden'} h-4 absolute border-l border-white/10 top-[57px] left-7`}></div>
                                    </a>
                                ))}
                            </div>
                        </div>

                    </div>
                </section>

                {/* TECH LOGOS */}
                <section className="hidden md:block mt-40 px-8">
                    <div className="flex flex-wrap gap-8 md:gap-2 place-items-center justify-between">
                        {SVG_LOGOS.map((logo) => (
                            <Image key={logo.id} src={logo.svg} width={logo.width/1.5} height={logo.height/1.5} alt="logo" className="opacity-80" />
                        ))}
                    </div>
                </section>                

            </div>    
        </main>
    )
}
