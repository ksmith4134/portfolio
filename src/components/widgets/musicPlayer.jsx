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
            <div className="relative mt-10 border border-neutral-800 bg-neutral-950 p-6 rounded-md flex justify-between hover:cursor-pointer group" onMouseOver={() => handleClick(true)} onMouseLeave={() => handleClick(false)}>
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
        </a>
    )
}
