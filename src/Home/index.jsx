import React from "react";
import Card from "../Components/Card";
import { withMenu } from "../EnrichmentMenu";
import { withTranslation } from "react-i18next";
import studies from "../img/studies.jpg";
import projects from "../img/projects.jpg";
import work from "../img/work.jpg";
import { Grid } from "@material-ui/core";

const cardItem = {
	item: true,
	xs: 12,
};

const smallCardItem = {
	...cardItem,
	sm: 6,
	md: 4,
};

class Home extends React.Component {
	render() {
		const { t } = this.props;
		return (
			<Grid container justify="space-around">
				<Grid {...cardItem}>
					<Card title={t("About")} content={t("AboutContent")} />
				</Grid>
				<Grid {...smallCardItem}>
					<Card
						title={t("Study")}
						img={studies}
						content={t("StudyOverview")}
					/>
				</Grid>
				<Grid {...smallCardItem}>
					<Card title={t("Work")} img={work} content={t("WorkOverview")} />
				</Grid>
				<Grid {...smallCardItem}>
					<Card
						title={t("Project")}
						img={projects}
						content={t("ProjectOverview")}
					/>
				</Grid>
			</Grid>
		);
	}
}

export default withMenu(withTranslation()(Home));
