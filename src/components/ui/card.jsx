import React from 'react'
import {CARDS, ICONS} from '../Theme'
import { FiArrowRight } from 'react-icons/fi'
import Link from 'next/link';

export default function Card(props) {

    const {
        width = 'full',
        height,
        padding = 'none',
        shrink = 'none',
        title,
        subtitle,
        children,
        background,
        link = '',
        linkTarget = '',
        icon,
    } = props;

    const styleWidth = CARDS.WIDTH[width];
    const styleHeight = CARDS.HEIGHT[height];
    const stylePadding = CARDS.PADDING[padding];
    const styleFlex = CARDS.FLEX[shrink];
    const styleBackground = CARDS.BACKGROUND[background];
    const Icon = ICONS[icon]

    return (
        <Link href={link} target={linkTarget} className={`relative overflow-hidden rounded-2xl group border border-white/5 hover:border-white/20 hover:cursor-pointer ${styleWidth} ${styleHeight} ${stylePadding} ${styleFlex}`}>

            <div className={`bg-neutral-800/20 w-full h-full flex flex-col ${title ? 'justify-between' : 'justify-center'} p-8`}>
                   
                { icon && <Icon className="mt-2 text-white w-16 h-16" /> }
                { title && 
                    <div className={`z-50 ${icon && 'mt-6'}`}>
                        <h2 className="text-left text-2xl font-semibold text-white">{title}</h2>
                        <div className="mt-1 inline-flex items-center gap-2">
                            <p className="text-left text-sm font-extralight text-neutral-400">{subtitle}</p>
                            {link && <FiArrowRight className="mt-px text-neutral-400 translate-x-0 group-hover:translate-x-1 transition duration-300 ease-in-out" />}
                        </div>
                    </div>
                }
                
                { children }

            </div>

            <div className={`${styleBackground}`}></div>

        </Link>
    )
}
