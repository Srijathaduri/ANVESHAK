import { Analytics } from '@vercel/analytics/next'
import type { Metadata } from 'next'
import { IBM_Plex_Sans, Playfair_Display, JetBrains_Mono } from 'next/font/google'
import { AuthProvider } from '@/components/auth-provider'
import './globals.css'

const ibmPlexSans = IBM_Plex_Sans({
  variable: '--font-ibm-plex-sans',
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700'],
})

const playfairDisplay = Playfair_Display({
  variable: '--font-playfair-display',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

const jetbrainsMono = JetBrains_Mono({
  variable: '--font-jetbrains-mono',
  subsets: ['latin'],
  weight: ['400', '500'],
})

export const metadata: Metadata = {
  title: 'NeuralPath — Learn AI from Zero to Mastery',
  description:
    'A curated AI learning hub: what AI is, foundational tools like pandas, NumPy and TensorFlow, deep ML/DL insights, and free-to-affordable roadmaps.',
  generator: 'Kaara',
  icons: {
    icon: '/kaaralogo.jpg',
    apple: '/kaaralogo.jpg',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${ibmPlexSans.variable} ${playfairDisplay.variable} ${jetbrainsMono.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        <AuthProvider>{children}</AuthProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
