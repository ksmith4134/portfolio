import CSS3 from '../../public/logos/CSS3.svg'
import HTML5 from '../../public/logos/HTML5.svg'
import javascript from '../../public/logos/javascript.svg'
import NEXT from '../../public/logos/NEXT.svg'
import nodejs from '../../public/logos/nodejs.svg'
import react from '../../public/logos/react.svg'
import redux from '../../public/logos/redux.svg'
import tailwind from '../../public/logos/tailwind.svg'

import { MdWeb, MdDraw, MdCode } from 'react-icons/md'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

import { 
    WiSolarEclipse, WiCloudy, WiCloud, WiRainMix, WiSprinkle, WiSleet, WiSnow, WiSnowWind, WiFog, WiStormShowers, WiThunderstorm
} from 'react-icons/wi'


export const WEATHER_CONDITIONS = {
    1000: { description: 'Sunny', icon: WiSolarEclipse, },
    1003: { description: 'Partly cloudy', icon: WiCloud },
    1006: { description: 'Cloudy', icon: WiCloudy },
    1009: { description: 'Overcast', icon: WiCloudy },
    1030: { description: 'Mist', icon: WiRainMix },
    1063: { description: 'Patchy rain possible', icon: WiSprinkle },
    1066: { description: 'Patchy snow possible', icon: WiSnow },
    1069: { description: 'Patchy sleet possible', icon: WiSleet },
    1072: { description: 'Patchy freezing drizzle possible', icon: WiSleet },
    1087: { description: 'Thundery outbreaks possible', icon: WiThunderstorm },
    1114: { description: 'Blowing snow', icon: WiSnowWind },
    1117: { description: 'Blizzard', icon: WiSnow },
    1135: { description: 'Fog', icon: WiFog },
    1147: { description: 'Freezing fog', icon: WiFog },
    1150: { description: 'Patchy light drizzle', icon: WiSprinkle },
    1153: { description: 'Light drizzle', icon: WiSprinkle },
    1168: { description: 'Freezing drizzle', icon: WiSleet },
    1171: { description: 'Heavy freezing drizzle', icon: WiSleet },
    1180: { description: 'Patchy light rain', icon: WiSprinkle },
    1183: { description: 'Light rain', icon: WiSprinkle },
    1186: { description: 'Moderate rain at times', icon: WiSprinkle },
    1189: { description: 'Moderate rain', icon: WiSprinkle },
    1192: { description: 'Heavy rain at times', icon: WiSprinkle },
    1195: { description: 'Heavy rain', icon: WiSprinkle },
    1198: { description: 'Light freezing rain', icon: WiSleet },
    1201: { description: 'Moderate or heavy freezing rain', icon: WiSleet },
    1204: { description: 'Light sleet', icon: WiSleet },
    1207: { description: 'Moderate or heavy sleet', icon: WiSleet },
    1210: { description: 'Patchy light snow', icon: WiSnow },
    1213: { description: 'Light snow', icon: WiSnow },
    1216: { description: 'Patchy moderate snow', icon: WiSnow },
    1219: { description: 'Moderate snow', icon: WiSnow },
    1222: { description: 'Patchy heavy snow', icon: WiSnow },
    1225: { description: 'Heavy snow', icon: WiSnow },
    1237: { description: 'Ice pellets', icon: WiSleet },
    1240: { description: 'Light rain shower', icon: WiSprinkle },
    1243: { description: 'Moderate or heavy rain shower', icon: WiSprinkle },
    1246: { description: 'Torrential rain shower', icon: WiSprinkle },
    1249: { description: 'Light sleet showers', icon: WiSleet },
    1252: { description: 'Moderate or heavy sleet showers', icon: WiSleet },
    1255: { description: 'Light snow showers', icon: WiSnow },
    1258: { description: 'Moderate or heavy snow showers', icon: WiSnow },
    1261: { description: 'Light showers of ice pellets', icon: WiSleet },
    1264: { description: 'Moderate or heavy showers of ice pellets', icon: WiSleet },
    1273: { description: 'Patchy light rain with thunder', icon: WiStormShowers },
    1276: { description: 'Moderate or heavy rain with thunder', icon: WiStormShowers },
    1279: { description: 'Patchy light snow with thunder', icon: WiThunderstorm },
    1282: { description: 'Moderate or heavy snow with thunder', icon: WiThunderstorm },
}

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
    github: FaGithub,
    linkedin: FaLinkedin,

}

export const COLORS = {
    CARDS: {
        blue: '',
        red: '',
    },
    STATUS: {
        'Live': 'bg-green-500 animate-pulse', 
        'In Development': 'bg-blue-500', 
        'Discontinued': 'bg-red-500'
    }
}