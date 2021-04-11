import '../styles/globals.css';
import Head from 'next/head';
import { ChakraProvider } from '@chakra-ui/react';

function SafeHydrate({ children }) {
	// This prevents the app from rendering on the server
	return (
		<div suppressHydrationWarning>
			{typeof window === 'undefined' ? null : children}
		</div>
	);
}

function App({ Component, pageProps }) {
	return (
		<>
			<Head>
				<title>Cambridge Community Kitchen</title>
				<meta property="og:title" content="Cambridge Community Kitchen" />
				<meta charSet="utf-8" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no, viewport-fit=cover"
				/>
				{/* <link rel="icon" href="/favicon.ico" /> */}
			</Head>
			<SafeHydrate>
				<ChakraProvider>
					<Component {...pageProps} />
				</ChakraProvider>
			</SafeHydrate>
		</>
	);
}

export default App;
