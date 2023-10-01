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
    } = props

    return (
        <Link href={url}>
            <div className="h-80 relative z-0 overflow-hidden flex flex-col items-center md:items-start justify-between border-glow bg-neutral-950 bg-template-card px-6 pt-8 pb-6 border border-neutral-800 rounded-2xl">
                <span className="noise absolute pointer-events-none inset-0 opacity-[0.08]"></span>
                <Image
                    alt={alt}
                    src={image}
                    quality={100}
                    width={imageWidth}
                    height={imageHeight}
                    className="mt-4"
                />
                <h3 className="font-medium text-center md:text-left text-neutral-300 text-2xl mb-2" dangerouslySetInnerHTML={{__html: title}}></h3>
            </div>
        </Link>
    )
}
