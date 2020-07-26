import { I18n, languageFactory, FetchClient } from "@mpt/preact-i18n";

export const i18n = new I18n({
	languageFactory,
	clients: [
		new FetchClient()
	],
	formatters: new Map([
		["date", (value: Date, lang) => {
			return value.toLocaleDateString(lang.name);
		}]
	]),
	setLangAttribute: true
});

export const T = i18n.T;
export const TX = i18n.TX;
