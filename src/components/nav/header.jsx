import Link from "next/link";
import { nav } from "@/data/nav";
import Initials from '../../../public/Initials.svg'
import Image from "next/image";

export default function Header() {
    return (
        <div className="relative z-20 max-w-screen bg-neutral-950">
            <nav className="max-w-4xl mx-auto px-8 py-8">
                <div className="max-w-3xl mx-auto px-8 flex items-center justify-between">
                    <Link href={'/'}>
                        <Image src={Initials} width={48} height={48} alt="initials logo" />
                    </Link>
                    <div className="flex gap-6">
                        { nav.map((link) => (
                            <Link 
                                key={link.id}
                                href={link.path}
                                className="text-neutral-400 font-medium hover:text-white hover:underline hover:underline-offset-8 hover:decoration-1"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>
                </div>
            </nav>
            <div 
                className="
                    max-w-4xl mx-auto w-full h-px bg-gradient-to-tr 
                    from-neutral-950 from-25%
                    via-neutral-700 via-50%
                    to-neutral-950 to-75%
                "
            >
            </div>
        </div>
    )
}

