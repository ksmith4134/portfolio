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
        weather = null,
        spotify = null,
    } = props

    const [ toolTip, setToolTip ] = useState({label: '', id: 0})
    const [ displayProject, setDisplayProject ] = useState(false)
    const [ projectID, setProjectID ] = useState(null)

    // #region Spotify
    // console.log('spotify', spotify)
    // const spotifyToken = spotify.access_token
    // #endregion

    // #region Convert Bitcoin price into USD
    // console.log('bitcoin', bitcoin)
    let USDollar = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });

    let bitcoinCurrentPrice;
    let bitcoinPriceChange;
    let bitcoinChangeSymbol;
    let bitcoinChangeColor;
    
    if(bitcoin){
        bitcoinCurrentPrice = bitcoin.current_price ? USDollar.format(bitcoin.current_price) : "Not available"
        bitcoinPriceChange = bitcoin.price_change_24h ? USDollar.format(bitcoin.price_change_24h) : 0
        if(bitcoin.price_change_24h >= 0){
            bitcoinChangeSymbol = 'up'
            bitcoinChangeColor = 'green'
        } else {
            bitcoinChangeSymbol = 'down'
            bitcoinChangeColor = 'red'
        }
    } else {
        bitcoinCurrentPrice = "Not available"
        bitcoinPriceChange = 0
        bitcoinChangeSymbol = 'up'
        bitcoinChangeColor = 'green'
    }
    // #endregion

    // #region Weather
    // console.log('weather', weather)
    const tempF = weather.tempF ? weather.tempF : '-'
    const WeatherIcon = WEATHER_CONDITIONS[weather.condition.code].icon
    // #endregion

    const handleClick = (id) => {
        setProjectID(id)
        projectID === id ? setDisplayProject(!displayProject) : setDisplayProject(true)
    }

    return (
        <main className="relative z-30 max-w-screen min-h-screen">
            <div className="max-w-3xl mx-auto px-8">

                {/* SECTION: About Me Text */}
                <section className="pt-20">

                    <h1 className="font-semibold text-5xl text-neutral-200">Kevin Smith</h1>
                    <p className="mt-1 font-extralight text-lg text-neutral-400">Web Developer, UI / UX Designer</p>

                    <div className="mt-12">
                        <p className="text-neutral-400 inline-flex items-center">
                            <span>Expecting a different&nbsp;
                            <span className="inline-flex items-center">
                                <a href="https://en.wikipedia.org/wiki/Kevin_Smith" className="text-neutral-300 font-medium underline underline-offset-4 decoration-neutral-700 hover:decoration-white decoration-1">Kevin Smith</a>
                            </span>
                            <span>? Don&apos;t worry, it happens all the time...</span></span>
                        </p>
                        <p className="mt-6 text-neutral-400">While I may not be the Kevin Smith of acclaimed acting, directing, and podcasting fame — I&apos;m still glad you&apos;re here!</p>
                        <p className="mt-6 text-neutral-400">I am a Software Program Manager by day, and a web developer by night (and weekends) where you&apos;ll find me most commonly using&nbsp;&nbsp;
                            <span className="inline-flex items-baseline">
                                <Image src={nextIcon} width={72} height={72} alt="logo" />
                            </span>
                            <span>&nbsp;&nbsp;</span>
                            <span className="inline-flex items-baseline">
                                <FaReact className="w-5 h-5 fill-[#61dbfb]" />
                                <span className="text-[#61dbfb] font-normal">&nbsp;React&nbsp;&nbsp;</span>
                            </span>
                            <span className="inline-flex">
                                and&nbsp;&nbsp;
                                <BiLogoTailwindCss className="w-5 h-5 fill-[#38BDF8]" />
                                <span className="text-[#38BDF8] font-normal">&nbsp;Tailwind</span>.
                            </span>
                        </p>
                        <p className="mt-6 text-neutral-400">Most of all I love taking projects from the initial, conceptual stage all the way to deployment. That means thinking through architectural puzzles, modeling content, creating UI designs, and writing solid code.</p>
                    </div>
                    
                </section>

                {/* SECTION: TEST SPOTIFY PLAYER */}
                { spotify?.access_token && 
                    <WebPlayer token={spotifyToken} />
                }

                {/* SECTION: Spotify Music Player */}
                <MusicPlayer />

                {/* SECTION: About Me Interest Cards */}
                <section className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="border border-neutral-800/60 p-4 bg-gradient-radial from-amber-500/5 rounded-xl bg-neutral-800/10 hover:bg-neutral-800/20 transition-all duration-100 ease-in-out flex flex-col justify-between shadow-inner shadow-neutral-400/5 group relative">
                        <div className="opacity-100 group-hover:opacity-0 transition-opacity duration-1000 ease-in-out w-full h-full flex flex-col justify-between">
                            <div className="p-2 w-fit flex place-items-start rounded-lg bg-gradient-to-b from-amber-400/80 to-amber-600/60">
                                <MdOutlineCurrencyBitcoin className="text-2xl text-white" />
                            </div>
                            <div className="mt-6">
                                <p className="mt-4 text-neutral-600 text-xs">Recent interest</p>
                                <p className="mt-1 text-neutral-300 font-semibold">{bitcoinCurrentPrice}</p>
                            </div>
                        </div>
                        <div className="opacity-0 group-hover:opacity-100 flex flex-col justify-between items-center w-full h-full absolute top-0 left-0 p-3 transition-opacity duration-1000 ease-in-out overflow-y-scroll no-scrollbar bg-gradient-radial from-amber-500/0">
                            <div className="w-full flex justify-between items-end">
                                <p className="text-white font-semibold text-sm">Bitcoin</p>
                                <div className="px-3 py-1 bg-amber-500/70 rounded-md text-white text-xs font-bold">
                                    btc
                                </div>
                            </div>
                            <div className="mt-4 w-full flex flex-row gap-2 items-center">
                                <p className="text-[10px] text font-light text-white w-16">Current</p>
                                <div className="w-full text-xs rounded border border-white/10 p-2 text-white bg-white/10">{bitcoinCurrentPrice}</div>
                            </div>
                            <div className="mt-2 w-full flex flex-row gap-2 items-center">
                                <p className="text-[10px] text font-light text-white w-16">24 hr</p>
                                <div className="w-full text-xs rounded border border-white/10 p-2 text-white bg-white/10 flex justify-between items-center">
                                    <p>{bitcoinPriceChange}</p>
                                    <IconRender icon={bitcoinChangeSymbol} color={bitcoinChangeColor} size={'small'} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="border border-neutral-800/60 p-4 bg-gradient-radial from-emerald-500/5 rounded-xl bg-neutral-800/10 hover:bg-neutral-800/20 transition-all duration-100 ease-in-out flex flex-col justify-between shadow-inner shadow-neutral-400/5">
                        <div className="p-2 w-fit flex place-items-start rounded-lg bg-gradient-to-b from-emerald-400/80 to-emerald-600/60">
                            <WeatherIcon className="text-2xl text-white" />
                        </div>
                        <div className="mt-6">
                            <p className="mt-4 text-neutral-600 text-xs">Local weather</p>
                            <p className="mt-1 text-neutral-300 font-semibold">{tempF}&deg; F</p>
                        </div>
                    </div>
                    <div className="border border-neutral-800/60 p-4 bg-gradient-radial from-sky-500/5 rounded-xl bg-neutral-800/10 hover:bg-neutral-800/20 transition-all duration-100 ease-in-out flex flex-col justify-between shadow-inner shadow-neutral-400/5">
                        <div className="p-2 w-fit flex place-items-start rounded-lg bg-gradient-to-b from-sky-400/80 to-sky-600/60">
                            <BiCameraMovie className="text-2xl text-white" />
                        </div>
                        <div className="mt-6">
                            <p className="mt-4 text-neutral-600 text-xs">Favorite movie</p>
                            <p className="mt-1 text-neutral-300 font-semibold">Interstellar</p>
                        </div>
                    </div>
                    <div className="border border-neutral-800/60 p-4 bg-gradient-radial from-purple-500/5 rounded-xl relative overflow-hidden group bg-neutral-800/10 hover:bg-gradient-to-bl hover:from-neutral-900/30 hover:to-black hover:border-neutral-900 transition-colors duration-1000 ease-in-out shadow-inner shadow-neutral-400/5">
                        <div className="opacity-100 group-hover:opacity-0 transition-opacity duration-1000 ease-in-out w-full h-full flex flex-col justify-between">
                            <div className="p-2 w-fit flex place-items-start rounded-lg bg-gradient-to-b from-purple-400/80 to-purple-600/60">
                                <BiBook className="text-2xl text-white" />
                            </div>
                            <div className="mt-6">
                                <p className="mt-4 text-neutral-600 text-xs">Favorite author</p>
                                <p className="mt-1 text-neutral-300 font-semibold">Bill Bryson</p>
                            </div>
                        </div>
                        <div className="hidden group-hover:flex group-hover:justify-end group-hover:items-end">
                            <Image src={earth} alt="earth" className="absolute earth-animation object-contain transform-gpu brightness-200" />
                            <p className={`font-mono text-neutral-300 text-[14px] leading-[18px] text-right absolute word-animation opacity-0`}>A<br></br>Short<br></br>History<br></br>Of Nearly<br></br>Everything</p>
                        </div>
                    </div>
                </section>
                
                {/* SECTION: Projects */}
                <section className="pt-16">
                    <h2 id="projects" className="pt-8 font-semibold text-5xl text-neutral-200 text-center">Projects</h2>
                    <p className="mt-4 font-light text-neutral-400 text-center max-w-lg mx-auto"><span className="font-extrabold">Click on a project</span> below to learn about individual contributions, coding challenges, and important design considerations.</p>
                    <div className="mt-12 grid grid-cols-1 gap-8">
                        { projects.map((project) => (
                            <div key={project.id} className="border border-neutral-800/60 p-8 rounded-xl bg-neutral-600/5 hover:bg-neutral-600/10 shadow-inner shadow-neutral-600/5 hover:cursor-pointer" onClick={() => handleClick(project.id)}>
                                <div className="flex justify-between items-center gap-4">
                                    <div>
                                        <div className="border border-neutral-800 rounded-full px-2 py-1 w-fit text-neutral-400 text-xs flex gap-2 justify-start items-center">
                                            <div className={`w-2 h-2 rounded-full ${COLORS.STATUS[project.status]}`}></div>
                                            <p>{project.status}</p>
                                        </div>
                                    </div>
                                    {/*  */}
                                </div>
                                <h2 className="mt-6 text-2xl font-semibold text-neutral-300">{project.title}</h2>
                                <h3 className="mt-1 font-light text-sm text-neutral-400">{project.type}</h3>
                                <p className="mt-6 text-sm text-neutral-400 line-clamp-3">{project.description}</p>
                                <div className="mt-8 flex gap-2">
                                    { project.contributions.map((item) => (
                                        <div key={item} className="rounded-md flex place-items-center gap-2 px-2 py-2 bg-gradient-to-t from-neutral-400/5 border border-neutral-600/10 text-neutral-300 group">
                                            <div className="group-hover:hidden text-sm">
                                                <IconRender icon={item} size={'small'} color={'white'} />
                                            </div>
                                            <p className="hidden group-hover:block text-xs leading-3">{item}</p>
                                        </div>
                                    ))}
                                </div>
                                {projectID === project.id && displayProject &&
                                    <div className="mt-8">
                                        {project.website && 
                                            <div className="flex items-center gap-2">
                                                <IconRender icon={"earth"} color={"white"} />
                                                <a href={project.website} target="_blank" className="text-neutral-400 text-sm hover:underline hover:underline-offset-4">{project.website}</a>
                                            </div>
                                        }
                                    </div>
                                }
                            </div>
                        ))}
                    </div>
                </section>

                {/* SECTION: Tech Logos */}
                <section className="pt-20">
                    <div className="flex flex-wrap gap-6 md:gap-2 place-items-center justify-between">
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
    const bitcoin = bitcoinData[0]
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
            weather,
            spotify: null
        },
        revalidate: 14400,
    }
}
