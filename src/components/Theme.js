import CSS3 from '../../public/logos/CSS3.svg'
import HTML5 from '../../public/logos/HTML5.svg'
import javascript from '../../public/logos/javascript.svg'
import NEXT from '../../public/logos/NEXT.svg'
import nodejs from '../../public/logos/nodejs.svg'
import react from '../../public/logos/react.svg'
import redux from '../../public/logos/redux.svg'
import tailwind from '../../public/logos/tailwind.svg'

import { MdWeb, MdDraw, MdCode } from 'react-icons/md'

export const SVG_LOGOS = [
    { id: 0, svg: NEXT, width: 184.311, height: 37.158, label: '' }, 
    { id: 1, svg: react, width: 61.218, height: 65.465, label: '' }, 
    { id: 2, svg: redux, width: 49.386, height: 46.883, label: '' }, 
    { id: 3, svg: nodejs, width: 48.008, height: 54.882, label: '' }, 
    { id: 7, svg: javascript, width: 60.671, height: 43.067, label: '' }, 
    { id: 6, svg: HTML5, width: 45.035, height: 51.068, label: '' },
    { id: 5, svg: CSS3, width: 45.782, height: 51.922, label: '' },    
    { id: 4, svg: tailwind, width: 58.394, height: 35.063, label: '' },
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