import React from 'react'
import PostCard from '../../components/PostCard'
import './style.css';
import CrudLogo from '../../assets/images/CRUDlogo.png';

export default function Splash({ postsState, modifiablePostsState, setModifiablePostsState }) {


    console.log('postState at App(): ',postsState)
    return (
        <div className="Splash">
            <img src={CrudLogo} alt="feelin' like C.R.U.D." />
            <div className="post-cards-wrapper" >

                {modifiablePostsState.map(post => {
                    return (
                        <PostCard key={post.id} post={post} />
                    )
                })}
            </div>
        </div>
    )
}
