import { useEffect, useRef } from "react";


export default function HologramCard() {
    let bounds;
    const inputRef = useRef();
    const glowRef = useRef();
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

        inputRef.current.style.transform = `
            scale3d(1.01, 1.01, 1.01)
            rotate3d(
            ${center.y / 100},
            ${-center.x / 100},
            0,
            ${Math.log(distance) * 2}deg
            )
        `;

        // console.log(center.y / 100);
        glowRef.current.style.backgroundImage = `
            radial-gradient(
            circle at
            ${center.x * 2 + bounds.width / 2}px
            ${center.y * 2 + bounds.height / 2}px,
            #ffffff18,
            #0000000f
            )
        `;
    };

    const removeListener = (e) => {
        inputRef.current.style.transform = "";
        inputRef.current.style.background = "";
        glowRef.current.style.backgroundImage = "";
    };

    useEffect(() => {}, []);

    return (

        <div className="app">
            <div
                className="card"
                ref={inputRef}
                onMouseLeave={removeListener}
                onMouseMove={rotateToMouse}
            >
                <div className="imageTop"></div>
                <div className="relative w-full h-full flex flex-col justify-end items-end text-white">
                    <h1 className="text-4xl font-semibold">Kevin Smith</h1>
                    <p className="text-lg font-thin">Web Developer, UI / UX Designer</p>
                </div>
                <div ref={glowRef} className="glow" />
            </div>
        </div>

    );
}
