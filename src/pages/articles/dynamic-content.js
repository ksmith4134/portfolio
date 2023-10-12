import Image from "next/image";
import Link from "next/link"
import { FaArrowLeft, FaInfoCircle, FaExclamationTriangle } from "react-icons/fa"

export default function DynamicContent(props) {

    const {
        codeComponentParagraph,
        codeComponentHero,
        codeTheme,
        codePage,
    } = props;

    return (
        <div className='relative z-30 max-w-screen min-h-screen pt-12 pb-20 w-full'>
            <article className="max-w-2xl mx-auto px-4 md:px-0 slide-enter-content">

                <Link href={'/'}>
                    <button className="relative z-20 w-fit inline-flex items-center gap-2 group">
                        <FaArrowLeft className="relative z-20 text-neutral-300 text-xs group-hover:-translate-x-1 transition duration-200 ease-in-out" />
                        <p className="relative z-20 text-neutral-300 text-sm">Home</p>
                    </button>
                </Link>
                <h1 className="mt-12 text-white font-bold text-4xl tracking-wide">Dynamic Content Modeling</h1>
                <h5 className="mt-2 text-neutral-600 text-md font-normal"><strong>Case Study:</strong> Arnot Health Orthopedics</h5>

                <div className="mt-8 prose prose-invert max-w-none">
                    
                    <p>This article will explain the general principles used to implement a front-end with a headless CMS so that page components, and the content within them, can be re-arranged and updated on the fly, without ever having to do a software release.</p>
                    <h2>Background</h2>
                    <p>The orthopedic department at Arnot Health, a major hospital system in southern NY, needs to be able to create unique patient resource pages for each condition they treat – from joint replacements and tendon tears to various dislocations and fractures.</p>
                    <p>The headless CMS, Storblok, was chosen to accomplish this. A headless CMS provides the physicians at Arnot Health with:</p>
                        <ol>
                            <li>A drag-and-drop interface to create, update, or delete pages and content</li>
                            <li>Unique combinations of custom components to display content</li>
                            <li>An intuitive, file-based repository to store media and documents</li>
                            <li>Generous hosting and server uptimes</li>
                        </ol>
                    <p>Now, the team can easily create and re-organize whole condition pages down to the component level. Most importantly, patients get medical resources specifically tailored to their condition and treatment.</p>
                    <h3>Headless CMS</h3>
                    <div className="mt-8 not-prose flex flex-col md:flex-row items-start gap-6 w-full p-8 bg-red-500/30 rounded-xl">
                        <div className="w-12">
                            <FaExclamationTriangle className="text-4xl" />
                        </div>
                        <div className="w-full">
                            <p>This article is not intended to review how a headless CMS works. Many platform providers have excellent online resources if you&apos;re interested in learning more. Here are a few reputable options: Contentful, Sanity, Strapi, Storyblok, and Hygraph.</p>
                        </div>
                    </div>
                    <p>When constructing a new condition page, doctors first select from one or more pre-defined categories to logically divide treatment information. These categories ultimately create the page&apos;s index.</p>
                    <ul>
                        <li>Background</li>
                        <li>Conservative Care</li>
                        <li>Surgery</li>
                        <li>Pre-Op Care</li>
                        <li>Post-Op Care</li>
                        <li>Resources</li>
                    </ul>
                    <p>Then, within each index category, doctors enter their content into a custom mix of pre-made components. These components can be added, removed, duplicated, and re-organized using a drag-and-drop interface.</p>
                    <ul>
                        <li>Rich-text Paragraph</li>
                        <li>Media Carousel</li>
                        <li>Video with Description</li>
                        <li>Dropdown Card</li>
                        <li>Info Card</li>
                        <li>Accordion</li>
                        <li>Link List</li>
                        <li>Download List</li>
                    </ul>
                    <figure className="relative overflow-hidden w-full flex justify-center">
                        <Image src={'/arnot-condition-example.jpg'} width={1102} height={633} className="rounded-lg" alt="image of patient resource page" />
                    </figure>
                    <p>On top of it, some components contain others as optional sub-components. For example, a Media Carousel can be used standalone or inserted into a Paragraph, an Accordion can contain Download Lists, and so on.</p>
                    <p>The potential combinations are massive. The result is that no two condition pages are the same.</p>
                    <h3>Front-End Code</h3>
                    <p>The front-end code makes REST API calls to fetch the condition data from the headless CMS. The data is organized into an array of components. Because of this, the front-end can map the data to matching UI components to know how the content should be displayed, and in what order.</p>
                    <p>If the CMS is updated, the front-end will get the new data at the next API call and display it accordingly. Each time the web page loads, the front-end UI is being determined - nothing is hard coded.</p>
                    <p></p>
                    <div className="mt-8 not-prose flex flex-col md:flex-row items-start gap-6 w-full p-8 bg-slate-800/30 rounded-xl">
                        <div className="w-12">
                            <FaInfoCircle className="text-4xl" />
                        </div>
                        <div className="w-full">
                            <p>The code in this tutorial uses NEXT.js and React.js. The headless CMS data is mocked as a parsed JSON response.</p>
                        </div>
                    </div>
                    <h4>Steps</h4>
                    <ol>
                        <li>Create a file called, <code>Paragraph.jsx</code> in the /components folder.</li>
                        <li>Copy the code below and paste it into the new component file. Note, if using VS Code, press Shift+Alt+F for Windows (Cmd+k+f for Mac) to quickly fix any formatting issues.</li>
                            <figure className="mt-4 w-full not-prose">
                                <div className="flex justify-between items-center gap-2">
                                    <h2 className="text-neutral-300 text-sm font-mono px-4 py-3 bg-neutral-900 w-full italic">/src/components/Paragraph.jsx</h2>
                                </div>
                                <div className="overflow-auto border border-white/5 max-h-[384px] bg-neutral-800/20 text-sm">
                                    <pre className="break-normal" dangerouslySetInnerHTML={{ __html: codeComponentParagraph }} />
                                </div>
                            </figure>
                        <li>Create another file called, <code>Hero.jsx</code> in the /components folder.</li>
                        <li>Copy the code below and paste it into the new component file.</li>
                            <figure className="mt-4 w-full not-prose">
                                <div className="flex justify-between items-center gap-2">
                                    <h2 className="text-neutral-300 text-sm font-mono px-4 py-3 bg-neutral-900 w-full italic">/src/components/Hero.jsx</h2>
                                </div>
                                <div className="overflow-auto border border-white/5 max-h-[384px] bg-neutral-800/20 text-sm">
                                    <pre className="break-normal" dangerouslySetInnerHTML={{ __html: codeComponentHero }} />
                                </div>
                            </figure>
                        <li>Create a file called, <code>Theme.js</code> in the /components folder.</li>
                        <li>Copy the code below and pase it into the new Theme file. This file contains a <code>COMPONENTS</code> object that lists all of the available components.</li>
                            <figure className="mt-4 w-full not-prose">
                                <div className="flex justify-between items-center gap-2">
                                    <h2 className="text-neutral-300 text-sm font-mono px-4 py-3 bg-neutral-900 w-full italic">/src/components/Theme.js</h2>
                                </div>
                                <div className="overflow-auto border border-white/5 max-h-[384px] bg-neutral-800/20 text-sm">
                                    <pre className="break-normal" dangerouslySetInnerHTML={{ __html: codeTheme }} />
                                </div>
                            </figure>
                        <li>In the page file for the project, copy and paste the code below (note, this example uses the homepage, or <code>index.js)</code>.</li>
                            <figure className="mt-4 w-full not-prose">
                                <div className="flex justify-between items-center gap-2">
                                    <h2 className="text-neutral-300 text-sm font-mono px-4 py-3 bg-neutral-900 w-full italic">/src/pages/index.js</h2>
                                </div>
                                <div className="overflow-auto border border-white/5 max-h-[384px] bg-neutral-800/20 text-sm">
                                    <pre className="break-normal" dangerouslySetInnerHTML={{ __html: codePage }} />
                                </div>
                            </figure>
                    </ol>
                </div>

            </article>
        </div>
    )
}

