import { useState } from "react";
import { projects } from "@/data/projects";
import { COLORS, SVG_LOGOS } from "@/components/Theme";
import IconRender from "@/components/media/iconRender";
import Image from "next/image";
import nextIcon from '../../public/logos/nextjs-logotype-dark-background.svg'
import { FaReact } from 'react-icons/fa'
import { BiLogoTailwindCss } from 'react-icons/bi'

export default function Home() {

    const [ toolTip, setToolTip ] = useState({label: '', id: 0})

    const nextLogo = nextIcon

    return (
        <main className="max-w-screen min-h-screen bg-neutral-950">
            <div className="max-w-3xl mx-auto px-8">

                <section className="relative z-30 pt-20">

                    <h1 className="font-bold text-5xl text-neutral-200">Kevin Smith</h1>
                    <p className="mt-1 font-extralight text-lg text-neutral-400">Web Developer, UI / UX Designer</p>

                    <div className="mt-12">
                        <p className="text-neutral-400">
                            Expecting a different&nbsp;
                            <a href="https://en.wikipedia.org/wiki/Kevin_Smith" className="text-white font-medium underline underline-offset-8 decoration-neutral-700 hover:decoration-white decoration-1">Kevin Smith</a>
                            ? Don&apos;t worry, it happens all the time...
                        </p>
                        <p className="mt-6 text-neutral-400">While I may not be the Kevin Smith of acclaimed acting, directing, and podcasting fame — I&apos;m still glad you&apos;re here!</p>
                        <p className="mt-6 text-neutral-400">I am a Software Program Manager by day, and a web developer by night (and weekends) where you&apos;ll find me most commonly using&nbsp;&nbsp;
                            <span className="inline-flex items-baeline">
                                <Image src={nextIcon} width={72} height={72} alt="logo" />
                            </span>
                            <span>&nbsp;&nbsp;</span>
                            <span className="inline-flex items-baseline">
                                <FaReact className="w-5 h-5 fill-white" />
                                <span className="text-white font-medium">&nbsp;React&nbsp;&nbsp;</span>
                            </span>
                            <span className="inline-flex">
                                and&nbsp;&nbsp;
                                <BiLogoTailwindCss className="w-5 h-5 fill-white" />
                                <span className="text-white font-medium">&nbsp;Tailwind</span>.
                            </span>
                        </p>
                        <p className="mt-6 text-neutral-400">Most of all I love taking projects from the initial, conceptual stage all the way to deployment. That means thinking through architectural puzzles, modeling content, creating UI designs, and writing solid code.</p>
                    </div>
                    
                </section>

                <section className="mt-16">
                    <div className="flex place-items-center justify-between">
                        {SVG_LOGOS.map((logo) => (
                            <Image key={logo.id} src={logo.svg} width={logo.width/1.5} height={logo.height/1.5} alt="logo" className="opacity-60" />
                        ))}
                    </div>
                </section>
                
                <section className="pt-12 pb-20">
                    {/* <h2 className="text-neutral-200 font-semibold text-xl">Projects</h2> */}
                    <div className="mt-8 grid grid-cols-1 gap-8">
                        { projects.map((project) => (
                            <div key={project.id} className="border border-neutral-800 p-8 rounded-md bg-neutral-800/20 hover:bg-neutral-800/30">
                                <div className="flex items-center justify-between">
                                    <div className="border border-neutral-800 rounded-full px-2 py-1 w-fit text-neutral-400 text-xs flex gap-2 justify-start items-center">
                                        <div className={`w-2 h-2 rounded-full ${COLORS.STATUS[project.status]}`}></div>
                                        <p>{project.status}</p>
                                    </div>
                                    <div className="flex gap-4">
                                        {project.contributions.map((item) => (
                                            <div key={item} className="relative z-20" onMouseOver={() => setToolTip({label: item, id: project.id})} onMouseOut={() => setToolTip()}>
                                                <IconRender icon={item} />
                                                {toolTip?.label === item && toolTip?.id === project.id &&
                                                    <div className="absolute z-30 block bg-neutral-950 border border-neutral-800 rounded-md p-2 text-xs text-neutral-300">{item}</div>
                                                }
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <h2 className="mt-6 text-xl font-semibold text-neutral-300">{project.title}</h2>
                                <h3 className="mt-1 font-light text-sm text-neutral-400">{project.type}</h3>
                                <p className="mt-6 text-sm text-neutral-400 line-clamp-3">{project.description}</p>
                            </div>
                        ))}
                    </div>
                </section>

            </div>    
        </main>
    )
}
