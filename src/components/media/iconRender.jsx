import React from 'react'
import { ICONS } from '../Theme'

export default function IconRender(props) {
    const {
        icon,
        size="normal",
        color="gray"
    } = props

    const Icon = ICONS[icon]

    return (
        <Icon className={`
            ${size === "normal" ? "text-2xl": "text-md"}
            ${color === "gray" ? "text-neutral-700" : "text-neutral-200"}
        `} />
    )
}
