import React from "react";

import "./VideoCard.scss";

import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { Avatar } from "@material-ui/core";

import { useHistory } from 'react-router-dom';

const VideoCard = ({
  image,
  title,
  uploader,
  uploaderAvatar,
  views,
  timeStamp,
  className
}) => {

  let history = useHistory();
  return (
      <Card className={`videoCard ${className}`} onClick={() => {history.push(`/anime/${title}`)}}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt={title}
            height="200"
            image={image}
            title={title}
          />
          <CardContent className="videoCard__details">
            <Avatar src={uploaderAvatar}>{uploader[0]}</Avatar>
            <div className="videoCard__text">
              <Typography
                gutterBottom
                variant="body1"
                component="p"
                className="videoCard__title"
              >
                {title.substring(0, 40)}
                {title.length > 40 && "..."}
              </Typography>
              <Typography gutterBottom variant="body2" component="p">
                {uploader}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {views} &#8226; {timeStamp}
              </Typography>
            </div>
          </CardContent>
        </CardActionArea>
      </Card>
  );
};

export default VideoCard;
