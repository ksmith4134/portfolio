import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import image from '../../../../../public/animations/holofoils/cashapp.jpg'
import styles from './HologramCardLinear.module.css'

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
                className={styles.gLjvKm}
                style={{"--m-x": `${mouseCoords.mx}%`, "--m-y": `${mouseCoords.my}%`, "--bg-x": `${mouseCoords.bx}%`, "--bg-y": `${mouseCoords.by}%`, "--r-x": `${mouseCoords.rx}deg`, "--r-y": `${mouseCoords.ry}deg`, "--opacity": `${opacity}`}}
                ref={inputRef}
                onMouseLeave={removeListener}
                onMouseMove={rotateToMouse}
            >
                
                <div className={styles.nBKd}>
                    <div className={styles.ecVroI}>
                        <Image 
                            alt="test card hologram" 
                            data-nosnippet="true" 
                            data-loaded="true" 
                            fill={true} 
                            decoding="async" 
                            data-nimg="1" 
                            className={styles.dqWqYY}
                            style={{ color:"transparent" }} 
                            src={image}
                        /> 
                    </div>
                    <div className={styles.fwVxsc}></div>
                    <div className={styles.cJAjge}></div>
                </div>
            </div>
        </>

    );
}
