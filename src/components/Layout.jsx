import { Inter, Merriweather, Roboto_Mono } from 'next/font/google'
import Header from './nav/header'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const robotoMono = Roboto_Mono({ weight: '400', subsets: ['latin'], variable: '--font-roboto-mono' })

export default function Layout({ children }) {

    return (
        <div className={`${inter.variable} ${robotoMono.variable} font-sans relative bg-neutral-950 overflow-hidden`}>
            {/* <div className="w-full h-full absolute top-48 gradient rotate-180"></div> */}
            {/* <Header /> */}
            { children }
        </div>
    )
}
