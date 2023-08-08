import '~/styles/globals.css';

import Loglib from '@loglib/tracker/react';
import type { AppProps } from 'next/app';

import { ColorModeContextDynamicProvider } from '~/contexts/color-mode-context';

function App({ Component, pageProps }: AppProps) {
	return (
		<ColorModeContextDynamicProvider>
			<Component {...pageProps} />
			<Loglib
				config={{
					id: 'davidponc',
					host: 'https://www.loglib.io',
				}}
			/>
		</ColorModeContextDynamicProvider>
	);
}

export default App;
