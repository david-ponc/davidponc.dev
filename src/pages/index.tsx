import type { NextPage } from 'next';
import Head from 'next/head';

import { HeroSection } from '~/components/sections/hero';

const Home: NextPage = () => {
	return (
		<>
			<Head>
				<title>David Ponce Vargas</title>
				<meta name='description' content='Personal website' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<HeroSection />
		</>
	);
};

export default Home;
