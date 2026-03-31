import '../globals.css';
import {Open_Sans} from 'next/font/google'

const openSans = Open_Sans({
  subsets: ["latin"]
})

function RootLayout({children}){
    return(
        <html>
            <body className={openSans.className}>
                {children}
            </body>
        </html>
    )
}

export default RootLayout