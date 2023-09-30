import React from 'react'

export default function RoundedButton(props) {

    const {
        label,
        url,
    } = props

    return (
        <div className="w-fit rounded-full px-4 py-2 border border-neutral-400">
            <p className="text-white text-xs">{label}</p>
        </div>
    )
}
