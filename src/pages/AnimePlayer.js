import React from 'react';
import "./AnimePlayer.scss";

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Avatar from "@material-ui/core/Avatar";
import ReactPlayer from 'react-player/lazy';

import EpisodeCard from '../components/EpisodeCard';

const bgImage = "https://lostinanime.com/wp-content/uploads/2021/02/Horimiya-06-32.jpg";

const episodeDetails = {
  episode: 2,
  uploader: "Animax",
  anime: "Hiromiya",
  title: "A Tiny Happenstance",
  videoUrl: "https://www.youtube.com/watch?v=X9TBnP34JDA"

}

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

const AnimePlayer = () => {

  const playerRef = React.useRef(null);

  const [dimension, setDimension] = React.useState({
    width: "100%",
    height: 360
  })

  const getWidthAndSetHeight = () => {
    console.log('width', playerRef.current ? playerRef.current.offsetWidth : 0);
    if(playerRef.current) {
      const width =  playerRef.current.offsetWidth;
      const height = width * (9/16);
      setDimension({
        width,
        height
      })
    } else {
      setDimension({
        width: 0,
        height: 0
      })
    }
  }

  React.useEffect(() => {
    getWidthAndSetHeight()
  }, [])

  React.useEffect(() => {
    let timeoutId = null;
    const resizeListener = () => {
      // prevent execution of previous setTimeout
      clearTimeout(timeoutId);
      // change width from the state object after 150 milliseconds
      timeoutId = setTimeout(() => getWidthAndSetHeight(), 150);
    };
    // set resize listener
    window.addEventListener('resize', resizeListener);

    // clean up function
    return () => {
      // remove resize listener
      window.removeEventListener('resize', resizeListener);
    }
  });

  return (
    <Grid container className="animePlayer" style={{background: `#CCC`}}>
      <Grid item xs={12} sm={1} />
      <Grid item xs={12} sm={10} className="animePlayer_content"> 
        <Grid container className="animePlayer_head_title">
          <Avatar src="https://e7.pngegg.com/pngimages/176/778/png-clipart-onigiri-sushi-rice-%E4%B8%80%E3%82%B3%E3%83%9E%E6%BC%AB%E7%94%BB-kawai-sushi-smiley-sticker-thumbnail.png" variant="square">
            H
          </Avatar>
          <Typography variant="h5" gutterBottom>{episodeDetails.anime} - {episodeDetails.title}</Typography>
        </Grid>
        <Grid item xs={12}>
          <Grid container ref={playerRef}>
            <ReactPlayer 
              height={dimension.height}
              width={dimension.width}
              url={episodeDetails.videoUrl}
            />
          </Grid>
        </Grid>
        <Paper className="animePage__episodes_tile">
          
          <Typography variant="h6">Episodes</Typography>
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
                  active={index+1 === episodeDetails.episode}
                />
              );
            })}
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} sm={1} />
    </Grid>
  )
}

export default AnimePlayer
