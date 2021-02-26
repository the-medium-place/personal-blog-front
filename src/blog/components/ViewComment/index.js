import React from 'react'
import './style.css';

export default function ViewComment({ comment }) {

    
    return (
        <div key={comment.id} className="fullpost-single-comment-wrapper">
            <div className="comment-from-posted-email">
                <div className="comment-from">
                    <span className="comment-heading">FROM:</span>
                    <p>
                        {comment.name}
                    </p>
                </div>
                <div className="comment-email">
                    <span className="comment-heading">EMAIL:</span>
                    <p>
                        {comment.email}
                    </p>
                </div>
                <div className="comment-posted">
                    <span className="comment-heading">POSTED:</span>
                    <p>
                        {new Date(comment.createdAt).toLocaleString()}
                    </p>
                </div>

            </div>
            {/* <span className="comment-heading">TEXT:</span> */}
            <span className="comment-text">
                {comment.text.length > 100 ? (comment.text.substr(0, 99) + '... ') : comment.text}
            </span>    
        </div>
    )
}

