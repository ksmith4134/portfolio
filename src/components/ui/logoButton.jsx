import React from 'react'
import { SVG_LOGOS } from '../Theme'
import Image from 'next/image'

export default function LogoButton() {
    const logo = SVG_LOGOS[1].svg
    return (
        <button className='w-full flex gap-4 items-center'>
            <Image src={logo} width={36} height={36} alt="logo" />
            <p className="text-neutral-500">React</p>
        </button>
    )
}
