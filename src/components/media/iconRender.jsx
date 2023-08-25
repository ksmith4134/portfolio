import React from 'react'
import { ICONS } from '../Theme'

export default function IconRender(props) {
    const {
        icon,
    } = props

    const Icon = ICONS[icon]

    return (
        <Icon className="text-neutral-700 text-2xl" />
    )
}
