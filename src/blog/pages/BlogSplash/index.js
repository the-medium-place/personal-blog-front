import React from 'react'
import PostCard from '../../components/PostCard'
import './style.css';
import CrudLogo from '../../../assets/images/CRUDlogo.png';
import TagSearchWidget from '../../components/TagSearchWidget';
import PostSearchWidget from '../../components/PostSearchWidget';

export default function BlogSplash({ postsState, modifiablePostsState, setModifiablePostsState }) {


    // console.log('postState at App(): ',postsState)
    return (
        <div className="Splash">
            <div className="splash-top-wrapper">
                <img className="splash-logo" src={CrudLogo} alt="feelin' like C.R.U.D." />
                <div className="splash-intro">
                    <p>Hello! My name is Zac Stowell and I am a Full-Stack Web Developer - welcome to my blog "<span className="splash-intro-title">CRUDposting</span>"!</p>
                    <p><strong>You may be asking yourself, <em>"What is CRUD"?</em></strong></p>
                    <p> Well, in programming we LOVE acronyms, and we also LOVE working with data. C R U D refers to the four actions we want our application to perform with the given database: <span className="splash-intro-logo-letter">C</span>reate, <span className="splash-intro-logo-letter">R</span>ead, <span className="splash-intro-logo-letter">U</span>pdate and <span className="splash-intro-logo-letter">D</span>elete.</p>
                    <p>Since I built this blog with full CRUD functionality - and since I will be filling it with random junk about me and my life - <span className="splash-intro-title">CRUDposting</span> felt uniquely suitable!</p>
                </div>
            </div>
            <div className="post-cards-wrapper" >

                {modifiablePostsState.length > 0 ? (

                    modifiablePostsState.map(post => {
                        return (
                            <PostCard key={post.id} post={post} />
                        )
                    })) : <h1>no search results OR bad DB connection OR empty DB... check the console logs to find out!</h1>}

            </div>
            <div className="post-widgets-wrapper">
                <PostSearchWidget modifiablePostsState={modifiablePostsState} postsState={postsState} setModifiablePostsState={setModifiablePostsState} />
                <TagSearchWidget modifiablePostsState={modifiablePostsState} postsState={postsState} setModifiablePostsState={setModifiablePostsState} />
            </div>
        </div>
    )
}
