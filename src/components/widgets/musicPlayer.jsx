import { useState } from 'react'
import Image from 'next/image'
import prism from '../../../public/PrismPlayButton4.svg'

export default function MusicPlayer() {

    const [ animate, setAnimate ] = useState(false)

    const handleClick = (bool) => {
        setAnimate(bool)
    }
    return (
        <a href="https://open.spotify.com/album/4LH4d3cOWNNsVw41Gqt2kv?si=nba9ShSoSxGqgMd7MsqANA" target="blank">
            <div className="relative w-full mt-16 border border-neutral-800/60 bg-neutral-800/10 p-6 rounded-xl flex justify-between group-hover:cursor-pointer group shadow-inner shadow-neutral-400/5" onMouseEnter={() => handleClick(true)} onMouseLeave={() => handleClick(false)}>
                <div className="flex gap-6 items-center">
                    <button type="button" className="opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300 ease-in-out">
                        <Image 
                            src={prism}
                            alt="prism play button"
                            className="w-16 h-16"
                        />
                    </button>
                    <div className="flex flex-col gap-1 items-start">
                        <p className="text-neutral-600 text-xs">Pink Floyd</p>
                        <p className="text-neutral-400 font-semibold">Dark Side of the Moon</p>
                    </div>
                </div>
                <div className="hidden md:block relative w-36">
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
        </a>
    )
}
