import React, { useState, useEffect } from 'react';
import './style.css';
import { useParams } from 'react-router-dom';
import API from '../../../utils/API';
import ViewComment from '../../components/ViewComment';

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

    const [commentFormState, setCommentFormState] = useState({
        name: '',
        email: '',
        text: '',
        approved: false
    })

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


    function handleInput(e) {
        const { name, value } = e.target;

        setCommentFormState({ ...commentFormState, [name]: value })
    }

    function handleAddCommentClick(e) {
        e.preventDefault();
        console.log(commentFormState)
        API.addComment(commentFormState, params.id)
            .then(dbComment => {
                alert('comment added! It will not appear until approved...');
                setCommentFormState({
                    name: '',
                    email: '',
                    text: '',
                    approved: false
                })


            })
            .catch(err => console.log(err))
    }

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
            <div className="fullpost-bottom-box">

                <div className="fullpost-comments-wrapper">
                    <h3>Comments:</h3>
                    <div className="fullpost-comments-box">
                        {approvedCommentState.length > 0 ? (
                            approvedCommentState.map(commentObj => {
                                return (
                                    <ViewComment comment={commentObj} />
                                )
                            })
                        ) : <h3>No Comments!</h3>}
                    </div>
                </div>

                {/* NEW COMMENT FORM */}
                <div className="fullpost-add-comment-wrapper">
                    <h3>Add Comment:</h3>
                    <div className="add-comment-form">
                        <form>
                            <label htmlFor="add-comment-name">Your Name: </label>
                            <input onChange={handleInput} value={commentFormState.name} type="text" name="name" id="add-comment-name" className="add-comment-name" placeholder="O. CRUD" />

                            <label htmlFor="add-comment-email">Your Email: </label>
                            <input onChange={handleInput} value={commentFormState.email} type="email" name="email" id="add-comment-email" className="add-comment-email" placeholder="email@email.web" />

                            <label htmlFor="add-comment-text">Your Name: </label>
                            <textarea onChange={handleInput} value={commentFormState.text} rows="6" name="text" type="text" id="add-comment-text" placeholder="..." />

                            <button className="add-comment-button" onClick={handleAddCommentClick}>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
//