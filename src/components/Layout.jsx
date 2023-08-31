import { Inter, Merriweather, Roboto_Mono } from 'next/font/google'
import Header from './nav/header'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const robotoMono = Roboto_Mono({ weight: '400', subsets: ['latin'], variable: '--font-roboto-mono' })

export default function Layout({ children }) {

    return (
        <div className={`${inter.variable} ${robotoMono.variable} font-sans relative z-0 bg-neutral-950`}>
            <div className="absolute z-10 -top-10 left-[25%] right-[25%] gradient rotate-180"></div>
            <Header />
            { children }
        </div>
    )
}
