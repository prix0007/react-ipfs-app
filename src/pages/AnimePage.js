import React from "react";
import "./AnimePage.scss";

import { useLocation } from "react-router-dom";

import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";

import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Chip from "@material-ui/core/Chip";

import EpisodeCard from "../components/EpisodeCard";
import VideoCard from "../components/VideoCard";

const bgImage =
  "https://animecorner.me/wp-content/uploads/2021/01/konosdfa.jpg";

const animeDetails = {
  image:
    "https://m.media-amazon.com/images/M/MV5BZWNiY2IwMGUtYTk1NC00NmE5LWE4NTItYmQyNDJmMGU2MDMwXkEyXkFqcGdeQXVyMzgxODM4NjM@._V1_.jpg",
  animeName: "Horimiya",
  complete: true,
  episode: 12,
  uploader: "Animax",
  genres: ["Slice of Life", "Comedy", "Romance", "School", "Shounen"],
  quality: "480p, 720p, 1080p",
  yearOfRelease: "November 2020",
  yearOfFinishing: "April 2021",
  views: "20M",
  timeStamp: "3 Days Ago",
  uploaderAvatar:
    "https://c0.klipartz.com/pngpicture/581/399/gratis-png-noragami-anime-manga-yato-no-kami-youtube-anime-thumbnail.png",
  description:
    "On the surface, the thought of Kyouko Hori and Izumi Miyamura getting along would be the last thing in people's minds. After all, Hori has a perfect combination of beauty and brains, while Miyamura appears meek and distant to his fellow classmates. However, a fateful meeting between the two lays both of their hidden selves bare. Even though she is popular at school, Hori has little time to socialize with her friends due to housework. On the other hand, Miyamura lives under the noses of his peers, his body bearing secret tattoos and piercings that make him look like a gentle delinquent.",
};

const episodesList = [
  {
    title: "A Tiny Happenstance",
  },
  {
    title: "You Wear More Than One Face",
  },
  {
    title: "That's Why It's Okay",
  },
  {
    title: "Everybody Loves Somebody",
  },
  {
    title: " I Can't Say It Out Loud",
  },
  {
    title: "This Summer's Going to Be a Hot One",
  },
  {
    title: "You're Here, I'm Here",
  },
  {
    title: "The Truth Deception Reveals",
  },
  {
    title: " It's Hard, but Not Impossible",
  },
  {
    title: "Until the Snow Melts",
  },
  {
    title: "It May Seem Like Hate",
  },
  {
    title: "Hitherto, and Forevermore",
  },
  {
    title: "I Would Gift You the Sky",
  },
];

const animePageTheme = createMuiTheme({
  palette: {
    type: "light",
  },
});

const AnimePage = () => {
  const location = useLocation();

  return (
    <ThemeProvider theme={animePageTheme}>
      <Grid
        container
        style={{ background: `url(${bgImage})` }}
        className="animePage"
      >
        <Grid item xs={12} sm={12} md={1} />
        <Grid item xs={12} sm={8} md={10}>
          <Grid container className="animePage__anime_wrapper">
            <Grid item xs={12} sm={12} md={8}>
              <Grid container>
                <Grid item xs={12} sm={12} md={3}>
                  <div className="animePage__anime_cover">
                    <img
                      src={animeDetails.image}
                      alt={animeDetails.animeName}
                    />
                  </div>
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={9}
                  className="animePage__anime_details"
                >
                  <Typography variant="h1" color="textPrimary">
                    {animeDetails.animeName}
                  </Typography>
                  <Typography variant="h6" color="textPrimary" gutterBottom>
                    ホリミヤ
                  </Typography>
                  {animeDetails.genres.map((genre) => {
                    return (
                      <Chip
                        variant="outlined"
                        size="small"
                        label={genre}
                        className="animePage__details_chip"
                      />
                    );
                  })}
                  <Typography variant="body2" color="textPrimary" gutterBottom>
                    {animeDetails.description}
                  </Typography>
                  <Grid container className="animePage__anime_detail_row">
                    <Grid item xs={12} sm={4} md={3}>
                      <Typography
                        color="textPrimary"
                        component="p"
                        className="animePage__anime_detail_label"
                      >
                        Resolution 💠
                      </Typography>
                    </Grid>
                    <Grid item xs={12} sm={8} md={9}>
                      <Typography color="textPrimary">
                        {animeDetails.quality}
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid container className="animePage__anime_detail_row">
                    <Grid item xs={12} sm={4} md={3}>
                      <Typography
                        color="textPrimary"
                        component="p"
                        className="animePage__anime_detail_label"
                      >
                        Episodes #️⃣
                      </Typography>
                    </Grid>
                    <Grid item xs={12} sm={8} md={9}>
                      <Typography color="textPrimary">
                        {animeDetails.episode} episodes
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid container className="animePage__anime_detail_row">
                    <Grid item xs={12} sm={4} md={3}>
                      <Typography
                        color="textPrimary"
                        component="p"
                        className="animePage__anime_detail_label"
                      >
                        Timeline ⌛⏳
                      </Typography>
                    </Grid>
                    <Grid item xs={12} sm={8} md={9}>
                      <Typography color="textPrimary">
                        {animeDetails.yearOfRelease} to{" "}
                        {animeDetails.yearOfFinishing}
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid container>
                <Paper className="animePage__episodes_title">
                  <Typography>Episode's - ({animeDetails.episode})</Typography>
                </Paper>
                <Grid item xs={12}>
                  <Grid container className="animePage__episodes_wrapper">
                    {episodesList.map((episode, index) => {
                      return (
                        <EpisodeCard
                          key={episode.title}
                          imageUrl={bgImage}
                          episode={index + 1}
                          title={episode.title}
                        />
                      );
                    })}
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
              <Typography color="textPrimary" align="center" variant="h6">
                Recommended Anime's
              </Typography>
              {[0, 1, 2].map((item) => {
                return (
                  <VideoCard
                    key={animeDetails.animeName + item}
                    image={animeDetails.image}
                    title={animeDetails.animeName}
                    uploader={animeDetails.uploader}
                    uploaderAvatar={animeDetails.uploaderAvatar}
                    views={animeDetails.views}
                    timeStamp={animeDetails.timeStamp}
                    className="animePage__recommended_tile"
                  />
                );
              })}
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={12} md={1} />
      </Grid>
    </ThemeProvider>
  );
};
export default AnimePage;
