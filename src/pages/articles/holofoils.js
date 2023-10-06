import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import RoundedButton from "@/components/ui/roundedButton";
import HologramBitcoin from "@/components/widgets/hologram/Bitcoin/HologramBitcoin";
import HologramReact from "@/components/widgets/hologram/React/HologramReact";
import HologramPinkFloyd from "@/components/widgets/hologram/PinkFloyd/HologramPinkFloyd";
import { FaGithub, FaArrowLeft } from 'react-icons/fa'
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'
import HolofoilTemplate from "@/components/widgets/hologram/HolofoilTemplate";

export default function Holofoils({jsxCode, cssCode}) {

    const sqDimensions = 300;
    const opacity = 0.6;

    const holofoils = [
        { 
            id: 0, 
            caption: "Bitcoin", 
            component: <HologramBitcoin width={sqDimensions} height={sqDimensions} opacity={opacity} /> 
        },
        { 
            id: 1, 
            caption: "Pink Floyd", 
            component: <HologramPinkFloyd width={sqDimensions} height={sqDimensions} opacity={opacity} /> 
        },
        { 
            id: 2, 
            caption: "React.js", 
            component: <HologramReact width={sqDimensions} height={sqDimensions} opacity={opacity} /> 
        },
    ];


    const [ sliderPosition, setSliderPosition ] = useState({ transform: "translateX(0)"})
    const [ selected, setSelected ] = useState(0)

    const handleClick = (step) => {
        if(step === -1){
            if(selected === 0){
                setSelected(holofoils.length -1);
            } else {
                setSelected(selected + step);
            }
        }

        if(step === 1){
            if(selected === holofoils.length-1){
                setSelected(0);
            } else {
                setSelected(selected + step);
            }
        }
    }

    useEffect(() => {
        setSliderPosition({ transform: `translateX(${selected * -100}%)`})
    }, [selected])


    return (
        <div className='relative z-30 max-w-screen min-h-screen py-12 w-full'>
            <article className="max-w-2xl mx-auto slide-enter-content">

                <Link href={'/'}>
                    <button className="relative z-20 w-fit inline-flex items-center gap-2 group">
                        <FaArrowLeft className="relative z-20 text-neutral-300 text-xs group-hover:-translate-x-1 transition duration-200 ease-in-out" />
                        <p className="relative z-20 text-neutral-300 text-sm">Home</p>
                    </button>
                </Link>
                <h1 className="mt-12 text-white font-bold text-4xl tracking-wide">Holofoils</h1>
                <h5 className="mt-2 text-neutral-600 text-md font-normal">React UI Component</h5>
                <div className="mt-8 prose prose-invert max-w-none">
                    <p>Inspired by the work of&nbsp;
                        <a href="https://github.com/simeydotme/pokemon-cards-css" target="_blank">
                            <span className="inline-flex items-baseline gap-1 hover:underline underline-offset-4">
                                <FaGithub />
                                simeydotme
                            </span>
                        </a> and&nbsp;
                        <a href="https://github.com/pacocoursey" target="_blank">
                            <span className="inline-flex items-baseline gap-1 hover:underline underline-offset-4">
                                <FaGithub />
                                Paco Coursey
                            </span>
                        </a>.
                    </p>
                    <p>Follow the directions below to start using holofoil cards in your own React or NEXT.js project. Customize the cards using your own images, component props, and custom styling. Checkout the gallery of examples below and continue reading to see the code.</p>

                    <div className="mt-12 not-prose flex justify-between items-center border border-neutral-800 rounded-3xl p-8 group transition-opacity duration-1000 ease-in-out">
                        <button className="opacity-0 group-hover:opacity-100 transition-opacity duration-1000 ease-in-out text-white/20 hover:text-white/40 mr-2" onClick={() => handleClick(-1)}>
                            <BsChevronLeft className="text-4xl" />
                        </button>
                        <div className="not-prose w-full h-full p-4 overflow-x-hidden flex justify-center items-center">
                            <div className="flex">
                                {holofoils.map((item) => (
                                    <div key={item.id} className="w-full h-full flex flex-col justify-center items-center gap-6 text-sm flex-shrink-0 flex-grow-0 transition-transform duration-500" style={sliderPosition}>
                                        <div>{item.component}</div>
                                        <div className={`opacity-0 ${selected === item.id && 'opacity-100'} transtion-opacity duration-1000 delay-500 ease-in-out `}>
                                            <RoundedButton label={item.caption} />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <button className="opacity-0 group-hover:opacity-100 transition-opacity duration-1000 ease-in-out text-white/20 hover:text-white/40 ml-2" onClick={() => handleClick(1)}>
                            <BsChevronRight className="text-4xl" />
                        </button>
                    </div>

                    <h2>Steps</h2>
                    <ol>
                        <li>Create a file called, <code>HolofoilTemplate.jsx</code> in your /components folder.</li>
                        <li>Copy the code below and paste it into the new component file. Note, if using VS Code, press Shift+Alt+F for Windows or Cmd+k+f for Mac.</li>
                        <figure className="mt-4 w-full not-prose">
                            <div className="flex justify-between items-center gap-2">
                                <h2 className="text-neutral-300 text-sm font-mono px-4 py-3 bg-neutral-900 w-full italic">/src/components/HolofoilTemplate.jsx</h2>
                            </div>
                            <div className="overflow-auto border border-white/5 h-96 bg-neutral-800/20 text-sm">
                                <pre className="break-normal" dangerouslySetInnerHTML={{ __html: jsxCode }} />
                            </div>
                        </figure>
                        <li>Add a main, foreground image to your public folder. Add the <strong>absolute</strong> url string to the <code>foregroundImage</code> prop of the HolofoilTemplate.jsx component. There is a code comment in the desctructured props pointing to the correct place to put the url.</li>
                        <figure className="flex flex-col items-center">
                            <Image 
                                alt=""
                                width={400}
                                height={400}
                                src={'/animations/holofoils/horsehead-nebula.jpg'}
                                className="brightness-125"

                            />
                            <figcaption>Horsehead Nebula, Courtesy of ESA Hubble</figcaption>
                        </figure>
                        <li>In the same folder as the component, create a second file called, <code>HolofoilTemplate.module.css</code></li>
                        <li>Copy the code below and paste it into the new component file. Note, if using VS Code, press Shift+Alt+F for Windows or Cmd+k+f for Mac.</li>
                        <figure className="mt-4 w-full not-prose">
                            <div className="flex justify-between items-center gap-2">
                                <h2 className="text-neutral-300 text-sm font-mono px-4 py-3 bg-neutral-900 w-full italic">/src/components/HolofoilTemplate.module.css</h2>
                            </div>
                            <div className="overflow-auto border border-white/5 h-96 bg-neutral-800/20 text-sm">
                                <pre className="break-normal" dangerouslySetInnerHTML={{ __html: cssCode }} />
                            </div>
                        </figure>
                        <li>Add a background image to your public folder. <em>Note: A good background image typically consists of a random or repeating white pattern on a black background.</em></li>
                        <figure className="flex flex-col items-center">
                            <Image 
                                alt=""
                                width={500}
                                height={500}
                                src={'/animations/holofoils/cosmosfoil-2.png'}
                                className=""

                            />
                            <figcaption>Courtesy of aschefield101 on deviantart.com</figcaption>
                        </figure>
                        <li>Add the <strong>relative</strong> url pointing to the background image, to the <code>--pattern</code> CSS variable (found within the <code>.foil</code> class). There is a code comment in the CSS pointing to the correct place to put the url.</li>
                        <li>Import and add the <code>{`<HolofoilTemplate />`}</code> component to a page. Hover over the holofoil and see how it works!</li>
                        <figure className="flex flex-col items-center not-prose">
                            <HolofoilTemplate 
                                foregroundImage={'/animations/holofoils/horsehead-nebula.jpg'} 
                                width={400} 
                                height={480} 
                                opacity={0.4} 
                                rotateX={16} 
                                rotateY={12} 
                            />
                        </figure>
                    </ol>

                    <h2>Future Enhancements</h2>
                    <ul>
                        <li>Set the background image in props instead of manually in CSS.</li>
                        <li>Stack multiple layers of foreground images and apply the &ldquo;foil&rdquo; effect only to specific layers (specified with a prop).</li>
                        <li>Fix the CSS properties causing clunky pitch (x-axis) and yaw (y-axis) rotation animations in the Mozilla browser.</li>
                    </ul>

                </div>
            </article>
        </div>
    );
}

export async function getStaticProps() {

    const shiki = await import("shiki");
    const highlighter = await shiki.getHighlighter({
        theme: "dark-plus"
    });

    const jsxCode = `
    import { useState, useRef } from "react";
    import styles from "./HolofoilTemplate.module.css"

    export default function HolofoilTemplate(props) {

        const {
            width = 500,
            height = 300,
            perspective = 600,
            radius = 20,
            foregroundImage = '/replace-me.jpg', // <-- Insert your own image
            opacity = 0.4,
            rotateX = 20,
            rotateY = 15,
            shimmerRate = 30,
        } = props

        const [ holoCoordinates, setHoloCoordinates ] = useState({ 
            mx: 50, my: 50, 
            bx: 50, by: 50, 
            rx: 0, ry: 0, 
            opacity 
        })

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

            setHoloCoordinates({
                mx: (leftX/bounds.width)*100,
                my: (topY/bounds.height)*100,
                bx: (leftX+bounds.width)/(bounds.width/shimmerRate),
                by: (topY+bounds.height)/(bounds.height/shimmerRate),
                rx: (center.x)/((bounds.right-bounds.left) / (2*rotateX)),
                ry: (center.y)/((bounds.bottom-bounds.top) / (2*rotateY)),
                opacity: 1,
            })

        };

        const removeListener = (e) => {
            setHoloCoordinates({
                mx: 50, my: 50, 
                bx: 50, by: 50, 
                rx: 0, ry: 0, 
                opacity
            })
        };

        return (
            <div 
                className={styles.container} 
                style={{ 
                    "--width": \`\${width}px\`,
                    "--height": \`\${height}px\`, 
                }}
            >
                <div 
                    className={styles.variables}
                    style={{
                        "--m-x": \`\${holoCoordinates.mx}%\`, 
                        "--m-y": \`\${holoCoordinates.my}%\`, 
                        "--bg-x": \`\${holoCoordinates.bx}%\`, 
                        "--bg-y": \`\${holoCoordinates.by}%\`, 
                        "--r-x": \`\${holoCoordinates.rx}deg\`, 
                        "--r-y": \`\${holoCoordinates.ry}deg\`, 
                        "--radius": \`\${radius}px\`, 
                        "--opacity": \`\${holoCoordinates.opacity}\`,
                        "--perspective": \`\${perspective}px\`, 
                    }}
                    ref={inputRef}
                    onMouseLeave={removeListener}
                    onMouseMove={rotateToMouse}
                >
                    <div className={styles.card}>
                        <div className={styles.imageContainer}>
                            <img 
                                src={foregroundImage}
                                className={styles.image}
                                style={{ color:"transparent" }} 
                                alt="holofoil main image"
                            />
                        </div>
                        <div className={styles.cursourHighlight}></div>
                        <div className={styles.foil}></div>
                    </div>
                </div>
            </div>
        );
    }
    `

    const cssCode = `
    .container {
        --width: 480px;
        --height: 300px;
        width: var(--width);
        height: var(--height);
    }

    .variables {
        --m-x: 50%;
        --m-y: 50%;
        --r-x: 0deg;
        --r-y: 0deg;
        --bg-x: 50%;
        --bg-y: 50%;
        --radius: 0px;
        --perspective: 600px;
        --opacity: .5;
        --duration: 300ms;
        --foil-size: 75%;
        --easing: ease;
        --transition: var(--duration) var(--easing);
        position: relative;
        isolation: isolate;
        contain: layout style;
        perspective: var(--perspective);
        transition-property: transform;
        will-change: transform;
        width: 100%;
        height: 100%;
    }

    .card {
        height: 100%;
        display: grid;
        will-change: transform;
        transform-origin: center center;
        transition-duration: 200ms;
        transition-property: transform;
        transform: rotateY(var(--r-x)) rotateX(var(--r-y));
        border-radius: var(--radius);
        border-width: 1px;
        border-style: solid;
        border-color: rgb(28, 28, 28);
        border-image: initial;
    }

    .card > * {
        width: 100%;
        height: 100%;
        display: grid;
        grid-area: 1 / 1 / auto / auto;
        clip-path: inset(0 0 0 0 round var(--radius));
    }

    .imageContainer {
        position: relative;
        width: 100%;
        height: 100%;
        overflow: hidden;
    }

    .image {
        object-fit: cover;
    }

    .cursourHighlight {
        mix-blend-mode: soft-light;
        opacity: var(--opacity);
        will-change: background;
        transition-property: opacity, background;
        background: 
            radial-gradient( 
                farthest-corner circle at var(--m-x) var(--m-y), 
                rgba(255,255,255,0.8) 10%, 
                rgba(255,255,255,0.65) 20%, 
                rgba(255,255,255,0) 
            90% );
    }

    .foil {
        mix-blend-mode: color-dodge;
        opacity: var(--opacity);
        will-change: background;
        transition-property: opacity;
        clip-path: inset(0 0 1px 0 round var(--radius));
        --step: 5%;
        /* Insert your own image into the url below */
        --pattern: url('../public/replace-me.jpg') center / var(--foil-size);
        --rainbow: 
            repeating-linear-gradient( 
                0deg, 
                rgb(255,119,115) calc(var(--step) * 1), 
                rgba(255,237,95,1) calc(var(--step) * 2), 
                rgba(168,255,95,1) calc(var(--step) * 3), 
                rgba(131,255,247,1) calc(var(--step) * 4), 
                rgba(120,148,255,1) calc(var(--step) * 5), 
                rgb(216,117,255) calc(var(--step) * 6), 
                rgb(255,119,115) calc(var(--step) * 7) 
            ) 0% var(--bg-y) / 200% 700%;
        --diagonal: 
            repeating-linear-gradient( 
                128deg, 
                #0e152e 0%, 
                hsl(180,10%,60%) 3.8%, 
                hsl(180,10%,60%) 4.5%, 
                hsl(180,10%,60%) 5.2%, 
                #0e152e 10%, 
                #0e152e 12% 
            ) var(--bg-x) var(--bg-y) / 300%;
        --shade: 
            radial-gradient( 
                farthest-corner circle at var(--m-x) var(--m-y), 
                rgba(255,255,255,0.1) 12%, 
                rgba(255,255,255,0.15) 20%, 
                rgba(255,255,255,0.25) 120% 
            ) var(--bg-x) var(--bg-y) / 300%;
        background-blend-mode: hue, hue, hard-light, overlay;
        background: 
            var(--pattern),
            var(--rainbow),
            var(--diagonal),
            var(--shade);
    }

    .foil::after {
        content: "";
        grid-area: inherit;
        background-image: inherit;
        background-repeat: inherit;
        background-attachment: inherit;
        background-origin: inherit;
        background-clip: inherit;
        background-color: inherit;
        mix-blend-mode: exclusion;
        background-size: 
            var(--foil-size), 
            200% 400%, 
            800%, 
            200%;
        background-position: 
            center, 
            0% var(--bg-y), 
            calc(var(--bg-x) * -1) calc(var(--bg-y) * -1), 
            var(--bg-x) var(--bg-y);
        background-blend-mode: soft-light, hue, hard-light;
    }
    `

    return {
        props: {
            jsxCode: highlighter.codeToHtml(jsxCode, { lang: 'js' }),
            cssCode: highlighter.codeToHtml(cssCode, { lang: 'css' })
        }
    }
}