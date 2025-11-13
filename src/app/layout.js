// "use client"
import { Geist, Geist_Mono, Sansita_Swashed, Montez } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const sansitaSwashed = Sansita_Swashed({
  variable: "--font-sansita-swashed",
  subsets: ["latin"],
});

const monda = Montez({
  variable: "--font-monda",
  subsets: ["latin"],
  weight: ["400"]
})

export const metadata = {
  title: "Kingsley Udochukwu",
  description: "A highly detailed portfolio of Kingsley Udochukwu",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      
        <body
          className={`${geistSans.variable} 
          ${geistMono.variable} ${sansitaSwashed.variable} ${monda.variable} antialiased`}
        >
        

          <ThemeProvider attribute="class" enableSystem={true} defaultTheme="system">
            {children}
          </ThemeProvider>
          
        </body>
    </html>
  );
}
