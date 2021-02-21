import React, { useState, useEffect } from 'react';
import './style.css';
import { useParams } from 'react-router-dom';
import API from '../../../utils/API';

export default function ViewPost() {

    const params = useParams();
    const [postState, setPostState] = useState({
        title: '',
        text: '',
        Comments: [],
        Tags: [],
        image1url: '',
        image2url: '',
        image3url: '',
        userId: 1,
        updatedAt: '',
        createdAt: ''


    });
    const [imgArrState, setImgArrState] = useState([]);
    const [approvedCommentState, setApprovedCommentState] = useState([])

    let postImgArr;
    useEffect(() => {
        API.getPostById(params.id)
            .then(dbPost => {
                console.log(dbPost.data);
                setPostState(dbPost.data);
                postImgArr = [dbPost.data.image1url, dbPost.data.image2url, dbPost.data.image3url]
                setImgArrState(postImgArr);
                setApprovedCommentState(dbPost.data.Comments.filter(commObj => commObj.approved))
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <div className="ViewPost">
            <div className="viewpost-backbutton-wrapper">
                <a href="/crudposting"><button><span>&larr;</span> Back to main page</button></a>
            </div>
            <div className="fullpost-wrapper">
                <div className="fullpost-title">
                    {postState.title}
                </div>
                <div className="fullpost-dark-wrapper">

                    <div className="fullpost-text">
                        {postState.text.split('\n' || '\r').map((paragraph, i) => {
                            return (
                                <p key={i}>{paragraph}</p>
                            )
                        })}
                    </div>
                    <div className="fullpost-imgs-wrapper">
                        {imgArrState.map((imgUrl, i) => {
                            if (imgUrl) {
                                return (
                                    <img key={i} className="fullpost-img" src={imgUrl} alt="awesome!" />
                                )
                            }
                        })}
                    </div>
                    <div className="fullpost-tags">
                        {postState.Tags.map(tagObj => {
                            return (
                                <span className="fullpost-tag-text" key={tagObj.id}>{tagObj.text}</span>
                            )
                        })}
                    </div>
                </div>
            </div>
            <div className="fullpost-comments-wrapper">
                <h3>Comments:</h3>
                <div className="fullpost-comments-box">
                    {approvedCommentState.length > 0 ? (
                        approvedCommentState.map(commentObj => {
                            return (
                                <div key={commentObj.id} className="fullpost-single-comment-wrapper">
                                    <div className="comment-from-posted">
                                        <div className="comment-from">

                                            <span className="comment-heading">FROM:</span>
                                            <p>
                                                {commentObj.name}
                                            </p>
                                        </div>
                                        <div className="comment-posted">

                                            <span className="comment-heading">POSTED:</span>
                                            <p>
                                                {new Date(commentObj.createdAt).toLocaleString()}
                                            </p>
                                        </div>
                                    </div>
                                    <span className="comment-heading">EMAIL:</span>
                                    <p>
                                        {commentObj.email}
                                    </p>
                                    <span className="comment-heading">TEXT:</span>
                                    <p>
                                        {commentObj.text}
                                    </p>

                                </div>
                            )
                        })
                    ) : <h3>No Comments!</h3>}
                </div>
            </div>
        </div>
    )
}
//