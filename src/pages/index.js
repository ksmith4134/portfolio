import { useEffect, useState } from "react";
import { projects } from "@/data/projects";
import { COLORS, SVG_LOGOS, WEATHER_CONDITIONS } from "@/components/Theme";
import IconRender from "@/components/media/iconRender";
import Image from "next/image";
import nextIcon from '../../public/logos/nextjs-logotype-dark-background.svg'
import { FaReact } from 'react-icons/fa'
import { BiLogoTailwindCss } from 'react-icons/bi'
import { MdOutlineCurrencyBitcoin } from 'react-icons/md'
import { FaUserAstronaut, } from 'react-icons/fa'
import { IoEarth } from 'react-icons/io5'
import prism from '../../public/PrismPlayButton4.svg'

export default function Home(props) {

    const {
        bitcoin,
        weather
    } = props

    const [ toolTip, setToolTip ] = useState({label: '', id: 0})
    const [ animate, setAnimate ] = useState(false)

    const handleClick = () => {
        setAnimate(!animate)
    }

    // #region Convert Bitcoin price into USD
    let USDollar = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });

    let bitcoinPrice = bitcoin ? USDollar.format(bitcoin) : "Not Available"
    // #endregion

    // #region Weather
    const tempF = weather.tempF ? weather.tempF : '-'
    const WeatherIcon = WEATHER_CONDITIONS[weather.condition.code].icon
    // #endregion


    return (
        <main className="max-w-screen min-h-screen bg-neutral-950">
            <div className="max-w-3xl mx-auto px-8">

                {/* SECTION: About Me Text */}
                <section className="relative z-30 pt-20">

                    <h1 className="font-bold text-5xl text-neutral-300">Kevin Smith</h1>
                    <p className="mt-1 font-extralight text-lg text-neutral-400">Web Developer, UI / UX Designer</p>

                    <div className="mt-12">
                        <p className="text-neutral-400">
                            Expecting a different&nbsp;
                            <a href="https://en.wikipedia.org/wiki/Kevin_Smith" className="text-neutral-300 font-medium underline underline-offset-8 decoration-neutral-700 hover:decoration-white decoration-1">Kevin Smith</a>
                            ? Don&apos;t worry, it happens all the time...
                        </p>
                        <p className="mt-6 text-neutral-400">While I may not be the Kevin Smith of acclaimed acting, directing, and podcasting fame — I&apos;m still glad you&apos;re here!</p>
                        <p className="mt-6 text-neutral-400">I am a Software Program Manager by day, and a web developer by night (and weekends) where you&apos;ll find me most commonly using&nbsp;&nbsp;
                            <span className="inline-flex items-baeline">
                                <Image src={nextIcon} width={72} height={72} alt="logo" />
                            </span>
                            <span>&nbsp;&nbsp;</span>
                            <span className="inline-flex items-baseline">
                                <FaReact className="w-5 h-5 fill-neutral-300" />
                                <span className="text-neutral-300 font-medium">&nbsp;React&nbsp;&nbsp;</span>
                            </span>
                            <span className="inline-flex">
                                and&nbsp;&nbsp;
                                <BiLogoTailwindCss className="w-5 h-5 fill-neutral-300" />
                                <span className="text-neutral-300 font-medium">&nbsp;Tailwind</span>.
                            </span>
                        </p>
                        <p className="mt-6 text-neutral-400">Most of all I love taking projects from the initial, conceptual stage all the way to deployment. That means thinking through architectural puzzles, modeling content, creating UI designs, and writing solid code.</p>
                    </div>
                    
                </section>

                {/* SECTION: Music */}
                <div className="relative mt-10 border border-neutral-800 bg-neutral-950 p-6 rounded-md flex justify-between hover:cursor-pointer group" onClick={handleClick}>
                    <button type="button" className="flex gap-6 items-center bg-neutral-950">
                        <Image 
                            src={prism}
                            alt="prism play button"
                            className="w-16 h-16 opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300 ease-in-out hover:cursor-pointer"
                        />
                        <div className="flex flex-col gap-1 items-start">
                            <p className="text-neutral-600 text-xs">Pink Floyd</p>
                            <p className="text-neutral-600 font-semibold">Dark Side of the Moon</p>
                        </div>
                    </button>
                    <div className="relative w-36">
                        <div className="absolute left-[25%] top-[75%]">
                            <div className={`bar ${animate && 'bar-animation'}`}></div>
                            <div className={`bar ${animate && 'bar-animation'}`}></div>
                            <div className={`bar ${animate && 'bar-animation'}`}></div>
                            <div className={`bar ${animate && 'bar-animation'}`}></div>
                            <div className={`bar ${animate && 'bar-animation'}`}></div>
                            <div className={`bar ${animate && 'bar-animation'}`}></div>
                            <div className={`bar ${animate && 'bar-animation'}`}></div>
                            <div className={`bar ${animate && 'bar-animation'}`}></div>
                            <div className={`bar ${animate && 'bar-animation'}`}></div>
                            <div className={`bar ${animate && 'bar-animation'}`}></div>
                            <div className={`bar ${animate && 'bar-animation'}`}></div>
                            <div className={`bar ${animate && 'bar-animation'}`}></div>
                        </div>
                    </div>
                </div>

                {/* SECTION: About Me Interest Cards */}
                <section className="mt-4 grid grid-cols-4 gap-4">
                    <div className="border border-neutral-800 p-4 rounded-md hover:bg-neutral-800/30">
                        <div className="w-16 h-16 flex place-items-start">
                            <MdOutlineCurrencyBitcoin className="w-10 h-10 text-neutral-600" />
                        </div>
                        <p className="ml-2 mt-4 text-neutral-500 text-xs">Recent interest</p>
                        <p className="ml-2 mt-2 text-neutral-500 font-semibold">{bitcoinPrice}</p>
                    </div>
                    <div className="border border-neutral-800 p-4 rounded-md hover:bg-neutral-800/30">
                        <div className="w-16 h-16 flex place-items-start">
                            <WeatherIcon className="w-14 h-14 text-neutral-600 -mt-1" />
                        </div>
                        <p className="ml-2 mt-4 text-neutral-500 text-xs">Local weather</p>
                        <p className="ml-2 mt-2 text-neutral-500 font-semibold">{tempF}&deg; F</p>
                    </div>
                    <div className="border border-neutral-800 p-4 rounded-md hover:bg-neutral-800/30">
                        <div className="w-16 h-16 flex place-items-start">
                            <FaUserAstronaut className="w-10 h-10 text-neutral-600" />
                        </div>
                        <p className="ml-2 mt-4 text-neutral-500 text-xs">Favorite movie</p>
                        <p className="ml-2 mt-2 text-neutral-500 font-semibold">Interstellar</p>
                    </div>
                    <div className="border border-neutral-800 p-4 rounded-md hover:bg-neutral-800/30">
                        <div className="w-16 h-16 flex place-items-start">
                            <IoEarth className="w-10 h-10 text-neutral-600" />
                        </div>
                        <p className="ml-2 mt-4 text-neutral-500 text-xs">Favorite author</p>
                        <p className="ml-2 mt-2 text-neutral-500 font-semibold">Bill Bryson</p>
                    </div>
                </section>

                {/* SECTION: Tech Logos */}
                {/* <section className="mt-20">
                    <div className="flex place-items-center justify-between">
                        {SVG_LOGOS.map((logo) => (
                            <Image key={logo.id} src={logo.svg} width={logo.width/1.5} height={logo.height/1.5} alt="logo" className="opacity-80" />
                        ))}
                    </div>
                </section> */}

                <div className="mt-20 flex flex-col items-center justify-center gap-4 pb-12">
                    <div className="w-12 border-b border-neutral-800"></div>
                    <p className="text-neutral-600 text-sm">&copy; 2023 Kevin Smith</p>
                </div>

            </div>    
        </main>
    )
}

export async function getStaticProps(){

    // Bitcoin API
    const bitcoinResponse = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin')
    const bitcoinData = await bitcoinResponse.json()
    const bitcoin = bitcoinData[0].current_price

    // Weather API
    const weatherResponse = await fetch(`http://api.weatherapi.com/v1/current.json?key=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}&q=14607&aqi=no`)
    const weatherData = await weatherResponse.json()
    const weather = {
        tempF: weatherData.current.temp_f,
        tempC: weatherData.current.temp_c,
        condition: {
            description: weatherData.current.condition.text,
            code: weatherData.current.condition.code,
        }
    }

    return {
        props: {
            bitcoin,
            weather
        }
    }
}
