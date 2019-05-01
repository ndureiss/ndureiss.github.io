import React from "react";
import { Grid } from "@material-ui/core";
import CollapseListItem from "../../Components/CollapseListItem";
import GridItemList from "../../Components/GridItemList";
import { withTranslation } from "react-i18next";
import { commonProps } from "../styles";

// TODO Traduire les listes
const courses1 = t => [
	t("Cryptographie"),
	t("Vulnérabilités logicielles"),
	t("Virus et techniques virales"),
	t("Développement logiciel sécurisé"),
	t("Protection des systèmes d'exploitation"),
];
const courses2 = t => [
	t("Attaques matérielles, composants matériels pour la sécurité"),
	t("Reverse engineering"),
	t("Sécurité des réseaux non filaires"),
	t("Sécurisation des protocoles"),
	t("Architectures réseaux sécurisées"),
];
const courses3 = t => [
	t("Attaques et sécurisation des couches OSI"),
	t("Sécurité dans l'aérospatiale"),
	t("Intrusion Système et Réseaux"),
	t("Gouvernance de la sécurité"),
	t("Écosystème de la sécurité"),
];

class TLSSEC extends React.Component {
	render() {
		const { t } = this.props;
		return (
			<Grid {...commonProps}>
				<Grid item>
					<CollapseListItem text={t("TLS_SEC")} />
				</Grid>
				<Grid item>
					<Grid container>
						<GridItemList list={courses1(t)} size={4} />
						<GridItemList list={courses2(t)} size={4} />
						<GridItemList list={courses3(t)} size={4} />
					</Grid>
				</Grid>
			</Grid>
		);
	}
}

export default withTranslation()(TLSSEC);
