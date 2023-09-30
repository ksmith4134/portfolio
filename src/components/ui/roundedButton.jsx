import React from 'react'

export default function RoundedButton(props) {

    const {
        label,
        url,
    } = props

    return (
        <div className="relative z-20 overflow-hidden w-fit rounded-full px-4 py-2 border border-neutral-600">
            <p className="relative z-20 text-neutral-300 text-xs">{label}</p>
            <span className="absolute z-10 w-full h-full bg-gradient-button-text top-0 left-0"></span>
            <span className="absolute z-0 w-full h-full bg-gradient-button top-0 left-0"></span>
            <span className="noise absolute z-0 pointer-events-none inset-0 opacity-[0.08]"></span>
        </div>
    )
}
