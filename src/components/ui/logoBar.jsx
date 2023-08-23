import React from 'react'
import { SVG_LOGOS } from '../Theme'
import Image from 'next/image'

export default function LogoBar() {
    return (
        <div className="mt-16 w-full flex items-center justify-between">
            {SVG_LOGOS.map((logo) => (
                <Image 
                    key={logo.id}  
                    src={logo.logo}
                    alt="technology logos"
                />
            ))}
        </div>
    )
}
