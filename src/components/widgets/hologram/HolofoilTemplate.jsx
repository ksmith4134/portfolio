import { useState, useRef } from "react";
import Image from "next/image";
import styles from './HolofoilTemplate.module.css'

export default function HolofoilTemplate(props) {

    const {
        width = 500,
        height = 300,
        perspective = 600,
        radius = 20,
        topImage = '/animations/holofoils/React-1.jpg',
        opacity = 0.4,
        rotateX = 20,
        rotateY = 15,
        shimmerRate = 30, // 30 is a good default value
    } = props

    const [ holoCoordinates, setHoloCoordinates ] = useState({ mx: 50, my: 50, bx: 50, by: 50, rx: 0, ry: 0, opacity })

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

        setHoloCoordinates({
            mx: (leftX/bounds.width)*100, // 0 -> 100%; (leftX / card width) * 100
            my: (topY/bounds.height)*100, // 0 -> 100%; (topY / card height) * 100
            bx: (leftX+bounds.width)/(bounds.width/shimmerRate), // 30 -> 60%
            by: (topY+bounds.height)/(bounds.height/shimmerRate), // 30 -> 60%
            rx: (center.x)/((bounds.right-bounds.left) / (2*rotateX)), // -rotateX -> +rotateXdeg
            ry: (center.y)/((bounds.bottom-bounds.top) / (2*rotateY)), // -rotateY -> +rotateYdeg
            opacity: 1,
        })

        // Testing Calcs Logs
        // console.log(
        //     // 'ORIGINAL VALUES',
        //     // '\nbounds', bounds,
        //     // '\ndistance', distance,
        //     // '\nmouseX', mouseX,
        //     // '\nmouseY', mouseY,
        //     // '\nleftX', leftX,
        //     // '\ntopY', topY,
        //     // '\n centerX', center.x,
        //     // '\n centerY', center.y,
        //     // '\n\nCALCULATED VALUES',
        //     // '\nmx', (leftX/bounds.width)*100,
        //     // '\nmy', (topY/bounds.height)*100,
        //     // '\nbx', (leftX+bounds.width)/16,
        //     // '\nby', (topY+bounds.height)/10,
        //     // '\nrx', (center.x)/((bounds.right-bounds.left) / (2*rotateX)),
        //     // '\nry', (center.y)/((bounds.bottom-bounds.top) / (2*rotateY)),
        //     // '\nrx-divisor', (bounds.right-bounds.left) / (2*rotateX),
        //     // '\nry-divisor', (bounds.bottom-bounds.top) / (2*rotateY),
        // )

    };

    const removeListener = (e) => {
        setHoloCoordinates({mx: 50, my: 50, bx: 50, by: 50, rx: 0, ry: 0, opacity})
    };

    return (
        <div 
            className={styles.container} 
            style={{ 
                "--width": `${width}px`, 
                "--height": `${height}px`, 
            }}
        >
            <div 
                className={styles.variables}
                style={{
                    "--m-x": `${holoCoordinates.mx}%`, 
                    "--m-y": `${holoCoordinates.my}%`, 
                    "--bg-x": `${holoCoordinates.bx}%`, 
                    "--bg-y": `${holoCoordinates.by}%`, 
                    "--r-x": `${holoCoordinates.rx}deg`, 
                    "--r-y": `${holoCoordinates.ry}deg`, 
                    "--radius": `${radius}px`, 
                    "--opacity": `${holoCoordinates.opacity}`,
                    "--perspective": `${perspective}px`, 
                }}
                ref={inputRef}
                onMouseLeave={removeListener}
                onMouseMove={rotateToMouse}
            >
                <div className={styles.card}>
                    <div className={styles.imageContainer}>
                        <Image 
                            alt="hologram foil" 
                            fill
                            className={styles.image}
                            quality={100}
                            style={{ color:"transparent" }} 
                            src={topImage}
                        /> 
                        {/* <div className="absolute p-4 z-100 w-full h-full flex flex-col justify-end items-end">
                            <h1 className="mt-2 text-4xl font-semibold text-white">Kevin Smith</h1>
                            <p className="mt-0.5 text-md font-thin text-white ">Web Developer, UI / UX Designer</p>
                        </div> */}
                    </div>
                    <div className={styles.cursourHighlight}></div>
                    <div className={styles.foil}></div>
                </div>
            </div>
        </div>
    );
}
