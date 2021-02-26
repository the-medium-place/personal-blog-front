import React, { useState, useEffect, useRef } from 'react'
import './style.css';



export default function PostCard({ post }) {
    // const ref = useRef(null);

    // const [visibleState, setVisibleState] = useState({
    //     img1: {},
    //     img2: {},
    //     img3: {}
    // });


    useEffect(() => {
        // ref.current.focus();
        
        // document.addEventListener('scroll', (e) => {
        //     ref.current.focus();
        //     const rect = ref.current.getBoundingClientRect();
        //     const imgArr = ref.current.childNodes[3].childNodes[1].firstChild.childNodes;
            
        //     // IF BOTTOM OF POSTCARD DIV IS AT BOTTOM OF SCREEN
        //     if (rect.y + rect.height <= window.innerHeight) {
        //         imgArr.forEach((imgDiv,i) => {
        //             if (!imgDiv.classList.contains(`slide-in${i}`)){
        //                 imgDiv.classList.add(`slide-in${i}`)
        //             }
        //         })

        //     } else {
        //         imgArr.forEach((imgDiv,i)=>{
        //             if (imgDiv.classList.contains(`slide-in${i}`)){
        //                 imgDiv.classList.remove(`slide-in${i}`)
        //             }
        //         })
        //     }
        // })
    }, [])



    const postDate = new Date(post.createdAt);
    const postImages = [post.image1url, post.image2url, post.image3url]


    return (
        <div className="PostCard" id={post.id}>
            {/* <p>SCROLL STATE: {JSON.stringify(visibleState)}</p> */}
            <a href={`/crudposting/viewpost/${post.id}`}><button>View Post</button></a>
            <div className="post-title">
                <h2>{post.title} <br /><small>{postDate.toDateString() + ', ' + postDate.toLocaleTimeString()}</small></h2>
                <div className="post-comment-counter">
                    <h4 className="post-comment-icon"><i className="fas fa-comment-alt"></i> {post.Comments.filter(comment => comment.approved).length}</h4>
                </div>
            </div>
            <div className="post-content-wrapper">


                <div className="post-content">
                    <p className="post-text">{post.text.length < 100 ? post.text : post.text.substr(0, 100) + '...'}</p>
                </div>
                <div className="post-img-wrapper">
                    <div className="post-img-wrapper-int">

                        {postImages.map((imageUrl, i) => {

                            let num = Math.floor(Math.random() * 16); // this will get a number between 0 and 15;
                            num *= Math.round(Math.random()) ? 1 : -1; // this will add minus sign in 50% of cases

                            if (imageUrl) {
                                return (
                                    <div key={i} className={`img-box image${i}`} style={{ '--randVal': `${num}deg`, zIndex: `${i + 1}`, '--imgPos': 'absolute' }}>
                                        <img src={imageUrl} alt="From the post!"/>
                                    </div>
                                )
                            }
                        })}
                    </div>
                </div>
                <div className="post-stats">
                    <div className="post-tags-wrapper">
                        {post.Tags.map(tag => {
                            return (
                                <button className="post-tag" key={tag.id}>{tag.text}</button>
                            )
                        })}
                    </div>
                </div>

            </div>

        </div>
    )
}
