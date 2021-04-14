import React from "react";
import "./Header.scss";

import TextField from "@material-ui/core/TextField";

import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import IconButton from '../widgets/ToolTipIconButton';

import {
   Link
} from 'react-router-dom';

const Header = ({
  sidebar,
  setSidebar
}) => {

  const [inputSearch, setInputSearch] = React.useState("");

  const handleChange = (e) => {
    setInputSearch(e.target.value);
  }

  return (
    <div className="header" style={{background: "white"}}>
      <div className="header__left">
				<IconButton
					tooltipText="Menu"
					onClick={() => {setSidebar(!sidebar)}}
				>
					<MenuIcon />
				</IconButton>
        <Link to={`/`}>
          <img
            className="header__logo"
            src="https://upload.wikimedia.org/wikipedia/commons/6/6f/Animax.png"
            alt="logo"
          />
        </Link>
      </div>
      <div className="header__input">
        <TextField
          id="input-with-icon-textfield"
          placeholder="Search your anime here..."
					fullWidth
          value={inputSearch}
          onChange={handleChange}
        />
        <Link to={`/search/${inputSearch}`}>
          <Button color="primary">
            <SearchIcon />
          </Button>
        </Link>
      </div>
      <div className="header__right">
        <Link to="/account">
          <Avatar>PA</Avatar>
        </Link>
      </div>
    </div>
  );
};

export default Header;
