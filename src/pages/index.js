import { useState } from "react";
import Image from "next/image";

import { SVG_LOGOS, WEATHER_CONDITIONS, COLORS } from "@/components/Theme";
import { projects } from "@/data/projects";

import { FaReact } from 'react-icons/fa'
import { FiArrowRight } from 'react-icons/fi'
import { BiLogoTailwindCss } from 'react-icons/bi'
import nextIcon from '../../public/logos/nextjs-logotype-dark-background.svg'

import IconRender from "@/components/media/iconRender";
import Card from "@/components/ui/card";
import SoundBars from "@/components/svg/SoundBars";
import HologramPinkFloyd from "@/components/widgets/hologram/PinkFloyd/HologramPinkFloyd";


export default function Home(props) {

    const {
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

    // #region Weather
    // console.log('weather', weatherData)
    const tempF = weather.tempF ? weather.tempF : '-'
    const WeatherIcon = WEATHER_CONDITIONS[weather.condition.code].icon
    // #endregion


    return (
        <main className="relative max-w-screen min-h-screen">
            <div className="max-w-5xl mx-auto px-8">
                
                {/* HEADER */}
                <div className="mt-28 flex flex-col w-full">
                    <h1 className="text-center font-extrabold text-5xl bg-clip-text text-transparent bg-gradient-to-r from-white to-neutral-400">Kevin Smith</h1>
                    <p className="text-center mt-4 text-xl font-extralight text-neutral-400">Web Developer, UI / UX Designer</p>
                </div>
                
                {/* BENTO BOX GRID */}
                <div className="mt-16 flex flex-col gap-8 slide-enter-content">

                    <section className="flex justify-center items-stretch gap-8">
                        <Card width={"full"} padding={'none'}>
                            <p className="text-neutral-300 leading-8">Software Program Manager by day. Web developer by night (and weekends). My daily stack most commonly includes&nbsp;&nbsp;
                                <span className="inline-flex items-baseline">
                                    <Image src={nextIcon} width={72} height={72} alt="logo" />&nbsp;&nbsp;
                                </span>
                                <span>&nbsp;</span>
                                <span className="inline-flex items-baseline">
                                    <FaReact className="w-5 h-5 fill-white" />
                                    <span className="text-white font-normal">&nbsp;React&nbsp;&nbsp;</span>
                                </span>
                                <span className="inline-flex items-baseline">
                                    and&nbsp;&nbsp;
                                    <BiLogoTailwindCss className="w-5 h-5 fill-white" />
                                    <span className="text-white font-normal">&nbsp;Tailwind</span>.
                                </span>
                                &nbsp;I enjoy taking projects from start to finish - this includes everything from initial brainstorms, to content modeling, to UI design and programming.
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
                        <Card width={"twothird"} title={"Holofoils"} subtitle={"React UI Component"} link={"/articles/holofoils"}>
                            <div className="absolute z-40 top-[40%]">
                                <HologramPinkFloyd width={308} height={308} opacity={0.6} radius={12} rotateY={12} />
                            </div>
                        </Card>
                        <Card width={"full"} shrink={"none"} title={"Arnot Health Orthopedics"} subtitle={"Medical Resources Web App"} link={projects[0].website} linkTarget={"_blank"}>
                            <p className="mt-8 text-md text-neutral-400 line-clamp-4">{projects[0].description}</p>
                            <div className="mt-8 flex gap-2">
                                <div className="rounded-md px-2 py-1 w-fit bg-gradient-to-t from-neutral-400/5 border border-neutral-600/20 text-neutral-300 text-xs flex gap-2 justify-start items-center">
                                    <div className={`w-2 h-2 rounded-full ${COLORS.STATUS[projects[0].status]}`}></div>
                                    <p>{projects[0].status}</p>
                                </div>
                                { projects[0].contributions.map((item) => (
                                    <div key={item} className="rounded-md flex justify-start hover:justify-center items-center gap-2 px-2 py-2 bg-gradient-to-t from-neutral-400/5 border border-neutral-600/20 text-neutral-300 group/item w-8 hover:w-16 transition-all duration-500 ease-in-out overflow-hidden">
                                        <div className="scale-100 group-hover/item:scale-0 text-sm transition-all duration-700">
                                            <IconRender icon={item} size={'small'} color={'white'} />
                                        </div>
                                        <p className="opacity-0 group-hover/item:-ml-[22px] group-hover/item:opacity-100 transition-all duration-500 ease-in-out text-xs leading-3">{item}</p>
                                    </div>
                                ))}
                            </div>
                        </Card>
                    </section>

                    <section className="flex justify-center items-stretch gap-8 h-80">
                        <Card width={"twothird"} shrink={"none"} title={"NYS Education Department"} subtitle={"Teacher Training Web App"} link={projects[3].website} linkTarget={"_blank"}>
                            <p className="mt-8 text-md text-neutral-400 line-clamp-4">{projects[3].description}</p>
                            <div className="mt-8 flex gap-2">
                                <div className="rounded-md px-2 py-1 w-fit bg-gradient-to-t from-neutral-400/5 border border-neutral-600/20 text-neutral-300 text-xs flex gap-2 justify-start items-center">
                                    <div className={`w-2 h-2 rounded-full ${COLORS.STATUS[projects[3].status]}`}></div>
                                    <p>{projects[3].status}</p>
                                </div>
                                { projects[3].contributions.map((item) => (
                                    <div key={item} className="rounded-md flex justify-start hover:justify-center items-center gap-2 px-2 py-2 bg-gradient-to-t from-neutral-400/5 border border-neutral-600/20 text-neutral-300 group/item w-8 hover:w-16 transition-all duration-500 ease-in-out overflow-hidden">
                                        <div className="scale-100 group-hover/item:scale-0 text-sm transition-all duration-700">
                                            <IconRender icon={item} size={'small'} color={'white'} />
                                        </div>
                                        <p className="opacity-0 group-hover/item:-ml-[22px] group-hover/item:opacity-100 transition-all duration-500 ease-in-out text-xs leading-3">{item}</p>
                                    </div>
                                ))}
                            </div>
                        </Card>
                        <Card width={"third"} background={"radial-btm"} title={"Spotify Player"} subtitle={"NEXT.js Component"} icon={'spotify'} link={"/articles/spotify"}>
                            <p className="z-40 text-neutral-300 text-md">Use Spotify&apos;s authenticated Web API to stream music directly on your own website.</p>
                            <div className="absolute top-[50%] left-[20%] opacity-30 blur-2xl group-hover:opacity-40 transition-opacity duration-500 ease-in-out">
                                <SoundBars />
                            </div>
                        </Card>
                    </section>

                    <section className="flex justify-center items-stretch gap-8 h-80">
                        <Card width={"third"} link={'/articles/dynamic-content'} background={'radial'}>
                            <div className="relative overflow-hidden w-full h-full rounded-lg">
                                <Image alt="dynamic content models" src={"/dynamic-content-1.png"} fill className="object-contain" />
                            </div>
                            <div className="z-50 mt-2">
                                <h2 className="text-left text-2xl font-semibold text-white">Dynamic Content Modeling</h2>
                                <div className="mt-4 inline-flex items-center gap-2">
                                    <p className="text-left text-sm font-extralight text-neutral-400">Learn More</p>
                                    <FiArrowRight className="mt-px text-neutral-400 translate-x-0 group-hover:translate-x-1 transition duration-300 ease-in-out" />
                                </div>
                            </div>
                        </Card>
                        <Card width={"twothird"} title={"Kodak Moments"} subtitle={"Various Full-Stack Projects"} link={projects[5].website} linkTarget={"_blank"}>
                            <p className="mt-6 text-md text-neutral-400 line-clamp-4">{projects[5].description}</p>
                            <div className="mt-8 flex gap-2">
                                <div className="rounded-md px-2 py-1 w-fit bg-gradient-to-t from-neutral-400/5 border border-neutral-600/20 text-neutral-300 text-xs flex gap-2 justify-start items-center">
                                    <div className={`w-2 h-2 rounded-full ${COLORS.STATUS[projects[5].status]}`}></div>
                                    <p>{projects[5].status}</p>
                                </div>
                                { projects[5].contributions.map((item) => (
                                    <div key={item} className="rounded-md flex justify-start hover:justify-center items-center gap-2 px-2 py-2 bg-gradient-to-t from-neutral-400/5 border border-neutral-600/20 text-neutral-300 group/item w-8 hover:w-16 transition-all duration-500 ease-in-out overflow-hidden">
                                        <div className="scale-100 group-hover/item:scale-0 text-sm transition-all duration-700">
                                            <IconRender icon={item} size={'small'} color={'white'} />
                                        </div>
                                        <p className="opacity-0 group-hover/item:-ml-[22px] group-hover/item:opacity-100 transition-all duration-500 ease-in-out text-xs leading-3">{item}</p>
                                    </div>
                                ))}
                            </div>
                        </Card>
                    </section>

                </div>

                {/* TECH LOGOS */}
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
            weather,
            spotify: null,
        },
        revalidate: 14400,
    }
}
