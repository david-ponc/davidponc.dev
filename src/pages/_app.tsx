import '~/styles/globals.css';

import type { AppProps } from 'next/app';

import { ColorModeContextDynamicProvider } from '~/contexts/color-mode-context';

function App({ Component, pageProps }: AppProps) {
	return (
		<ColorModeContextDynamicProvider>
			<Component {...pageProps} />
		</ColorModeContextDynamicProvider>
	);
}

export default App;
