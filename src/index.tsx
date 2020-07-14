import { h, render } from "preact";
import { I18n, FetchClient, Language, languageFactory } from "@mpt/preact-i18n";
import { App } from "./app";

const i18n = new I18n({
	languageFactory,
	clients: [
		new FetchClient()
	]
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
