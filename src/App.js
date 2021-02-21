import './App.css';
import MailIcon from '@material-ui/icons/Mail';
import HomeIcon from '@material-ui/icons/Home';
import LaptopIcon from '@material-ui/icons/LaptopMac';
import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';
import NavDrawer from './portfolio/components/NavDrawer';
import { useEffect, useState } from 'react';
import API from './utils/API';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import BlogSplash from './blog/pages/BlogSplash';
import Dashboard from './admin/pages/Dashboard';
import Nav from './blog/components/Nav';
import AboutMe from './portfolio/pages/AboutMe';
import ContactMe from './portfolio/pages/ContactMe';
import Portfolio from './portfolio/pages/Portfolio';
import ViewPost from './blog/pages/ViewPost';



// TODO: create custom color themes!!
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#EEF2D0'// offwhite - used to be '#7986cb'
    },
    secondary: {
      main: '#4D7343'// green - used to be #bdbdbd
    },
    terciary: {
      main: '#A67D65'//brownish - used to be "#bada55"
    },
    text: {
      primary: '#080B0D', // nearly black
      secondary: '#F2F2F2'
    }
  }
})

const useStyles = makeStyles((theme) => ({
  root: {

  }

}))

function App() {

  const classes = useStyles();

  const [postsState, setPostsState] = useState([]);
  const [modifiablePostsState, setModifiablePostsState] = useState([])

  useEffect(() => {
    API.getAllPosts()
      .then(dbPosts => {
        // console.log(dbPosts)
        setPostsState(dbPosts.data);
        setModifiablePostsState(dbPosts.data)
      })
      .catch(err => {
        console.log(err);

      })
  }, [])


  return (
    <div className="App">
      <Router>
        <CssBaseline />
        <ThemeProvider theme={theme}>





          {/* BEGIN ROUTING */}
          <Switch>
            {/* PORTFOLIO SIDE ROUTING */}
            <Route exact path="/">
              <NavDrawer />
              <Container>
                <AboutMe latestPost={postsState.length > 0 ? postsState[0] : null} />
              </Container>
            </Route>
            <Route exact path="/portfolio">
              <NavDrawer />
              <Container>
                <Portfolio />
              </Container>
            </Route>
            <Route exact path="/contact">
              <NavDrawer />
              <Container>
                <ContactMe />
              </Container>
            </Route>


            {/* BLOG SIDE ROUTING */}
            <Route exact path={['/crudposting']}>
              <Nav postsState={postsState} setPostsState={setPostsState} modifiablePostsState={modifiablePostsState} setModifiablePostsState={setModifiablePostsState} />
              <BlogSplash postsState={postsState} setPostsState={setPostsState} modifiablePostsState={modifiablePostsState} setModifiablePostsState={setModifiablePostsState} />
            </Route>
            <Route exact path="/crudposting/viewpost/:id">
              <Nav postsState={postsState} setPostsState={setPostsState} modifiablePostsState={modifiablePostsState} setModifiablePostsState={setModifiablePostsState} />
              <ViewPost />
            </Route>
            <Route exact path="/crudposting/admin">
              <Dashboard postsState={postsState} setPostsState={setPostsState} />
            </Route>
            <Route exact path="*">
              <h1>404 not found</h1>
            </Route>


          </Switch>
        </ThemeProvider>

      </Router>
    </div>
  );
}

export default App;
