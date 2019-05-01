import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them)
const resources = {
	en: {
		translation: {
			Welcome: "Welcome on Nicolas Dureisseix website",
			WIP: "Work in progress ... Coming soon !",
			Title: "Student in IT Security",
			Email: "Send me an email",
			Github: "Explore my Github",
			LinkedIn: "Follow me on LinkedIn",
			RootMe: "See my RootMe profile",
			More: "Learn more",
			GoBack: "Go back",
			Study: "Studies",
			StudyOverview: "Soon graduate of ENSEEIHT (Toulouse, France)",
			Work: "Work Experience",
			WorkOverview: "Freelancer, intern, ...",
			Project: "Projects",
			ProjectOverview: "School or personal projects, ...",
			About: "About me",
			AboutContent: "",
			Age: "years old",
			Live: "Live in",
			Language: "Language",
			French: "French",
			MotherTongue: "Mother-tongue",
			English: "English",
			Advanced: "Advanced",
			German: "German",
			WorkingPro: "Working proficiency",
			Master:
				"Master of Science in Security of Information Systems and Networks",
			Engineer: "Engineer Degree",
			Prepa:
				"Undergraduate courses to prepare nationwide competitive exams in sciences",
			Bac: "High-School Degree",
			BacOpt: "Mathematics option",
			BacHonors: "Obtained with honors",
			FirstYear: "First year",
			SecondYear: "Second year",
			SecondYear2: "Second year",
			ThirdYear: "Third year",
			PrepaSup: "Maths, Physics and Engineer Science option",
			PrepaSpe: "Physics and Engineer Science option",
			IMA: "Computer Science and Applied Mathematics",
			IMAOpt: "Software Systems option",
			TLSSEC: "TLS-SEC training course, see above",
			TLS_SEC:
				"Half-year training about cyber-security (shared between ENAC, ENSEEIHT and Toulouse INSA engineering schools)",
		},
	},
	fr: {
		translation: {
			Welcome: "Bienvenue sur le site de Nicolas Dureisseix",
			WIP: "Travail en cours ...",
			Title: "Étudiant sécurité informatique",
			Email: "Me contacter par mail",
			Github: "Explorer mon Github",
			LinkedIn: "Me suivre sur LinkedIn",
			RootMe: "Voir mon profil RootMe",
			More: "En savoir plus",
			GoBack: "Revenir",
			Study: "Études",
			StudyOverview: "Bientôt diplômé ENSEEIHT (Toulouse, France)",
			Work: "Expérience professionelle",
			WorkOverview: "Freelancer, stagiaire, ...",
			Project: "Projets",
			ProjectOverview: "Projets scolaires, personnels, ...",
			About: "À propos",
			AboutContent: "",
			Age: "ans",
			Live: "",
			Language: "Langues",
			French: "Français",
			MotherTongue: "Langue maternelle",
			English: "Anglais",
			Advanced: "Courant",
			German: "Allemand",
			WorkingPro: "Bonnes notions",
			Master: "Master 2 Sécurité des Systèmes d'Informations et des Réseaux",
			Engineer: "Diplôme d'ingénieur",
			Prepa: "Classes Préparatoires de Sciences",
			Bac: "Baccalauréat général",
			BacOpt: "Spécialité Mathématiques",
			BacHonors: "Mention Très Bien",
			FirstYear: "Première année",
			SecondYear: "Seconde année",
			SecondYear2: "Deuxième année",
			ThirdYear: "Troisième année",
			PrepaSup:
				"Filière Mathématiques, Physiques et Sciences de l'Ingénieur",
			PrepaSpe: "Filière Physiques, Sciences de l'Ingénieur (en spécialité)",
			IMA: "Informatique et Mathématiques Appliquées",
			IMAOpt: "spécialité Logiciels",
			TLSSEC: "Formation TLS-SEC, voir ci-dessus",
			TLS_SEC:
				"Formation de sécurité des systèmes d'informations et des réseaux (commune à l'ENAC, l'ENSEEIHT et l'INSA Toulouse)",
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
