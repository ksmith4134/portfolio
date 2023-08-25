import CSS3 from '../../public/logos/CSS3.svg'
import HTML5 from '../../public/logos/HTML5.svg'
import javascript from '../../public/logos/javascript.svg'
import NEXT from '../../public/logos/nextjs-logotype-dark-background.svg'
import nodejs from '../../public/logos/nodejs.svg'
import react from '../../public/logos/react.svg'
import redux from '../../public/logos/redux.svg'
import tailwind from '../../public/logos/tailwind.svg'

import { MdWeb, MdDraw, MdCode } from 'react-icons/md'

export const SVG_LOGOS = [
    { id: 0, svg: NEXT, width: 0, height: 0, label: '' }, 
    { id: 1, svg: react, width: 0, height: 0, label: '' }, 
    { id: 2, svg: redux, width: 0, height: 0, label: '' }, 
    { id: 3, svg: nodejs, width: 0, height: 0, label: '' }, 
    { id: 7, svg: javascript, width: 0, height: 0, label: '' }, 
    { id: 6, svg: HTML5, width: 0, height: 0, label: '' },
    { id: 5, svg: CSS3, width: 0, height: 0, label: '' },    
    { id: 4, svg: tailwind, width: 0, height: 0, label: '' },
]

export const ICONS = {
    code: MdCode,
    design: MdWeb,
    copy: MdDraw,
}

export const COLORS = {
    CARDS: {
        blue: '',
        red: '',
    },
    STATUS: {
        'Done': 'bg-green-500', 
        'In Development': 'bg-blue-500', 
        'Discontinued': 'bg-red-500'
    }
}