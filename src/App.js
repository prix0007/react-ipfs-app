
import './App.css';
import Header from './components/Header';
import SideBar from './components/Sidebar';
import MainContent from './components/MainContent';
import SearchPage from './components/SearchPage';
import AccountPage from './components/AccountPage';
import Grid from '@material-ui/core/Grid';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';


function App() {
  return (
    <div>
      <Router>
        <Header />
        <Grid
          container
          direction="row"
        >
          <Grid item xs={12} sm={12} md={2}>
            <SideBar />
          </Grid>
          <Grid item xs={12} sm={12} md={10}>
            <Switch>
              <Route path={["/search","/search/:searchTerm"]}>
                <SearchPage />
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
