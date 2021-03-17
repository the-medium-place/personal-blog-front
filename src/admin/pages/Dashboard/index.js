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

export default function Dashboard({ postsState, setPostsState }) {

  const history = useHistory();

  const [componentViewState, setComponentViewState] = useState('main')
  const [updatePostState, setUpdatePostState] = useState(null)
  const [loggedInUser, setLoggedInUser] = useState(null)

  useEffect(()=>{
    const token = localStorage.getItem('token') || null;

    if(!token) history.push('/login');

    API.getProfile(token)
    .then(dbUser => {
      setLoggedInUser(dbUser.data)
      console.table(dbUser.data)
    })
    .catch(err => {
      console.log(err)
    })
  },[])


  console.log('postsState: ', postsState);
  return (
    <div className="Dashboard">
      <h1>Here's the dashboard!!</h1>
      <a href="/crudposting"><h3>go home</h3></a>
      <SideNav componentViewState={componentViewState} setComponentViewState={setComponentViewState} />
      {
        componentViewState === 'posts' ? <AllPosts postsState={postsState} setComponentViewState={setComponentViewState} updatePostState={updatePostState} setUpdatePostState={setUpdatePostState} /> :
          componentViewState === 'comments' ? <AllComments setPostsState={setPostsState} /> :
            componentViewState === 'tags' ? <AllTags setPostsState={setPostsState} /> :
              componentViewState === 'updatepost' ? <UpdatePost setComponentViewState={setComponentViewState} postId={updatePostState} setPostsState={setPostsState} /> :
                componentViewState === 'addpost' ? <AddPost postsState={postsState} setPostsState={setPostsState} /> :
                  componentViewState === 'main' ? <h1>main!</h1> : <h1>What are you lookin' for?</h1>


      }

      {/* {postsState.map(post => {
        return (
          <div key={post.id}>
            <h1>{post.title}</h1>
            <p>{post.text}</p>
            <img src={post.image1url} />
            <img src={post.image2url} />
            <img src={post.image3url} />
            <ul>Tags:
            {post.Tags.map(tag => {
              return (
                <li key={tag.id}>
                  {tag.text}
                </li>
              )
            })}
            </ul>
            <ul>Comments:
              {post.Comments.map(comment => {
                return (
                  <li key={comment.id}>
                    {`${comment.name} says: ${comment.text}`}
                  </li>
                )
              })}

            </ul>

            <br />
          </div>
        )
      })} */}
    </div>
  )
}
