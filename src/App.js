import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import API from './utils/API';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import BlogSplash from './pages/BlogSplash';
import Dashboard from './admin/pages/Dashboard';
import Nav from './components/Nav';


function App() {

  const [postsState, setPostsState] = useState([]);
  const [modifiablePostsState, setModifiablePostsState] = useState([])

  useEffect(() => {
    API.getAllPosts()
      .then(dbPosts => {
        // console.log(dbPosts)
        setPostsState(dbPosts.data);
        setModifiablePostsState(dbPosts.data)
      })
      .catch(err => console.log(err))
  }, [])


  return (
    <div className="App">
      <Router>
        {/* BEGIN ROUTING */}
        <Switch>
          <Route exact path={['/crudposting']}>
            <Nav postsState={postsState} setPostsState={setPostsState}  modifiablePostsState={modifiablePostsState} setModifiablePostsState={setModifiablePostsState}/>
            <BlogSplash postsState={postsState} setPostsState={setPostsState} modifiablePostsState={modifiablePostsState} setModifiablePostsState={setModifiablePostsState}/>
          </Route>
          <Route exact path="/crudposting/admin">
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
