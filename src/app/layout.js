// src/app/layout.js
import NavBar from "./Components/NavBar/NavBar";
import "./globals.css"

export const metadata = {
    title: "Joey Scott Schronce Portfolio",
    description: "Portfolio showcasing my skills, badges, certificates, and projects as a Software Engineer.",
    charset: "UTF-8",
    icons: {
        icon: "/favicon.ico",
    },
};

export const viewport = {
    width: "device-width",
    initialScale: 1.0,
    maximumScale: 1.0,
    userScalable: false,
};

export default function RootLayout({children}) {
    return (
        <html lang="en">
        <body>

        <NavBar/>
        <main>{children}</main>

        <div className="blobs">
            <div className="blobOne blobOneFirst"></div>
            <div className="blobOne blobOneSecond"></div>
            <div className="blobOne blobOneThird"></div>
            <div className="blobOne blobOneFourth"></div>
            <div className="blobTwo blobTwoFirst"></div>
            <div className="blobTwo blobTwoSecond"></div>
            <div className="blobTwo blobTwoThird"></div>
            <div className="blobTwo blobTwoFour"></div>
        </div>

        </body>
        </html>
    );
}

