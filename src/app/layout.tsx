import './globals.css'
import { Koulen } from 'next/font/google'

const koulen = Koulen({
  weight: '400',
  subsets: ['khmer']
});

export const metadata = {
  title: 'Jean \'s Portfolio ',
  description: 'Latest version of Jean \'s portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={koulen.className}>{children}</body>
    </html>
  )
}
