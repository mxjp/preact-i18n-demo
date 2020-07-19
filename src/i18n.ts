import { I18nContext } from "@mpt/preact-i18n";

const { T, TX } = I18nContext.create({
	formatters: new Map([
		["date", (value: Date, lang) => {
			return value.toLocaleDateString(lang.name);
		}]
	])
});

export { T, TX };
