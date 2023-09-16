import React from 'react'
import {CARDS} from '../Theme'

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
    } = props;

    const styleWidth = CARDS.WIDTH[width];
    const styleHeight = CARDS.HEIGHT[height];
    const stylePadding = CARDS.PADDING[padding];
    const styleFlex = CARDS.FLEX[shrink];
    const styleBackground = CARDS.BACKGROUND[background];

    return (
        <div className={`relative overflow-hidden rounded-2xl group border border-white/5 hover:border-white/20 hover:cursor-pointer ${styleWidth} ${styleHeight} ${stylePadding} ${styleFlex}`}>
            <div className={`bg-neutral-900/40 w-full h-full flex flex-col ${title ? 'justify-between' : 'justify-center'} p-8`}>
                { title && 
                    <div>
                        <h2 className="text-left text-2xl font-semibold text-neutral-400">{title}</h2>
                        <div className="inline-flex items-center gap-2">
                            <p className="mt-1 text-left text-sm font-extralight text-neutral-400">{subtitle}</p>
                            <div className="text-neutral-200 translate-x-0 group-hover:translate-x-1 transition duration-300 ease-in-out">&rarr;</div>
                        </div>
                    </div>
                }

                { children }
            </div>

            <div className={`${styleBackground}`}></div>

        </div>
    )
}
