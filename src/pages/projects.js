import { useState } from "react";
import { projects } from "@/data/projects";
import { COLORS } from "@/components/Theme";
import IconRender from "@/components/media/iconRender";

export default function Projects() {

    const [ toolTip, setToolTip ] = useState({label: '', id: 0})

    return (
        <main className="max-w-screen min-h-screen bg-neutral-950">
            <div className="max-w-3xl mx-auto px-8 relative z-40 pt-12 pb-20">
                {/* <h2 className="text-neutral-200 font-semibold text-xl">Projects</h2> */}
                <div className="mt-8 grid grid-cols-1 gap-8">
                    { projects.map((project) => (
                        <div key={project.id} className="border border-neutral-800 p-8 rounded-md bg-transparent hover:bg-neutral-800/30">
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
            </div>
        </main>
    )
}
