import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function CardGradient(props) {

    const {
        url,
        alt,
        title,
        image,
        imageWidth,
        imageHeight,
        holofoil = false,
    } = props

    return (
        
        <div className={`h-72 md:h-80 relative z-0 overflow-hidden flex flex-col items-center md:items-start justify-between border-glow bg-neutral-950 bg-template-card px-6 pt-8 pb-6 ${!holofoil && 'border border-neutral-800/50 hover:bg-neutral-900/50'} rounded-2xl`}>
            <span className="noise absolute pointer-events-none inset-0 opacity-[0.08]"></span>
            { image && imageWidth && imageHeight && 
                <Image
                    alt={alt ? alt : 'card image'}
                    src={image}
                    quality={100}
                    width={imageWidth}
                    height={imageHeight}
                    className="mt-2"
                />
            }
            <h3 className="font-medium text-center md:text-left text-neutral-200 text-2xl mb-2" dangerouslySetInnerHTML={{__html: title}}></h3>
        </div>
    )
}
