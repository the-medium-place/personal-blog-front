import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import API from './utils/API';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Splash from './pages/Splash';
import Dashboard from './admin/pages/Dashboard';


function App() {

  const [postsState, setPostsState] = useState([]);

  useEffect(() => {
    API.getAllPosts()
      .then(dbPosts => {
        console.log(dbPosts)
        setPostsState(dbPosts.data);
      })
      .catch(err => console.log(err))
  }, [])


  return (
    <div className="App">
      <Router>
        {/* BEGIN ROUTING */}
        <Switch>
          <Route exact path={['/', '/home']}>
            <Splash />
          </Route>
          <Route exact path="/admin">
            <Dashboard postsState={postsState} setPostsState={setPostsState} />
          </Route>
          <Route exact path="*">
            <h1>404 not found</h1>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
