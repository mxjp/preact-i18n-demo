import { h, render } from "preact";
import { I18n, FetchClient, Language, plural_en, plural_de } from "@mpt/preact-i18n";
import { App } from "./app";

const plurals: { [name: string]: Language.PluralProcessor } = {
	de: plural_de,
	en: plural_en
};

const i18n = new I18n({
	clients: [
		new FetchClient()
	],
	languageFactory: (name, resources?: Language.Resources) => {
		return new Language({ name, resources, pluralProcessor: plurals[name] });
	}
});

Promise.all([
	new Promise(r => window.addEventListener("load", r)),
	i18n.setLanguageAuto(["en", "de"], "en")
]).then(() => {
	render(
		<Language.Provider use={i18n}>
			<App />
		</Language.Provider>,
		document.body
	);
});
