import Image from "next/image";
import LogoBar from "@/components/ui/logoBar";
import { projects } from "@/data/projects";

export default function Home() {
    return (
        <main className="max-w-4xl min-h-screen mx-auto px-8 py-24">
            <section className="max-w-xl text-neutral-200">
                <div className="flex items-center gap-8">
                    <p className="font-bold text-xl last:border-r-0 border-r-[1px] border-neutral-700 h-8 pr-6 flex items-center">Web Developer</p>
                    <p className="font-bold text-xl last:border-r-0 border-r-[1px] border-neutral-700 h-8 pr-6 flex items-center">UI/UX Designer</p>
                    <p className="font-bold text-xl last:border-r-0 border-r-[1px] border-neutral-700 h-8 pr-6 flex items-center">Copywriter</p>
                </div>
                <p className="mt-8 font-light">My name is Kevin and I am a full-time Software Program Manager at Kodak Moments. I&apos;m also a freelance web developer on nights and weekends to help keep up to date on the latest technologies.</p>
                <p className="mt-6 font-light">Most of all I love taking projects from the initial, conceptual stage all the way to deployment. That means thinking through architectural puzzles, crafting copy, creating UI designs, and writing solid code.</p>
            </section>

            <LogoBar />

            <section className="mt-16 grid grid-cols-2 gap-16">
                { projects.map((item) => (
                    <div key={item.id} className="border border-neutral-600 shadow-inner shadow-neutral-600/80 px-5 py-6 rounded-md">
                        <p className="text-neutral-600">{item.status}</p>
                        <div className="mt-6 w-full aspect-video rounded bg-neutral-800/50"></div>
                        <h2 className={`mt-8 text-xl font-bold text-blue-800`}>{item.title}</h2>
                        <p className="mt-4 text-sm text-neutral-400">{item.description}</p>
                        <button className="mt-8 border border-blue-900 bg-blue-800/20 text-sm text-neutral-400 rounded px-6 py-3">Learn More</button>
                    </div>
                ))}

            </section>

        </main>
    )
}
