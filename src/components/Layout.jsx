import { Inter } from 'next/font/google'
import Header from './nav/header'

const inter = Inter({ subsets: ['latin'] })

export default function Layout({ children }) {

    return (
        <div className={`${inter.className} relative z-0`}>
            <div className="absolute z-10 -top-10 left-[25%] right-[25%] gradient rotate-180"></div>
            <Header />
            { children }
        </div>
    )
}