export async function getStaticProps() {

    const shiki = await import("shiki");
    const highlighter = await shiki.getHighlighter({
        theme: "dark-plus"
    });

    const codeComponentParagraph = `
    function Paragraph(props){

        const { body } = props;
    
        return(
            <section>
                <p>{ body }</p>
            </section>
        )
    }
    `

    const codeComponentHero = `
    export default function Hero(props){

        const { title, subtitle, imageURL } = props;
    
        return(
            <section>
                <div>
                    <h2>{ title }</h2>
                    <h4>{ subtitle }</h4>
                </div>
                <div>
                    <img src={imageURL} alt="image hosted by CMS">
                </div>
            </section>
        )
    }
    `

    const codeTheme = `
    import Hero from './Hero'
    import Paragraph from './Paragraph'

    // A list of all potential components that could be displayed.
    const COMPONENTS = {
        Hero: Hero,
        Paragraph: Paragraph,
    }
    `

    const codePage = `
    import { COMPONENTS } from '../components/Theme'
       
    // A built-in NEXT.js function
    // Used to statically render data on the server.
    // Typically used to fetch and revalidate API data.
    export async function getStaticProps() {
    
        /*
        **  Make an API call to your CMS.
        **  Below is an example, parsed response.
        */
        const apiResponse = [
            {
                id: 0,
                component: 'Hero_Component',
                title: 'Hero Title',
                subtitle: 'Subtitle',
                imageURL: 'Image',
            },
            {
                id: 1,
                component: 'Paragraph_Component',
                body: 'Paragraph'
            },
        ];
    
        /* 
        **  Map CMS component name to front-end component name.
        **  Normalize the data for your component props.
        */
        const normalizedData = apiResponse.map((item) => {
            switch(item.component) {
                case 'Hero_Component':
                    return {
                        component: 'Hero',
                        id: item.id,
                        title: item.title,
                        subtitle: item.subtitle,
                        imageURL: item.imageURL,
                    }
                case 'Paragraph_Component':
                    return {
                        component: 'Paragraph',
                        id: item.id,
                        body: item.body,
                    }
                default: return [];
            }
        });
    
        return {
            props: {
                data: normalizedData,
            }
        }
    }

    // The main function used to display all page content.
    export default function Home({ data }) {
    
        // Map the component name to the component function
        // and then pass in all associated props.
        const getComponent = (item) => {
            if(typeof COMPONENTS[item.component] !== 'undefined') {
                const Component = COMPONENTS[item.component]
                return <Component {...item} />
            } else {
                return (<></>)
            }
        }
    
        // Create an array of front-end components from the data prop.
        // This array will be used to display the page UI.
        const components = data.map((item) => {
            return getComponent(item)
        })
    
        // The array of components are displayed in order.
        return (
            <main>
                {
                    components.map((component, index) => (
                        <div key={index}>
                            { component }
                        </div>
                    ))
                }
            </main>
        )
    }
    `

    return {
        props: {
            codeComponentParagraph: highlighter.codeToHtml(codeComponentParagraph, { lang: 'js' }),
            codeComponentHero: highlighter.codeToHtml(codeComponentHero, { lang: 'js' }),
            codeTheme: highlighter.codeToHtml(codeTheme, { lang: 'js' }),
            codePage: highlighter.codeToHtml(codePage, { lang: 'js' }),

        }
    }
}
