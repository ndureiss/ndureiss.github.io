import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them)
const resources = {
	en: {
		translation: {
			Welcome: "Welcome on Nicolas Dureisseix website",
			WIP: "Work in progress ... Coming soon !",
			Title: "Junior Engineer in Cybersecurity",
			Email: "Send me an email",
			Github: "Explore my Github",
			LinkedIn: "Follow me on LinkedIn",
			RootMe: "See my RootMe profile",
			More: "Learn more",
			Study: "Studies",
			StudyOverview: "Soon graduate of ENSEEIHT (Toulouse, France)",
			Work: "Work Experience",
			WorkOverview: "Freelancer, intern, ...",
			Project: "Projects",
			ProjectOverview: "School or personal projects, ...",
			About: "About me",
			AboutContent: "",
			Age: "years old",
		},
	},
	fr: {
		translation: {
			Welcome: "Bienvenue sur le site de Nicolas Dureisseix",
			WIP: "Travail en cours ...",
			Title: "Ingénieur cybersécurité",
			Email: "Me contacter par mail",
			Github: "Explorer mon Github",
			LinkedIn: "Me suivre sur LinkedIn",
			RootMe: "Voir mon profil RootMe",
			More: "En savoir plus",
			Study: "Études",
			StudyOverview: "Bientôt diplômé ENSEEIHT (Toulouse, France)",
			Work: "Expérience professionelle",
			WorkOverview: "Freelancer, stagiaire, ...",
			Project: "Projets",
			ProjectOverview: "Projets scolaires, personnels, ...",
			About: "À propos",
			AboutContent: "",
			Age: "ans",
		},
	},
};

i18n
	.use(initReactI18next) // passes i18n down to react-i18next
	.init({
		resources,
		lng: "en",

		keySeparator: false, // we do not use keys in form messages.welcome

		interpolation: {
			escapeValue: false, // react already safes from xss
		},
	});

export default i18n;
