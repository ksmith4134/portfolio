import { Inter } from 'next/font/google'
import Header from './nav/header'

const inter = Inter({ subsets: ['latin'] })

export default function Layout({ children }) {

    return (
        <div className={`${inter.className} bg-neutral-950`}>
            <Header />
            { children }
        </div>
    )
}
