import React from "react";
import "./App.css";
import Header from "./components/Header";
import SideBar from "./components/Sidebar";
import MainContent from "./components/MainContent";
import SearchPage from "./components/SearchPage";
import AccountPage from "./components/AccountPage";
import AnimePage from './pages/AnimePage';
import Grid from "@material-ui/core/Grid";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [isSidebar, setSidebar] = React.useState(true);

  return (
    <div>
      <Router>
        <Header sidebar={isSidebar} setSidebar={setSidebar} />
        <Grid container direction="row">
          {isSidebar && (
            <Grid item xs={12} sm={12} md={2}>
              <SideBar />
            </Grid>
          )}
          <Grid item xs={12} sm={12} md={isSidebar ? 10 : 12}>
            <Switch>
              <Route path={["/search", "/search/:searchTerm"]}>
                <SearchPage />
              </Route>
              <Route path={["/anime", "/anime/:animeName"]}>
                <AnimePage />
              </Route>
              <Route path="/account">
                <AccountPage />
              </Route>
              <Route exact path="/">
                <MainContent />
              </Route>
            </Switch>
          </Grid>
        </Grid>
      </Router>
    </div>
  );
}

export default App;
