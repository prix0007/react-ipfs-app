import React from "react";
import "./SearchMenuFilter.scss";

import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { Typography } from "@material-ui/core";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Checkbox from "@material-ui/core/Checkbox";
import Avatar from "@material-ui/core/Avatar";
import Chip from "@material-ui/core/Chip";
import Slider from "@material-ui/core/Slider";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";

import "./SelectListMenu";
import SelectListMenu from "./SelectListMenu";

const genres = [
  "Adventure",
  "Action",
  "Comedy",
  "Drama",
  "Slice of Life",
  "Fantasy",
  "Magic",
  "Supernatural",
  "Horror",
  "Mystery",
  "Psychological",
  "Romance",
  "Sci-Fi",
  "Cyberpunk",
  "Game",
  "Ecchi",
  "Demons",
  "Harem",
  "Josei",
  "Martial Arts",
  "Kids",
  "Historical",
  "Hentai",
  "Isekai",
  "Military",
  "Mecha",
  "Music",
  "Parody",
  "Police",
  "Post-Apocalyptic",
  "Reverse Harem",
  "School",
  "Seinen",
  "Shoujo",
  "Shoujo-ai",
  "Shounen",
  "Shounen-ai",
  "Space",
  "Sports",
  "Super Power",
  "Tragedy",
  "Vampire",
  "Yuri",
  "Yaoi",
];

const types = ["TV", "OVA", "Movie", "Special"];

const rating = ["10: 💫💫💫💫💫", "9: 💫💫💫💫", "8: 💫💫💫💫", "7: 💫💫💫"];

const SearchMenuFilters = ({ actionFilter }) => {
  const [activeGenres, setActiveGenres] = React.useState([]);
  const [year, setYear] = React.useState([2000, 2018]);
  const [status, setStatus] = React.useState("airing");
  const [typeIndex, setTypeIndex] = React.useState(0);
  const [ratingIndex, setRatingIndex] = React.useState(0);

  const handleStatusChange = (event) => {
    setStatus(event.target.value);
  };

  const handleYearChange = (event, newValue) => {
    setYear(newValue);
  };

  const addGenre = (genre) => {
    setActiveGenres([...activeGenres, genre]);
  };

  const removeGenre = (genre) => {
    const newGenres = activeGenres.filter((gx) => gx !== genre);
    setActiveGenres([...newGenres]);
  };

  const toggleGenre = (genre) => {
    activeGenres.includes(genre) ? removeGenre(genre) : addGenre(genre);
  };

  return (
    <Grid container className="searchMenu">
      <Grid item xs={12}>
        <Grid container>
          <Grid item xs={12} sm={6}>
            <Grid container className="searchMenu__genre">
              <Grid item xs={12} sm={5}>
                <Typography variant="h5" gutterBottom>Genre's 🍀</Typography>
                {activeGenres.length > 0 ? (
                  activeGenres.map((genre, index) => {
                    return (
                      <Chip
                        key={genre + index}
                        icon={
                          <Avatar
                            alt={`Avatar`}
                            src={`https://www.pngfind.com/pngs/m/156-1563751_kawaii-stickers-cute-sticker-chibi-adorable-png-anime.png`}
                          />
                        }
                        className="searchMenu__chip"
                        size="small"
                        label={genre}
                        onDelete={() => removeGenre(genre)}
                        color="primary"
                        variant="outlined"
                      />
                    );
                  })
                ) : (
                  <Typography variant="body1" align="center">
                    No Genre Selected yet..
                  </Typography>
                )}
              </Grid>
              <Grid item xs={12} sm={7}>
                <List dense className="searchMenu__genre_list">
                  {genres.map((genre, index) => {
                    return (
                      <ListItem
                        key={genre + index}
                        button
                        onClick={() => toggleGenre(genre)}
                      >
                        <ListItemAvatar>
                          <Avatar
                            alt={`Avatar`}
                            src={`https://www.pngfind.com/pngs/m/156-1563751_kawaii-stickers-cute-sticker-chibi-adorable-png-anime.png`}
                          />
                        </ListItemAvatar>
                        <ListItemText id={genre + index} primary={genre} />
                        <ListItemSecondaryAction>
                          <Checkbox
                            edge="end"
                            onClick={() => toggleGenre(genre)}
                            checked={activeGenres.includes(genre)}
                            inputProps={{ "aria-labelledby": genre + index }}
                          />
                        </ListItemSecondaryAction>
                      </ListItem>
                    );
                  })}
                </List>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Grid container className="searchMenu__filter_wrappper_col">
              <Typography variant="h6" align="center">
                📆📆 Year of Release 📆📆
              </Typography>
              <Grid container spacing={2}>
                <Grid item>
                  <Typography>1950</Typography>
                </Grid>
                <Grid item xs>
                  <Slider
                    value={year}
                    onChange={handleYearChange}
                    valueLabelDisplay="auto"
                    min={1950}
                    max={2021}
                  />
                </Grid>
                <Grid item>
                  <Typography>2021</Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid container className="searchMenu__filter_wrappper_col">
              <Grid item xs={12}>
                <Typography align="center" variant="h6">
                  ⏰⏰ Status ⏰⏰{" "}
                </Typography>
                <RadioGroup
                  row
                  aria-label="position"
                  name="position"
                  defaultValue="top"
                  value={status}
                  onChange={handleStatusChange}
                >
                  <FormControlLabel
                    value="finished"
                    control={<Radio color="primary" />}
                    label="Finished Airing 🏁🏁"
                    labelPlacement="bottom"
                  />
                  <FormControlLabel
                    value="airing"
                    control={<Radio color="primary" />}
                    label="Currently Airing 🌄🌄"
                    labelPlacement="bottom"
                  />
                  <FormControlLabel
                    value="yet"
                    control={<Radio color="primary" />}
                    label="Yet to Start 🔰🔰"
                    labelPlacement="bottom"
                  />
                </RadioGroup>
              </Grid>
            </Grid>
            <Grid container className="searchMenu__filter_wrappper">
              <Grid item xs={12} sm={6} className="searchMenu__filter_label">
                <Typography variant="body1" style={{ fontWeight: 700 }}>
                📺 Type 📺
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <SelectListMenu
                  options={types}
                  selectedIndex={typeIndex}
                  setSelectedIndex={setTypeIndex}
                />
              </Grid>
            </Grid>
            <Grid container className="searchMenu__filter_wrappper">
              <Grid item xs={12} sm={6} className="searchMenu__filter_label">
                <Typography variant="body1" style={{ fontWeight: 700 }}>
                ⭐⭐ Rating 🌟🌟
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <SelectListMenu
                  options={rating}
                  selectedIndex={ratingIndex}
                  setSelectedIndex={setRatingIndex}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} className="searchMenu__actions">
        <Button variant="contained" color="primary" onClick={actionFilter}>
          Filter
        </Button>
      </Grid>
    </Grid>
  );
};

export default SearchMenuFilters;
