import Link from "next/link";
import { nav } from "@/data/nav";

export default function Header() {
    return (
        <div className="max-w-4xl mx-auto px-8">
            <nav className="py-10 bg-neutral-950">
                <div className="flex items-end justify-between">
                    <Link href={'/'} className="text-2xl font-semibold text-neutral-200 tracking-wider">Kevin Smith</Link>
                    <div className="flex gap-12">
                        { nav.map((link) => (
                            <Link 
                                key={link.id}
                                href={link.path}
                                className="text-neutral-200 font-extralight hover:underline hover:underline-offset-8 hover:decoration-1 hover:decoration-neutral-400"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>
                </div>
            </nav>
            <div 
                className="
                    w-full h-px bg-gradient-to-tr 
                    from-neutral-950 from-25%
                    via-neutral-600 via-50%
                    to-neutral-950 to-75%
                "
            >
            </div>
        </div>
    )
}

