import React from "react";
import { Grid } from "@material-ui/core";
import GridItemList from "../../Components/GridItemList";
import CollapseListItem from "../../Components/CollapseListItem";
import { withTranslation } from "react-i18next";
import { commonProps } from "../styles";

// TODO Traduire les listes
const firstYearCourses1 = t => [
	t("Architecture des ordinateurs 1"),
	t("Programmation Impérative"),
	t("Programmation Fonctionnelle"),
	t("Outils Mathématiques pour l'Informatique"),
	t("Intégration et Analyse Hilbertienne"),
];
const firstYearCourses2 = t => [
	t("Système d'Exploitation Centralisé"),
	t("Programmation Orientée Objet"),
	t("Probabilités et Statistiques"),
	t("Télécommunication et Réseaux"),
	t("Optimisation et Algèbre Linéaire Numérique"),
];
const firstYearCourses3 = t => [
	t("Droit de l'Informatique"),
	t("Organisation et Structuration des Entreprises"),
	t("Gestion Comptable et Financière"),
	t("Langues (Anglais, Allemand)"),
	t("Éducation Physique et Sportive"),
];

const secondYearCourses1 = t => [
	t("Génie du Logiciel et des Systèmes"),
	t("Systèmes Concurrents"),
	t("Architecture des Ordinateurs 2"),
	t("Intergiciels"),
	t("Sémantique et Traduction des Langages"),
	t("Optimisation"),
];
const secondYearCourses2 = t => [
	t("Bases de Données"),
	t("Recherche Opérationnelle"),
	t("Contexte Économique et Management"),
	t("Graphes"),
	t("Systèmes Cyber-Physiques"),
	t("Méthodes Formelles"),
];
const secondYearCourses3 = t => [
	t("Simulation de Gestion des Entreprises"),
	t("Système Temps Réel et Multimédia"),
	t("Langues (Anglais, Allemand)"),
	t("Éducation Physique et Sportive"),
	t("Droit Social"),
];

class EngineeringSchool extends React.Component {
	state = {
		firstOpen: false,
		secondOpen: false,
	};

	firstHandleClick = () => {
		this.setState(state => ({ firstOpen: !state.firstOpen }));
	};

	secondHandleClick = () => {
		this.setState(state => ({ secondOpen: !state.secondOpen }));
	};

	render() {
		const { t } = this.props;
		const { firstOpen, secondOpen } = this.state;
		return (
			<Grid {...commonProps}>
				<Grid item>
					<CollapseListItem
						text={t("IMA")}
						caption={`${t("FirstYear")} : `}
						onClick={this.firstHandleClick}
						open={firstOpen}
					>
						<GridItemList list={firstYearCourses1(t)} size={4} />
						<GridItemList list={firstYearCourses2(t)} size={4} />
						<GridItemList list={firstYearCourses3(t)} size={4} />
					</CollapseListItem>
				</Grid>
				<Grid item>
					<CollapseListItem
						text={`${t("IMA")}, ${t("IMAOpt")}`}
						caption={`${t("SecondYear2")} : `}
						onClick={this.secondHandleClick}
						open={secondOpen}
					>
						<GridItemList list={secondYearCourses1(t)} size={4} />
						<GridItemList list={secondYearCourses2(t)} size={4} />
						<GridItemList list={secondYearCourses3(t)} size={4} />
					</CollapseListItem>
				</Grid>
				<Grid item>
					<CollapseListItem
						text={t("TLSSEC")}
						caption={`${t("ThirdYear")} : `}
					/>
				</Grid>
			</Grid>
		);
	}
}

export default withTranslation()(EngineeringSchool);
