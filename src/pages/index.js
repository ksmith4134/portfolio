import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { SVG_LOGOS, WEATHER_CONDITIONS, COLORS } from "@/components/Theme";
import { projects } from "@/data/projects";
import { nav } from "@/data/nav";

import { FaReact } from 'react-icons/fa'
import { FiArrowRight } from 'react-icons/fi'
import { BiLogoTailwindCss } from 'react-icons/bi'
import { BsSpotify } from 'react-icons/bs'
import nextIcon from '../../public/logos/nextjs-logotype-dark-background.svg'

import IconRender from "@/components/media/iconRender";
import Card from "@/components/ui/card";
import SoundBars from "@/components/svg/SoundBars";
import HologramPinkFloyd from "@/components/widgets/hologram/PinkFloyd/HologramPinkFloyd";


export default function Home(props) {

    const {
        bitcoin = null,
        weather = null,
        spotify = null,
        bitcoinPriceChart
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
    // console.log('weather', weatherData)
    const tempF = weather.tempF ? weather.tempF : '-'
    const WeatherIcon = WEATHER_CONDITIONS[weather.condition.code].icon
    // #endregion

    const handleClick = (id) => {
        setProjectID(id)
        projectID === id ? setDisplayProject(!displayProject) : setDisplayProject(true)
    }

    return (
        <main className="relative max-w-screen min-h-screen">
            <div className="max-w-5xl mx-auto px-8">
                
                <div className="mt-28 flex flex-col w-full">
                    <h1 className="text-center font-extrabold text-5xl bg-clip-text text-transparent bg-gradient-to-r from-white  to-neutral-400">Kevin Smith</h1>
                    <p className="text-center mt-4 text-2xl font-extralight text-neutral-400">Web Developer, UI / UX Designer</p>
                    {/* <div className="mt-5 flex justify-center items-center gap-4">
                        { nav.map((link) => (
                            <Link 
                                key={link.id}
                                href={link.path}
                            >
                                <IconRender icon={link.icon} />
                            </Link>
                        ))}
                    </div> */}
                </div>
                
                <div className="mt-16 flex flex-col gap-8">

                    <section className="flex justify-center items-stretch gap-8">
                        <Card width={"full"} padding={'none'}>
                            <p className="text-neutral-300 leading-8">I am a Software Program Manager by day, and a web developer by night (and weekends) where you&apos;ll find me most commonly using&nbsp;&nbsp;
                                <span className="inline-flex items-baseline">
                                    <Image src={nextIcon} width={72} height={72} alt="logo" />
                                </span>
                                <span>&nbsp;&nbsp;</span>
                                <span className="inline-flex items-baseline">
                                    <FaReact className="w-5 h-5 fill-white" />
                                    <span className="text-white font-normal">&nbsp;React&nbsp;&nbsp;</span>
                                </span>
                                <span className="inline-flex">
                                    and&nbsp;&nbsp;
                                    <BiLogoTailwindCss className="w-5 h-5 fill-white" />
                                    <span className="text-white font-normal">&nbsp;Tailwind</span>.
                                </span>
                                &nbsp;Most of all, I enjoy taking projects from the initial, conceptual stage all the way to deployment.
                            </p>
                        </Card>
                        <Card width={"fourth"} background={'radial'}>
                            <div className="p-3 w-fit flex place-items-center mx-auto rounded-lg bg-gradient-to-t from-neutral-400/5 border border-neutral-600/20">
                                <WeatherIcon className="text-4xl text-white" />
                            </div>
                            <div className="mt-2">
                                <p className="text-center mt-4 text-neutral-600 text-sm">Weather</p>
                                <p className="text-center mt-1 text-neutral-300 font-semibold text-xl">{tempF}&deg; F</p>
                            </div>
                        </Card>
                    </section>
                    

                    <section className="flex justify-center items-stretch gap-8 h-80">
                        <Card width={"twothird"} title={"Holofoil Cards"} subtitle={"React UI Component"} link={"/holo"}>
                            <div className="absolute z-40 top-[40%]">
                                <HologramPinkFloyd width={308} height={308} opacity={0.6} radius={12} rotateY={12} />
                            </div>
                        </Card>
                        <Card width={"full"} shrink={"none"} title={"Arnot Health Orthopedics"} subtitle={"Medical Resources Web App"} link={projects[0].website}>
                            <p className="mt-8 text-sm text-neutral-400 line-clamp-4">{projects[0].description}</p>
                            <div className="mt-8 flex gap-2">
                                <div className="rounded-md px-2 py-1 w-fit bg-gradient-to-t from-neutral-400/5 border border-neutral-600/20 text-neutral-300 text-xs flex gap-2 justify-start items-center">
                                    <div className={`w-2 h-2 rounded-full ${COLORS.STATUS[projects[0].status]}`}></div>
                                    <p>{projects[0].status}</p>
                                </div>
                                { projects[0].contributions.map((item) => (
                                    <div key={item} className="rounded-md flex place-items-center gap-2 px-2 py-2 bg-gradient-to-t from-neutral-400/5 border border-neutral-600/20 text-neutral-300 group/item">
                                        <div className="group-hover/item:hidden text-sm">
                                            <IconRender icon={item} size={'small'} color={'white'} />
                                        </div>
                                        <p className="hidden group-hover/item:block text-xs leading-3">{item}</p>
                                    </div>
                                ))}
                            </div>
                        </Card>
                    </section>

                    <section className="flex justify-center items-stretch gap-8 h-80">
                        <Card width={"full"} shrink={"none"} title={"NYS Education Department"} subtitle={"Teacher Training Web App"} link={projects[3].website}>
                            <p className="mt-8 text-sm text-neutral-400 line-clamp-4">{projects[3].description}</p>
                            <div className="mt-8 flex gap-2">
                                <div className="rounded-md px-2 py-1 w-fit bg-gradient-to-t from-neutral-400/5 border border-neutral-600/20 text-neutral-300 text-xs flex gap-2 justify-start items-center">
                                    <div className={`w-2 h-2 rounded-full ${COLORS.STATUS[projects[3].status]}`}></div>
                                    <p>{projects[3].status}</p>
                                </div>
                                { projects[3].contributions.map((item) => (
                                    <div key={item} className="rounded-md flex place-items-center gap-2 px-2 py-2 bg-gradient-to-t from-neutral-400/5 border border-neutral-600/20 text-neutral-300 group/item">
                                        <div className="group-hover/item:hidden text-sm">
                                            <IconRender icon={item} size={'small'} color={'white'} />
                                        </div>
                                        <p className="hidden group-hover/item:block text-xs leading-3">{item}</p>
                                    </div>
                                ))}
                            </div>
                        </Card>
                        <Card width={"twothird"} background={'radial-btm'}>
                            <div className="group w-full h-full flex flex-col justify-between">
                                <BsSpotify className="mt-2 text-white w-16 h-16" />
                                <div className="mt-6">
                                    <h2 className="text-left text-2xl font-semibold text-white">Spotify Player</h2>
                                    <div className="inline-flex items-center gap-2">
                                        <p className="mt-1 text-left text-sm font-extralight text-neutral-400">NEXT.js Component</p>
                                        <FiArrowRight className="text-neutral-400 translate-x-0 group-hover:translate-x-1 transition duration-300 ease-in-out" />
                                    </div>
                                </div>
                                <p className="text-neutral-200 text-sm">Use Spotify&apos;s authenticated Web API and JavaScript SDK to stream music directly on your own website.</p>
                                <div className="absolute z-40 top-[50%] left-[24%] opacity-30 blur-2xl group-hover:opacity-40 transition-opacity duration-500 ease-in-out">
                                    <SoundBars />
                                </div>
                            </div>
                        </Card>
                    </section>

                    <section className="flex justify-center items-stretch gap-8">
                        <Card width={"half"}>
                            <h2 className="text-left text-2xl font-semibold text-white">Kodak Moments</h2>
                            <div className="inline-flex items-center gap-2">
                                <p className="mt-1 text-left text-sm font-extralight text-neutral-400">Various Full-Stack Projects</p>
                                <FiArrowRight className="text-neutral-400 translate-x-0 group-hover:translate-x-1 transition duration-300 ease-in-out" />
                            </div>
                            <p className="mt-6 text-sm text-neutral-400 line-clamp-4">{projects[5].description}</p>
                            <div className="mt-8 flex gap-2">
                                <div className="rounded-md px-2 py-1 w-fit bg-gradient-to-t from-neutral-400/5 border border-neutral-600/20 text-neutral-300 text-xs flex gap-2 justify-start items-center">
                                    <div className={`w-2 h-2 rounded-full ${COLORS.STATUS[projects[5].status]}`}></div>
                                    <p>{projects[5].status}</p>
                                </div>
                                { projects[5].contributions.map((item) => (
                                    <div key={item} className="rounded-md flex place-items-center gap-2 px-2 py-2 bg-gradient-to-t from-neutral-400/5 border border-neutral-600/20 text-neutral-300 group/item">
                                        <div className="group-hover/item:hidden text-sm">
                                            <IconRender icon={item} size={'small'} color={'white'} />
                                        </div>
                                        <p className="hidden group-hover/item:block text-xs leading-3">{item}</p>
                                    </div>
                                ))}
                            </div>
                        </Card>
                        <Card width={"half"}>
                            <h2 className="text-left text-2xl font-semibold text-white">Pasture Stand</h2>
                            <div className="inline-flex items-center gap-2">
                                <p className="mt-1 text-left text-sm font-extralight text-neutral-400">Multi-Vendor E-Commerce</p>
                                <FiArrowRight className="text-neutral-400 translate-x-0 group-hover:translate-x-1 transition duration-300 ease-in-out" />
                            </div>
                            <p className="mt-6 text-sm text-neutral-400 line-clamp-4">{projects[4].description}</p>
                            <div className="mt-8 flex gap-2">
                                <div className="rounded-md px-2 py-1 w-fit bg-gradient-to-t from-neutral-400/5 border border-neutral-600/20 text-neutral-300 text-xs flex gap-2 justify-start items-center">
                                    <div className={`w-2 h-2 rounded-full ${COLORS.STATUS[projects[4].status]}`}></div>
                                    <p>{projects[4].status}</p>
                                </div>
                                { projects[4].contributions.map((item) => (
                                    <div key={item} className="rounded-md flex place-items-center gap-2 px-2 py-2 bg-gradient-to-t from-neutral-400/5 border border-neutral-600/20 text-neutral-300 group/item">
                                        <div className="group-hover/item:hidden text-sm">
                                            <IconRender icon={item} size={'small'} color={'white'} />
                                        </div>
                                        <p className="hidden group-hover/item:block text-xs leading-3">{item}</p>
                                    </div>
                                ))}
                            </div>
                        </Card>
                    </section>

                </div>


                {/* SECTION: Tech Logos */}
                <section className="pt-24 px-8">
                    <div className="flex flex-wrap gap-8 md:gap-2 place-items-center justify-between">
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

    // #region Bitcoin Current Price API
    const bitcoinResponse = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin')
    const bitcoinData = await bitcoinResponse.json()
    const bitcoin = bitcoinData[0]
    // #endregion

    // #region Bitcoin Current Price API
    const bitcoinChartResponse = await fetch('https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=30&interval=daily&precision=2')
    const bitcoinChartData = await bitcoinChartResponse.json()
    const bitcoinPriceChart = bitcoinChartData.prices.map(item => item[1])
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
            spotify: null,
            bitcoinPriceChart,
        },
        revalidate: 14400,
    }
}
