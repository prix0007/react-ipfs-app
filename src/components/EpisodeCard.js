import React from "react";

import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import CardActionArea from '@material-ui/core/CardActionArea';

import "../widgets/ToolTipIconButton";
import { makeStyles } from "@material-ui/core/styles";
import ToolTipIconButton from "../widgets/ToolTipIconButton";

import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({ 
  root: {
    maxWidth: 345,
    minWidth: 300,
    margin: 10,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
}));

const EpisodeCard = ({ imageUrl, episode, title }) => {
  const classes = useStyles();
  const history = useHistory();
  return (
    <Card className={classes.root} button>
      <CardActionArea onClick={() => {history.push(`/player/${title}`)}}>
        <CardMedia className={classes.media} image={imageUrl} title={title} />
        <CardContent>
          <Typography variant="body2" color="textPrimary" component="p">
            {episode} - {title}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions disableSpacing>
        <ToolTipIconButton tooltipText="Add to Favorite">
          <FavoriteIcon />
        </ToolTipIconButton>
        <ToolTipIconButton tooltipText="Share">
          <ShareIcon />
        </ToolTipIconButton>
      </CardActions>
    </Card>
  );
};

export default EpisodeCard;
