import React, { useState, useEffect } from 'react'
import SideNav from '../../components/SideNav'
import './style.css';
import AllPosts from '../../components/AllPosts';
import AllComments from '../../components/AllComments';
import AddPost from '../../components/AddPost';
import UpdatePost from '../../components/UpdatePost';
import AllTags from '../../components/AllTags';
import API from '../../../utils/API';
import { useHistory } from "react-router-dom";
import useWindowDimensions from '../../../hooks/WindowDimensions'
import NavDrawer from '../../components/NavDrawer';
import AdminNav from '../../components/AdminNav';


export default function Dashboard({ postsState, setPostsState }) {

  const history = useHistory();
  const { width, height } = useWindowDimensions();

  const [componentViewState, setComponentViewState] = useState('main')
  const [updatePostState, setUpdatePostState] = useState(null)
  const [loggedInUser, setLoggedInUser] = useState(null)

  useEffect(() => {
    const token = localStorage.getItem('token') || null;

    if (!token) history.push('/login');

    API.getProfile(token)
      .then(dbUser => {
        setLoggedInUser(dbUser.data)
        console.table(dbUser.data)
      })
      .catch(err => {
        console.log(err)
        setLoggedInUser(null)
        localStorage.removeItem('token')
        alert('your token is invalid or expired\nPlease log in again...')
        history.push('/login')
      })

  }, [])

  const counterTextStyle = { background: 'rgb(20, 20, 20)', color: 'rgba(245, 245, 245)', fontFamily: 'monospace', padding: '5px 8px', borderRadius: 4 }

  const getCommentsInfo = () => {
    let commentsArr = [];

    // SET ALL COMMENTS INTO SINGLE ARRAY
    postsState.forEach(post => {
      commentsArr.push(...post.Comments)
    })

    // FILTER ARRAY TO FIND APPROVED COMMENTS
    const approvedLength = commentsArr.filter(comment => comment.approved).length

    // RETURN STATS DATA OBJECT
    return {
      totalLength: commentsArr.length,
      approvedLength,
      deniedLength: commentsArr.length - approvedLength
    };
  }

  console.log('postsState: ', postsState);
  return (
    <div className="Dashboard">
      <h1>Welcome to the Admin Dashboard!</h1>

      <a href="/crudposting"><h3>Back to CRUDposting home</h3></a>
      <AdminNav componentViewState={componentViewState} setComponentViewState={setComponentViewState}  />
      {/* {width>960?
      <SideNav componentViewState={componentViewState} setComponentViewState={setComponentViewState} />:<NavDrawer componentViewState={componentViewState} setComponentViewState={setComponentViewState} />
      } */}
      {
        componentViewState === 'posts' ? <AllPosts postsState={postsState} setComponentViewState={setComponentViewState} updatePostState={updatePostState} setUpdatePostState={setUpdatePostState} /> :
          componentViewState === 'comments' ? <><span>
            Total: <span style={counterTextStyle}>{getCommentsInfo().totalLength}</span> <br />
            Approved: <span style={counterTextStyle}>{getCommentsInfo().approvedLength}</span><br />
            Denied: <span style={counterTextStyle}>{getCommentsInfo().deniedLength}</span>
            </span><AllComments setPostsState={setPostsState} /></> :
            componentViewState === 'tags' ? <AllTags setPostsState={setPostsState} /> :
              componentViewState === 'updatepost' ? <UpdatePost setComponentViewState={setComponentViewState} postId={updatePostState} setPostsState={setPostsState} /> :
                componentViewState === 'addpost' ? <AddPost postsState={postsState} setPostsState={setPostsState} /> :
                  componentViewState === 'main' ? <>
                    <span style={{ background: 'white', padding: '1rem', borderRadius: '15px', fontSize: 30, margin: 15 }}>Posts: <span style={counterTextStyle}>{postsState.length}</span></span>
                    <br />
                    <div style={{ background: 'white', padding: '1rem', borderRadius: 15, margin: 15, display: 'inline-block' }}>
                      <span style={{ fontSize: 30 }}>Comments:</span>
                      <br />
                      <span>
                        Total: <span style={counterTextStyle}>{getCommentsInfo().totalLength}</span> <br />
                        Approved: <span style={counterTextStyle}>{getCommentsInfo().approvedLength}</span><br />
                        Denied: <span style={counterTextStyle}>{getCommentsInfo().deniedLength}</span>
                      </span>
                    </div></> : <h1>What are you lookin' for? How are you even seeing this?</h1>
      }
    </div>
  )
}
