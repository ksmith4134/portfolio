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
            <div className="h-full relative overflow-hidden z-0 flex flex-col items-start justify-between border-glow bg-neutral-950 bg-template-card px-6 pt-8 pb-6 border border-neutral-800 rounded-2xl">
                <span className="noise pointer-events-none absolute inset-0 opacity-[0.1]"></span>
                <Image
                    alt={alt}
                    src={image}
                    width={imageWidth}
                    height={imageHeight}
                    className="mt-4"
                />
                <h3 className="font-medium text-neutral-300 text-2xl mb-2" dangerouslySetInnerHTML={{__html: title}}></h3>
            </div>
        </Link>
    )
}
