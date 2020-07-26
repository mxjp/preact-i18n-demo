import { h, render } from "preact";
import { Language } from "@mpt/preact-i18n";
import { App } from "./app";
import { i18n } from "./i18n";

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
