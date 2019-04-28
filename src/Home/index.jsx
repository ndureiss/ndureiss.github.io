import React from "react";
import Card from "../Components/Card";
import { withMenu } from "../EnrichmentMenu";
import { withTranslation } from "react-i18next";
import studies from "../img/studies.jpg";
import projects from "../img/projects.jpg";
import work from "../img/work.jpg";
import { Grid } from "@material-ui/core";
import About from "./Components/About";

const cardItem = {
	item: true,
	xs: 12,
};

const smallCardItem = {
	...cardItem,
	sm: 12,
	md: 6,
	lg: 4,
};

class Home extends React.Component {
	render() {
		const { t } = this.props;
		return (
			<Grid container justify="space-around">
				<Grid {...cardItem}>
					<Card CardContent={About} />
				</Grid>
				<Grid {...smallCardItem}>
					<Card
						title={t("Study")}
						img={studies}
						content={t("StudyOverview")}
						link="/studies"
					/>
				</Grid>
				<Grid {...smallCardItem}>
					<Card
						title={t("Work")}
						img={work}
						content={t("WorkOverview")}
						link="/work"
					/>
				</Grid>
				<Grid {...smallCardItem}>
					<Card
						title={t("Project")}
						img={projects}
						content={t("ProjectOverview")}
						link="/projects"
					/>
				</Grid>
			</Grid>
		);
	}
}

export default withMenu(withTranslation()(Home));
