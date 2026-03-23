import '../styles/index.css'

export const metadata = {
  title: 'Mozaic — Build. Fix. Enhance. Modernize.',
  description:
    'Mozaic is the agentic SDLC platform where enterprise teams define requirements, fix bugs, deliver enhancements, and inject AI into legacy systems — without writing code.',
  openGraph: {
    title: 'Mozaic — Build. Fix. Enhance. Modernize.',
    description:
      'Mozaic is the agentic SDLC platform where enterprise teams define requirements, fix bugs, deliver enhancements, and inject AI into legacy systems — without writing code.',
    type: 'website',
  },
  icons: {
    icon: '/favicon-32x32.png',
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div id="root">
          {children}
        </div>
      </body>
    </html>
  )
}
