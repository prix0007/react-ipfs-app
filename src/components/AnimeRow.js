import React from "react";
import Grid from "@material-ui/core/Grid";

import "./AnimeRow.scss";
import { Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";

import CheckCircleIcon from "@material-ui/icons/CheckCircle";

import { Link } from "react-router-dom";

const AnimeRow = ({
  image,
  animeName,
  completed,
  episodes,
  yearOfRelease,
  yearOfFinishing,
  quality,
  description,
}) => {
  return (
    <Grid container className="animeRow">
      <Grid item xs={12} sm={4} className="animeRow__cover_wrapper">
        <img src={image} alt={animeName} className="animeRow__cover" />
      </Grid>
      <Grid item xs={12} sm={7} className="animeRow__details">
        <div className="animeRow__details_title">
          <Typography variant="h5" component="h5">
            {animeName}
          </Typography>
          {completed && <CheckCircleIcon style={{ color: "green" }} />}
        </div>
        <Typography gutterBottom>{episodes} Episodes</Typography>
        <Typography gutterBottom>Resolution - {quality}</Typography>
        {yearOfRelease && (
          <Typography gutterBottom variant="caption">
            {yearOfRelease} - {yearOfFinishing}
          </Typography>
        )}
        <Typography varaint="body2">
          {description.substring(0, 500)}
          {description.length > 120 && <Link to="/"> read more.</Link>}
        </Typography>
        <div className="animeRow__actions">
          <Button variant="contained" color="primary">
            Watch Now
          </Button>
          <Button
            variant="contained"
            color="primary"
            className="save_to_watchlist"
          >
            Save to Watchlist
          </Button>
        </div>
      </Grid>
      <Grid item xs={12} sm={1} />
    </Grid>
  );
};

export default AnimeRow;
