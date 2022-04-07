import { Head, Html, Main, NextScript } from 'next/document';

import getInitialColorMode from '~/libs/initial-color-mode';

export default function Document() {
	return (
		<Html>
			<Head>
				<script
					dangerouslySetInnerHTML={{
						__html: `
						(function() {
							${getInitialColorMode.toString()}
							const colorMode = getInitialColorMode();
							document.documentElement.dataset.colorMode = colorMode;
						})();
					`,
					}}
				></script>
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
