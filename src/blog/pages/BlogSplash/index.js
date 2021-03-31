import React, { useState, useEffect } from 'react'
import Grid from '@material-ui/core/Grid';
import PostCard from '../../components/PostCard'
import './style.css';
import CrudLogo from '../../../assets/images/CRUDlogo.png';
import TagSearchWidget from '../../components/TagSearchWidget';
import PostSearchWidget from '../../components/PostSearchWidget';
import useWindowDimensions from '../../../hooks/WindowDimensions';
import Box from '@material-ui/core/Box';


export default function BlogSplash({ postsState, modifiablePostsState, setModifiablePostsState }) {
    const { width, height } = useWindowDimensions();

    // console.log('postState at App(): ',postsState)
    return (
        <div className="Splash">
            {/* <div className="splash-top-wrapper">
                <img className="splash-logo" src={CrudLogo} alt="CRUD posting" />
                <div className="splash-intro">
                    <p>Hello! My name is Zac Stowell and I am a Full-Stack Web Developer - welcome to my blog "<span className="splash-intro-title">CRUDposting</span>"!</p>
                    <p><strong>You may be asking yourself, <em>"What is CRUD"?</em></strong></p>
                    <p> Well, in programming we LOVE acronyms, and we also LOVE working with data. C R U D refers to the four actions we want our application to perform with the given database: <span className="splash-intro-logo-letter">C</span>reate, <span className="splash-intro-logo-letter">R</span>ead, <span className="splash-intro-logo-letter">U</span>pdate and <span className="splash-intro-logo-letter">D</span>elete.</p>
                    <p>Since I built this blog with full CRUD functionality - and since I will be filling it with random junk about me and my life - <span className="splash-intro-title">CRUDposting</span> felt uniquely suitable!</p>
                </div>
            </div> */}
            {/* <p>{testScrollState}</p> */}
            <Grid container>
                <Grid item xs={12}>
                    <h1>My Scratch-Made Blog! <small>(under construction...)</small></h1>
                </Grid>
                <Grid item xs={12}>
                    <a href="/crudposting">CRUDposting Home</a>
                    &nbsp;&nbsp;&nbsp;
                    <a href="/">Zac's Portolio Home</a>
                </Grid>
            </Grid>

            <Grid
                container
                justify="center"
                direction={width > 960 ? '' : "column-reverse"}
            >
                <Grid item sm={12} md={8} className="post-cards-wrapper" >
                    {modifiablePostsState.length > 0 ? (
                        modifiablePostsState.map(post => {
                            return (
                                <PostCard key={post.id} post={post} />
                            )
                        })) : <h1>no search results OR bad DB connection OR empty DB... check the console logs to find out!</h1>}
                </Grid>
                <Grid item sm={12} md={4} className="post-widgets-wrapper">
                        <PostSearchWidget modifiablePostsState={modifiablePostsState} postsState={postsState} setModifiablePostsState={setModifiablePostsState} />
                        <TagSearchWidget modifiablePostsState={modifiablePostsState} postsState={postsState} setModifiablePostsState={setModifiablePostsState} />
                </Grid>
            </Grid>
        </div>
    )
}
