import Link from "next/link";
import { nav } from "@/data/nav";
import Initials from '../../../public/Initials.svg'
import Image from "next/image";
import IconRender from "../media/iconRender";

export default function Header() {
    return (
        <div className="relative max-w-screen bg-neutral-950">
            <nav className="w-full mx-auto px-8 py-6">
                <div className="w-full mx-auto md:px-8 flex items-center justify-center">
                    <div className="flex gap-4">
                        { nav.map((link) => (
                            <Link 
                                key={link.id}
                                href={link.path}
                                className="text-neutral-400 font-medium hover:text-white hover:underline hover:underline-offset-8 hover:decoration-1"
                            >
                                {link.label ? link.label : <IconRender icon={link.icon} /> }
                            </Link>
                        ))}
                    </div>
                </div>
            </nav>
            <div 
                className="
                    max-w-6xl mx-auto w-full h-px bg-gradient-to-tr 
                    from-neutral-950 from-25%
                    via-neutral-700 via-50%
                    to-neutral-950 to-75%
                "
            >
            </div>
        </div>
    )
}

