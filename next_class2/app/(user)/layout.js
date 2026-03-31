import Navigation from "@/components/navigation"
import "../globals.css"
import {Roboto} from 'next/font/google'

const roboto = Roboto({
  subsets: ["latin"]
  
})

export default function RootLayout({children}){
  return(
    <html>
      <body className={roboto.className}>
        <Navigation/>
          {children}
      </body>
    </html>
  )
}