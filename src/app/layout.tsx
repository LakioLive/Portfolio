import localFont from "next/font/local";
import type { Metadata } from "next";
import "./globals.scss";

const myFont = localFont({
    src: [
        // {
        //     path: "../../public/fonts/Mariupol-Symbols.otf",
        //     weight: "500",
        //     style: "normal",
        // },
        {
            path: "../../public/fonts/Mariupol-Bold.otf",
            weight: "700",
            style: "normal",
        },
        {
            path: "../../public/fonts/Mariupol-Medium.otf",
            weight: "600",
            style: "normal",
        },
        {
            path: "../../public/fonts/Mariupol-Regular.otf",
            weight: "500",
            style: "normal",
        },
    ],
});

export const metadata: Metadata = {
    title: "Portfolio LakioLive",
    description: "",
    icons: "/icon.ico",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={myFont.className}>
            <body>{children}</body>
        </html>
    );
}
