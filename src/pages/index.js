import { useState, useRef, useEffect } from "react";
import { COLORS, SVG_LOGOS, WEATHER_CONDITIONS } from "@/components/Theme";
import Image from "next/image";
import nextIcon from '../../public/logos/nextjs-logotype-dark-background.svg'
import silentBob from '../../public/SilentBobWhite.svg'
import earth from '../../public/cards/earth-1.png'
import { FaReact } from 'react-icons/fa'
import { BiLogoTailwindCss, BiCameraMovie, BiBook } from 'react-icons/bi'
import { BsBook } from 'react-icons/bs'
import { MdOutlineCurrencyBitcoin } from 'react-icons/md'
import { FaUserAstronaut, } from 'react-icons/fa'
import { IoEarth } from 'react-icons/io5'
import MusicPlayer from "@/components/widgets/musicPlayer";
import WebPlayer from "@/components/widgets/webPlayer";
import { projects } from "@/data/projects";
import IconRender from "@/components/media/iconRender";

export default function Home(props) {

    const {
        bitcoin = null,
        bitcoinData,
        weather = null,
        spotify = null,
    } = props

    const [ toolTip, setToolTip ] = useState({label: '', id: 0})

    // #region Spotify
    // console.log('spotify', spotify)
    // const spotifyToken = spotify.access_token
    // #endregion

    // #region Convert Bitcoin price into USD
    console.log('bitcoin', bitcoinData)
    let USDollar = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });

    let bitcoinPrice = bitcoin ? USDollar.format(bitcoin) : "Not Available"
    // #endregion

    // #region Weather
    // console.log('weather', weather)
    const tempF = weather.tempF ? weather.tempF : '-'
    const WeatherIcon = WEATHER_CONDITIONS[weather.condition.code].icon
    // #endregion


    return (
        <main className="relative z-30 max-w-screen min-h-screen">
            <div className="max-w-3xl mx-auto px-8">

                {/* SECTION: About Me Text */}
                <section className="pt-20">

                    <h1 className="font-semibold text-5xl text-neutral-200">Kevin Smith</h1>
                    <p className="mt-1 font-extralight text-lg text-neutral-400">Web Developer, UI / UX Designer</p>

                    <div className="mt-12">
                        <p className="text-neutral-400 inline-flex items-center">
                            Expecting a different&nbsp;
                            <span className="inline-flex items-center">
                                <a href="https://en.wikipedia.org/wiki/Kevin_Smith" className="text-neutral-300 font-medium underline underline-offset-8 decoration-neutral-700 hover:decoration-white decoration-1">Kevin Smith</a>
                            </span>
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

                {/* { spotify?.access_token && 
                    <WebPlayer token={spotifyToken} />
                } */}

                <MusicPlayer />

                {/* SECTION: About Me Interest Cards */}
                <section className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="border border-neutral-800/60 p-4 bg-gradient-radial from-amber-600/5 rounded-xl hover:bg-neutral-800/10 transition-all duration-100 ease-in-out flex flex-col justify-between">
                        <div className="p-2 w-fit flex place-items-start rounded-lg bg-gradient-to-b from-amber-400/80 to-amber-600/60">
                            <MdOutlineCurrencyBitcoin className="text-2xl text-white" />
                        </div>
                        <div className="mt-6">
                            <p className="mt-4 text-neutral-600 text-xs">Recent interest</p>
                            <p className="mt-1 text-neutral-300 font-semibold">{bitcoinPrice}</p>
                        </div>
                    </div>
                    <div className="border border-neutral-800/60 p-4 bg-gradient-radial from-emerald-600/5 rounded-xl hover:bg-neutral-800/10 transition-all duration-100 ease-in-out flex flex-col justify-between">
                        <div className="p-2 w-fit flex place-items-start rounded-lg bg-gradient-to-b from-emerald-400/80 to-emerald-600/60">
                            <WeatherIcon className="text-2xl text-white" />
                        </div>
                        <div className="mt-6">
                            <p className="mt-4 text-neutral-600 text-xs">Local weather</p>
                            <p className="mt-1 text-neutral-300 font-semibold">{tempF}&deg; F</p>
                        </div>
                    </div>
                    <div className="border border-neutral-800/60 p-4 bg-gradient-radial from-sky-600/5 rounded-xl hover:bg-neutral-800/10 transition-all duration-100 ease-in-out flex flex-col justify-between">
                        <div className="p-2 w-fit flex place-items-start rounded-lg bg-gradient-to-b from-sky-400/80 to-sky-600/60">
                            <BiCameraMovie className="text-2xl text-white" />
                        </div>
                        <div className="mt-6">
                            <p className="mt-4 text-neutral-600 text-xs">Favorite movie</p>
                            <p className="mt-1 text-neutral-300 font-semibold">Interstellar</p>
                        </div>
                    </div>
                    <div className="border border-neutral-800/60 p-4 bg-gradient-radial from-purple-600/5 rounded-xl relative overflow-hidden group hover:bg-neutral-800/10 md:hover:bg-gradient-to-bl md:hover:from-neutral-900/30 md:hover:to-black md:hover:border-neutral-900 transition-colors duration-100 md:duration-1000 ease-in-out">
                        <div className="opacity-1 md:group-hover:opacity-0 transition-opacity duration-1000 ease-in-out w-full h-full flex flex-col justify-between">
                            <div className="p-2 w-fit flex place-items-start rounded-lg bg-gradient-to-b from-purple-400/80 to-purple-600/60">
                                <BiBook className="text-2xl text-white" />
                            </div>
                            <div className="mt-6">
                                <p className="mt-4 text-neutral-600 text-xs">Favorite author</p>
                                <p className="mt-1 text-neutral-300 font-semibold">Bill Bryson</p>
                            </div>
                        </div>
                        <div className="hidden md:group-hover:flex md:group-hover:justify-end md:group-hover:items-end">
                            <Image src={earth} alt="earth" className="absolute earth-animation object-contain transform-gpu brightness-200" />
                            <p className={`font-mono text-neutral-300 text-[14px] leading-[18px] text-right absolute word-animation opacity-0`}>A<br></br>Short<br></br>History<br></br>Of Nearly<br></br>Everything</p>
                        </div>
                    </div>
                </section>
                
                {/* SECTION: Projects */}
                <section className="pt-16">
                    <h2 id="projects" className="pt-8 font-semibold text-5xl text-neutral-200 text-center">Projects</h2>
                    <p className="mt-4 font-light text-neutral-400 text-center max-w-lg mx-auto">Click on a project below to learn about individual contributions, coding challenges, and important design considerations.</p>
                    <div className="mt-12 grid grid-cols-1 gap-8">
                        { projects.map((project) => (
                            <div key={project.id} className="border border-neutral-800/60 p-8 rounded-xl bg-neutral-600/5 hover:bg-neutral-600/10">
                                <div className="border border-neutral-800 rounded-full px-2 py-1 w-fit text-neutral-400 text-xs flex gap-2 justify-start items-center">
                                    <div className={`w-2 h-2 rounded-full ${COLORS.STATUS[project.status]}`}></div>
                                    <p>{project.status}</p>
                                </div>
                                <h2 className="mt-6 text-2xl font-semibold text-neutral-300">{project.title}</h2>
                                <h3 className="mt-1 font-light text-sm text-neutral-400">{project.type}</h3>
                                <p className="mt-6 text-sm text-neutral-400 line-clamp-3">{project.description}</p>
                                <div className="mt-8 flex gap-2">
                                    { project.contributions.map((item) => (
                                        <div key={item} className="rounded-md flex place-items-center gap-2 px-3 py-2 bg-gradient-to-t from-neutral-400/5 border border-neutral-600/10 text-white text-xs">
                                            <IconRender icon={item} size={'small'} color={'white'} />
                                            <p>{item}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* SECTION: Tech Logos */}
                <section className="pt-20">
                    <div className="flex place-items-center justify-between">
                        {SVG_LOGOS.map((logo) => (
                            <Image key={logo.id} src={logo.svg} width={logo.width/1.5} height={logo.height/1.5} alt="logo" className="opacity-80" />
                        ))}
                    </div>
                </section>

                {/* FOOTER */}
                <footer className="pt-10 flex flex-col items-center justify-center gap-4 pb-4">
                    <div className="w-12 border-b border-neutral-800"></div>
                    <p className="text-neutral-600 text-sm">&copy; 2023 Kevin Smith</p>
                </footer>

            </div>    
        </main>
    )
}

export async function getStaticProps(){

    // #region Bitcoin API
    const bitcoinResponse = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin')
    const bitcoinData = await bitcoinResponse.json()
    const bitcoin = bitcoinData[0].current_price
    // #endregion

    // #region Weather API
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
    // #endregion

    // #region Spotify
    // const client_id = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID;
    // const client_secret = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET;
    // const refresh_token = process.env.NEXT_PUBLIC_SPOTIFY_REFRESH_TOKEN;

    // const basic = Buffer.from(`${client_id}:${client_secret}`).toString('base64');
    // const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;

    // const getAccessToken = async () => {
    //     const response = await fetch(TOKEN_ENDPOINT, {
    //       method: 'POST',
    //       headers: {
    //         Authorization: `Basic ${basic}`,
    //         'Content-Type': 'application/x-www-form-urlencoded',
    //       },
    //       body: new URLSearchParams({
    //         grant_type: 'refresh_token',
    //         refresh_token
    //       })
    //     });
       
    //     return response.json();
    // };

    // const spotify = await getAccessToken();
    // #endregion



    return {
        props: {
            bitcoin,
            bitcoinData, // temp, for testing
            weather,
            spotify: null
        }
    }
}
