/** @type {import('@docusaurus/types').DocusaurusConfig} */
const { themes } = require('prism-react-renderer')
module.exports = {
	title: 'Publicodes',
	tagline: "Le langage pour les algorithmes d'intérêt public",
	url: 'https://publi.codes',
	baseUrl: '/',
	onBrokenLinks: 'warn', // TODO: use 'throw',
	onBrokenMarkdownLinks: 'warn',
	favicon: 'img/favicon-32x32.png',
	organizationName: 'betagouv',
	projectName: 'publicodes',
	themeConfig: {
		navbar: {
			title: 'Publicodes',
			logo: {
				alt: 'Publicodes logo',
				src: 'img/logo-publicodes.svg',
			},
			items: [
				{
					type: 'doc',
					docId: 'principes-de-base',
					position: 'left',
					label: 'Documentation',
				},
				{
					to: 'studio',
					position: 'left',
					label: 'Bac à sable',
				},
				{
					href: 'https://github.com/publicodes/publicodes',
					label: 'GitHub',
					position: 'right',
				},
			],
		},
		prism: {
			// Unfortunately, I can't find a good dark theme for `yaml` snippets. The
			// `themes/github` works well with different colors for keys and values
			// but it doesn't exist in dark mode variant in the default list.
			theme: themes.palenight,
			additionalLanguages: ['json'],
		},
		footer: {
			links: [
				{
					title: 'À propos',
					items: [
						{
							label: 'Statistiques de consultation',
							to: '/statistiques',
						},
					],
				},
			],
		},
	},
	presets: [
		[
			'@docusaurus/preset-classic',
			{
				docs: {
					sidebarPath: require.resolve('./sidebars.js'),
					editUrl:
						'https://github.com/betagouv/publicodes/edit/master/website/',
					remarkPlugins: [
						[require('@docusaurus/remark-plugin-npm2yarn'), { sync: true }],
						require('./src/plugins/match-publicodes.cjs'),
					],
				},
				theme: {
					customCss: require.resolve('./src/css/custom.css'),
				},
				pages: {
					remarkPlugins: [
						require('@docusaurus/remark-plugin-npm2yarn'),
						require('./src/plugins/match-publicodes.cjs'),
					],
				},
			},
		],
	],
	scripts: [
		'plausible',
		{
			src: 'https://plausible.io/js/plausible.js',
			'data-domain': 'publi.codes',
			defer: true,
		},
	],
	plugins: [
		require.resolve('./src/plugins/studio-route.cjs'),
		'@docusaurus/theme-live-codeblock',
	],
}
