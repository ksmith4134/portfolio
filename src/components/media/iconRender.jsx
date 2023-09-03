import React from 'react'
import { ICONS, COLORS } from '../Theme'

export default function IconRender(props) {
    const {
        icon,
        size="normal",
        color="gray"
    } = props

    const Icon = ICONS[icon]
    const iconColor = COLORS.ICON_RENDER[color]

    return (
        <Icon className={`
            ${size === "normal" ? "text-2xl": "text-md"}
            ${iconColor}
        `} />
    )
}
