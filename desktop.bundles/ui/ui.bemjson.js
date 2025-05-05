module.exports = {
	block: 'page',
	title: 'UI',
	favicon: '/favicon.ico',
	head: [
			{ elem: 'meta', attrs: { name: 'description', content: '' } },
			{ elem: 'meta', attrs: { name: 'viewport', content: 'width=device-width, initial-scale=1' } },
			{tag: "link", attrs: { rel: "preconnect", href: "https://fonts.googleapis.com"}},
			{tag: "link", attrs: { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "true"}},
			{tag: "link", attrs: { href: "https://fonts.googleapis.com/css2?family=Allerta+Stencil&display=swap", rel: "stylesheet", content: ""}},
			{ elem: 'css', url: 'ui.min.css' }
	],
	scripts: [{ elem: 'js', url: 'ui.min.js' }],
	mods: { theme: 'main' },
	content: [
			{block: "header"},

			{block: "button", mods: {theme: "primary", size: "m"}, content: "Кнопка"},
			{tag: 'br'},
			{block: "button", mods: {theme: "secondary", size: "m"}, content: "Кнопка"},
			{tag: 'br'},
			{block: "button", mods: {theme: "primary-2", size: "m"}, content: "Кнопка"},
			{tag: 'br'},
			{block: 'button', mods: {view: "arrow", theme: "arrow-primary", direction: "left", size: "m", type: "link"}, url:"#"},
			{tag: 'br'},
			{block: 'button', mods: {view: "arrow", theme: "arrow-secondary", direction: "right", size: "m", type: "link"}, url:"#"},
			{tag: 'br'},
			{block: 'button', mods: {view: "arrow", theme: "arrow-primary", direction: "left", size: "m"}},
			{tag: 'br'},
			{block: 'button', mods: {view: "arrow", theme: "arrow-secondary", direction: "right", size: "m"}},
			{tag: 'br'},
			{block: "cart"},
			{tag: 'br'},
			{block: "pagination"},
			{tag: 'br'},
			{block: "logo"},
			{tag: 'br'},

			
			{block: "footer"}
	]
};
