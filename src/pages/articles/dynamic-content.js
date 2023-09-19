import Link from "next/link"
import { FaArrowLeft } from "react-icons/fa"

export default function DynamicContent() {
    return (
        <div className='relative z-30 max-w-screen min-h-screen pt-12 pb-20 w-full'>
                <article className="max-w-2xl mx-auto">

                    <Link href={'/'}>
                        <button className="inline-flex items-center gap-2 text-neutral-300 px-3 py-2 rounded-md border border-neutral-600/20 bg-gradient-to-t from-neutral-400/10 hover:from-neutral-400/10 group">
                            <FaArrowLeft className="text-xs group-hover:-translate-x-1 transition duration-200 ease-in-out" />
                            <p className="text-sm">Back</p>
                        </button>
                    </Link>
                    <h1 className="mt-12 text-white font-bold text-4xl tracking-wide">Dynamic Content Modeling</h1>
                    <h5 className="mt-2 text-neutral-600 text-md font-normal">Web Dev Article</h5>

                </article>
            </div>
    )
}
