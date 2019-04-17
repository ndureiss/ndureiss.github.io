import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them)
const resources = {
	en: {
		translation: {
			Welcome: "Welcome on Nicolas Dureisseix website",
			WIP: "Work in progress ... Coming soon !",
		},
	},
	fr: {
		translation: {
			Welcome: "Bienvenue sur le site de Nicolas Dureisseix",
			WIP: "Travail en cours ...",
		},
	},
};

i18n
	.use(initReactI18next) // passes i18n down to react-i18next
	.init({
		resources,
		lng: "fr",

		keySeparator: false, // we do not use keys in form messages.welcome

		interpolation: {
			escapeValue: false, // react already safes from xss
		},
	});

export default i18n;
