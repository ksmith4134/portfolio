/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import image from '../../../../public/holosheet___cosmos_1_by_aschefield101_dfym6ov.png'

export default function HologramCardLinear() {

    const [ mouseCoords, setMouseCoords ] = useState({mx: 50, my: 50, bx: 50, by: 50, rx: 0, ry: 0})
    const [ opacity, setOpacity ] = useState(0)

    let bounds;

    const inputRef = useRef();

    const rotateToMouse = (e) => {
        bounds = inputRef.current.getBoundingClientRect();
        const mouseX = e.clientX;
        const mouseY = e.clientY;
        const leftX = mouseX - bounds.x;
        const topY = mouseY - bounds.y;
        const center = {
            x: leftX - bounds.width / 2,
            y: topY - bounds.height / 2,
        };
        const distance = Math.sqrt(center.x ** 2 + center.y ** 2);

        setOpacity(0.7)

        setMouseCoords({
            mx: (leftX/340)*100, 
            my: (topY/420)*100, 
            bx: (leftX+503)/13.6, 
            by: (topY+408)/12.35, 
            rx: (center.x)/15.5, 
            ry: (center.y)/10.5,
        })

        console.log(
            'mouseX', mouseX,
            '\nmouseY', mouseY,
            '\n centerX', center.x,
            '\n centerY', center.y,
            '\n distance', distance,
            '\n rx', (center.x)/15.5,
            '\n ry', (center.y)/10.5,
        )

    };

    const removeListener = (e) => {
        setOpacity(0)
        setMouseCoords({mx: 50, my: 50, bx: 50, by: 50, rx: 0, ry: 0})
    };

    useEffect(() => {}, []);

    return (

        <>
            
            <div 
                className="sc-61c592de-0 gLjvKm" 
                style={{"--m-x": `${mouseCoords.mx}%`, "--m-y": `${mouseCoords.my}%`, "--bg-x": `${mouseCoords.bx}%`, "--bg-y": `${mouseCoords.by}%`, "--r-x": `${mouseCoords.rx}deg`, "--r-y": `${mouseCoords.ry}deg`, "--opacity": `${opacity}`}}
                ref={inputRef}
                onMouseLeave={removeListener}
                onMouseMove={rotateToMouse}
            >
                
                <div className="sc-61c592de-1 nBKd">
                    <div className="sc-61c592de-4 ecVroI">
                        <img 
                            alt="test card hologram" 
                            data-nosnippet="true" 
                            data-loaded="true" 
                            width="1360" 
                            height="1680" 
                            decoding="async" 
                            data-nimg="1" 
                            className="sc-5f7b9831-0 dqWqYY" 
                            style={{ color:"transparent" }} 
                            src={'https://cdn.sanity.io/images/ornj730p/production/c15db21d41cbaa1ec2583168a74011159f755658-1360x1680.jpg?q=95&amp;auto=format&amp;dpr=2'}
                        /> {/* https://cdn.sanity.io/images/ornj730p/production/c15db21d41cbaa1ec2583168a74011159f755658-1360x1680.jpg?q=95&amp;auto=format&amp;dpr=2 */}
                    </div>
                
                    {/* Delete Me, Tesing Purposes */}
                    {/* <div ref={glowRef} className="glow" /> */}

                    <div className="sc-61c592de-3 fwVxsc"></div>
                    <div className="sc-61c592de-2 cJAjge"></div>
                </div>
            </div>
        </>

    );
}
