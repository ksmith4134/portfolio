import Image from "next/image";
import Link from "next/link";

import { SVG_LOGOS, COLORS } from "@/components/Theme";
import { FiArrowRight } from 'react-icons/fi'

import { projects } from "@/data/projects";

import IconRender from "@/components/media/iconRender";
import Card from "@/components/ui/card";
import HolofoilBento from "@/components/widgets/hologram/BentoCard/HolofoilBento";


export default function Old(props) {

    const { } = props

    return (
        <main className="relative max-w-screen min-h-screen">
            <div className="max-w-5xl mx-auto px-8">
                
                {/* HEADER */}
                <div className="mt-28 flex flex-col w-full">
                    <h1 className="text-center font-extrabold text-5xl bg-clip-text text-transparent bg-gradient-to-r from-white to-neutral-400">Kevin Smith</h1>
                    <p className="text-center mt-4 text-xl font-extralight text-neutral-400">Web Developer, UI / UX Designer</p>
                </div>
                
                {/* BENTO BOX GRID */}
                <div className="mt-16 flex flex-col gap-8 slide-enter-content">

                    <section className="flex justify-center items-stretch gap-8 h-80">
                        <Card width={"half"} padding={'none'} background={'radial-btm'}>
                            <div className="z-50">
                                <h2 className="text-white text-xl">Tech Stack</h2>
                                {/* <Image src={'/tech-1.png'} width={400} height={400} alt="image" /> */}
                            </div>
                            <span className="noise absolute z-0 left-0 top-0 h-full w-full opacity-[0.25]"></span>
                        </Card>
                        <Card width={"half"}>
                            <h2 className="text-white text-xl">Always Learning</h2>
                            
                        </Card>
                    </section>
                    
                    <section className="flex justify-center items-stretch gap-8 h-80">
                        <Link href={'/articles/holofoils'} className="basis-1/3">
                            <HolofoilBento foregroundImage={'/animations/holofoils/dark-neutral-background.jpg'} opacity={0}>
                                <div className="absolute bottom-0 left-0 z-50 p-8">
                                    {/* <Image src={'/holofoil-card-3e.png'} width={100} height={120} alt="image" /> */}
                                    <h2 className="mt-16 text-left text-2xl font-semibold text-white">Holofoil Cards</h2>
                                    <div className="mt-4 inline-flex items-center gap-2">
                                        <p className="text-left text-sm font-extralight text-neutral-400">Make your own</p>
                                        <FiArrowRight className="mt-px text-neutral-400 translate-x-0 group-hover:translate-x-1 transition duration-300 ease-in-out" />
                                    </div>
                                </div>
                            </HolofoilBento>
                        </Link>
                        <Card width={"twothird"} shrink={"none"} title={"Arnot Health Orthopedics"} subtitle={"Medical Resources Web App"} link={projects[0].website} linkTarget={"_blank"}>
                            <p className="mt-8 text-md text-neutral-400 line-clamp-4">{projects[0].description}</p>
                            <div className="mt-8 flex gap-2">
                                <div className="rounded-md px-2 py-1 w-fit bg-gradient-to-t from-neutral-400/5 border border-neutral-600/20 text-neutral-300 text-xs flex gap-2 justify-start items-center">
                                    <div className={`w-2 h-2 rounded-full ${COLORS.STATUS[projects[0].status]}`}></div>
                                    <p>{projects[0].status}</p>
                                </div>
                                { projects[0].contributions.map((item) => (
                                    <div key={item} className="rounded-md flex justify-start hover:justify-center items-center gap-2 px-2 py-2 bg-gradient-to-t from-neutral-400/5 border border-neutral-600/20 text-neutral-300 group/item w-8 hover:w-16 transition-all duration-500 ease-in-out overflow-hidden">
                                        <div className="scale-100 group-hover/item:scale-0 text-sm transition-all duration-700">
                                            <IconRender icon={item} size={'small'} color={'white'} />
                                        </div>
                                        <p className="opacity-0 group-hover/item:-ml-[22px] group-hover/item:opacity-100 transition-all duration-500 ease-in-out text-xs leading-3">{item}</p>
                                    </div>
                                ))}
                            </div>
                        </Card>
                    </section>

                    <section className="flex justify-center items-stretch gap-8 h-80">
                        <Card width={"twothird"} shrink={"none"} title={"NYS Education Department"} subtitle={"Teacher Training Web App"} link={projects[3].website} linkTarget={"_blank"}>
                            <p className="mt-8 text-md text-neutral-400 line-clamp-4">{projects[3].description}</p>
                            <div className="mt-8 flex gap-2">
                                <div className="rounded-md px-2 py-1 w-fit bg-gradient-to-t from-neutral-400/5 border border-neutral-600/20 text-neutral-300 text-xs flex gap-2 justify-start items-center">
                                    <div className={`w-2 h-2 rounded-full ${COLORS.STATUS[projects[3].status]}`}></div>
                                    <p>{projects[3].status}</p>
                                </div>
                                { projects[3].contributions.map((item) => (
                                    <div key={item} className="rounded-md flex justify-start hover:justify-center items-center gap-2 px-2 py-2 bg-gradient-to-t from-neutral-400/5 border border-neutral-600/20 text-neutral-300 group/item w-8 hover:w-16 transition-all duration-500 ease-in-out overflow-hidden">
                                        <div className="scale-100 group-hover/item:scale-0 text-sm transition-all duration-700">
                                            <IconRender icon={item} size={'small'} color={'white'} />
                                        </div>
                                        <p className="opacity-0 group-hover/item:-ml-[22px] group-hover/item:opacity-100 transition-all duration-500 ease-in-out text-xs leading-3">{item}</p>
                                    </div>
                                ))}
                            </div>
                        </Card>
                        <Card width={"third"} link={"/articles/spotify"} icon={'spotify'}>
                            <div className="absolute bottom-0 left-0 p-8 z-50 mt-2">
                                <h2 className="text-left text-2xl font-semibold text-white">Spotify Custom<br />Web Player</h2>
                                <div className="mt-4 inline-flex items-center gap-2">
                                    <p className="text-left text-sm font-extralight text-neutral-400">NEXT.js Component</p>
                                    <FiArrowRight className="mt-px text-neutral-400 translate-x-0 group-hover:translate-x-1 transition duration-300 ease-in-out" />
                                </div>
                            </div>
                        </Card>
                    </section>

                    <section className="flex justify-center items-stretch gap-8 h-80">
                        <Card width={"third"} link={'/articles/dynamic-content'}>
                            <div className="relative overflow-hidden w-full h-full rounded-lg">
                                <Image alt="dynamic content models" src={"/dynamic-content-3.png"} fill className="object-contain" />
                            </div>
                            <div className="z-50 mt-2">
                                <h2 className="text-left text-2xl font-semibold text-white">Dynamic Content Modeling</h2>
                                <div className="mt-4 inline-flex items-center gap-2">
                                    <p className="text-left text-sm font-extralight text-neutral-400">Learn More</p>
                                    <FiArrowRight className="mt-px text-neutral-400 translate-x-0 group-hover:translate-x-1 transition duration-300 ease-in-out" />
                                </div>
                            </div>
                        </Card>
                        <Card width={"twothird"} title={"Kodak Moments"} subtitle={"Various Full-Stack Projects"} link={projects[5].website} linkTarget={"_blank"}>
                            <p className="mt-6 text-md text-neutral-400 line-clamp-4">{projects[5].description}</p>
                            <div className="mt-8 flex gap-2">
                                <div className="rounded-md px-2 py-1 w-fit bg-gradient-to-t from-neutral-400/5 border border-neutral-600/20 text-neutral-300 text-xs flex gap-2 justify-start items-center">
                                    <div className={`w-2 h-2 rounded-full ${COLORS.STATUS[projects[5].status]}`}></div>
                                    <p>{projects[5].status}</p>
                                </div>
                                { projects[5].contributions.map((item) => (
                                    <div key={item} className="rounded-md flex justify-start hover:justify-center items-center gap-2 px-2 py-2 bg-gradient-to-t from-neutral-400/5 border border-neutral-600/20 text-neutral-300 group/item w-8 hover:w-16 transition-all duration-500 ease-in-out overflow-hidden">
                                        <div className="scale-100 group-hover/item:scale-0 text-sm transition-all duration-700">
                                            <IconRender icon={item} size={'small'} color={'white'} />
                                        </div>
                                        <p className="opacity-0 group-hover/item:-ml-[22px] group-hover/item:opacity-100 transition-all duration-500 ease-in-out text-xs leading-3">{item}</p>
                                    </div>
                                ))}
                            </div>
                        </Card>
                    </section>

                </div>

                {/* TECH LOGOS */}
                <section className="pt-24 px-8">
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
