import Image from "next/image";

import { SVG_LOGOS } from "@/components/Theme";
import { projects } from "@/data/projects2";
import { courses } from "@/data/courses";
import { SiUdemy } from "react-icons/si"

import HolofoilBento from "@/components/widgets/hologram/BentoCard/HolofoilBento";
import RoundedButton from "@/components/ui/roundedButton";
import CardGradient from "@/components/ui/cardGradient";
import Link from "next/link";


export default function Home(props) {

    const {
        
    } = props

    return (
        <main className="relative max-w-screen min-h-screen">
            <div className="max-w-5xl mx-auto px-8">

                <section className="mt-24 flex flex-col md:flex-row justify-center items-center gap-8">
                    <div className="order-2 md:order-1 basis-1/2">
                        <RoundedButton label={"web developer"} />
                        <h1 className="mt-6 text-6xl text-white font-extrabold">Kevin Smith</h1>
                        <p className="mt-6 max-w-sm text-white font-light leading-7">My daily programming stack includes JavaScript frameworks like NEXT, React, and Node, along with Tailwind and CSS3 for styling.</p>
                    </div>
                    <div className="order-1 md:order-2 basis-1/2 p-4">
                        <Image 
                            alt="web development technology logos"
                            src={"/new/logo-grid.svg"}
                            width={452}
                            height={286}
                            className=""
                        />
                    </div>
                </section>

                <section className="mt-36">
                    <h3 className="text-xl text-neutral-600">Open-Source</h3>
                    <h2 className="mt-4 text-5xl font-bold text-neutral-200">Code and contributions</h2>
                    <div className="mt-12 grid grid-cols-3 gap-8 h-80">
                        <CardGradient
                            url={"/articles/holofoils"}
                            alt={"holofoil cards using css and javascript"}
                            title={"Holofoil<br />Cards"}
                            image={"/new/holofoil-graphic.svg"}
                            imageWidth={307}
                            imageHeight={162}
                        />
                        <CardGradient
                            url={"/articles/dynamic-content"}
                            alt={"how to do dynamic content modeling with a headless cms"}
                            title={"Dynamic Content Modeling"}
                            image={"/new/dynamic-content-2.svg"}
                            imageWidth={256}
                            imageHeight={133}
                        />
                        <CardGradient
                            url={"/articles/spotify"}
                            alt={"how to make a custom music player using spotify api"}
                            title={"Spotify Custom<br />Web Player"}
                            image={"/new/music-graphic-2.svg"}
                            imageWidth={256}
                            imageHeight={133}
                        />
                    </div>
                </section>

                <section className="mt-40">
                    <div className="flex justify-between items-end">
                        <div>
                            <h3 className="text-xl text-neutral-600">Professional Work</h3>
                            <h2 className="mt-4 text-5xl font-bold text-neutral-200">Websites and apps</h2>
                        </div>
                        <button className="w-fit rounded-full px-8 py-2.5 border border-neutral-400">
                            <p className="text-white text-sm">See All</p>
                        </button>
                    </div>
                    <div className="mt-16">
                        { projects.map((project) => (
                            <div key={project.id} className="py-7 border-b-2 last:border-b-0 border-neutral-800 group">
                                <Link 
                                    href={project.website}
                                    target="_blank"
                                >
                                    <h4 className="text-neutral-200 text-2xl group-hover:underline group-hover:underline-offset-4 group-hover:decoration-1">{project.title}</h4>
                                    <h5 className="mt-2 text-neutral-600 font-light">{project.type}</h5>
                                </Link>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="mt-40">
                    <div className=" rounded-2xl border border-neutral-800 relative overflow-hidden z-0 bg-template-card">
                        <span className="noise pointer-events-none absolute inset-0 opacity-[0.1]"></span>
                        <div className="w-full h-full p-16 flex justify-between items-center">
                            <div className="pl-4">
                                <h3 className="text-xl text-neutral-600">Education</h3>
                                <h2 className="mt-4 text-5xl font-bold text-neutral-200">Always.</h2>
                                <h2 className="mt-2 text-5xl font-bold text-neutral-200">Learning.</h2>
                            </div>
                            <div className="w-[400px] relative z-0">
                                { courses.map((course) => (
                                    <div 
                                        key={course.id} 
                                        className="first:mt-0 mt-4 rounded-xl border border-white/20 flex justify-start items-center gap-4 p-2"
                                    >
                                        <div className="w-10 h-10 rounded-lg bg-neutral-950/60 border border-neutral-800 p-2 flex justify-center items-center">
                                            <SiUdemy className="text-white text-lg" />
                                        </div>
                                        <p className="text-sm text-white font-extralight">{course.title}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </section>

                {/* TECH LOGOS */}
                <section className="mt-40 px-8">
                    <div className="flex flex-wrap gap-8 md:gap-2 place-items-center justify-between">
                        {SVG_LOGOS.map((logo) => (
                            <Image key={logo.id} src={logo.svg} width={logo.width/1.5} height={logo.height/1.5} alt="logo" className="opacity-80" />
                        ))}
                    </div>
                </section>

                {/* FOOTER */}
                <footer className="pt-10 flex flex-col items-center justify-center gap-4 pb-4">
                    <div className="w-12 border-b border-neutral-800"></div>
                    <p className="text-neutral-600 text-sm">&copy; 2023 Kevin Smith</p>
                </footer>

            </div>    
        </main>
    )
}
