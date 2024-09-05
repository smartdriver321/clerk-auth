import type { Metadata } from 'next'
import localFont from 'next/font/local'

import './globals.css'
import { ClerkLoaded, ClerkLoading, ClerkProvider } from '@clerk/nextjs'
import Header from '@/components/Header'
import Loader from '@/components/Loader'

const geistSans = localFont({
	src: './fonts/GeistVF.woff',
	variable: '--font-geist-sans',
	weight: '100 900',
})

const geistMono = localFont({
	src: './fonts/GeistMonoVF.woff',
	variable: '--font-geist-mono',
	weight: '100 900',
})

export const metadata: Metadata = {
	title: 'Clerk Authentication',
	description: 'Clerk Boilerplate for Authentication',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<ClerkProvider>
			<html lang='en'>
				<body
					className={`${geistSans.variable} ${geistMono.variable} antialiased`}
				>
					<ClerkLoading>
						<Loader />
					</ClerkLoading>
					<ClerkLoaded>
						<Header />
						{children}
					</ClerkLoaded>
				</body>
			</html>
		</ClerkProvider>
	)
}
