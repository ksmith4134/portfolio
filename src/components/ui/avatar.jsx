import Image from 'next/image'
import React from 'react'

export default function Avatar() {
    return (
        <div className='relative overflow-hidden w-40 h-40'>
            <Image
                src="/profile.png"
                alt="profile picture of the developer"
                fill={true}
                className="object-cover"
            />
        </div>
    )
}
