import React from "react";
import {
  Link,
  ListItem,
  ListItemIcon,
  Tooltip
} from "@material-ui/core";
import { withRouter } from "react-router-dom";

class MenuIcon extends React.Component {
  render() {
    const { link, tooltip, Icon } = this.props;
    return (
      <Link href={link}>
        <ListItem button>
          <Tooltip title={tooltip} placement="right">
            <ListItemIcon >
              <Icon fontSize="large" {...this.props}/>
            </ListItemIcon>
          </Tooltip>
        </ListItem>
      </Link>
    )
  }
}

export default withRouter(MenuIcon);