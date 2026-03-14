import '../styles/index.css'

export const metadata = {
  title: 'Mozaic - Data Engineering Agent for Healthcare',
  description:
    'Mozaic - Data Engineering Agent for Healthcare. Data Management and Governance for Healthcare Enterprise.',
  openGraph: {
    title: 'Mozaic - Data Engineering Agent for Healthcare',
    description: 'Data Management and Governance for Healthcare Enterprise.',
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
