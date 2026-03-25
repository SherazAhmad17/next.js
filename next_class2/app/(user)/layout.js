import Navigation from "@/components/navigation"
import "../globals.css"

export default function RootLayout({children}){
  return(
    <html>
      <body>
        <Navigation/>
          {children}
      </body>
    </html>
  )
}