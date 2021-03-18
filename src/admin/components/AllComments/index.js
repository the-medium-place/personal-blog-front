import React, { useEffect, useState } from 'react'
import API from '../../../utils/API'

export default function AllComments(props) {

    const [commentsState, setCommentsState] = useState([])

    useEffect(()=>{
        fetchComments();
    },[])

    function fetchComments () {
        API.getAllComments()
        .then(dbComments => {
            console.log(dbComments.data)
            setCommentsState(dbComments.data)
        })
        .catch(err => console.log(err))
    }

    function handleApprovalClick(commentId, approval){
        const apprObj = {
            approved: !approval
        }
        API.setCommentApproval(apprObj, commentId)
        .then(dbComment => {
            // alert(`Comment ${approval ? 'Denied!':'Approved!'}`)
            console.log(dbComment)
            fetchComments()
            API.getAllPosts()
            .then(dbPosts => {
                props.setPostsState(dbPosts.data)
            })
            .catch(err => console.log(err))
            props.setCommentStats(props.getCommentsInfo())
        })
        .catch(err => console.log(err))
    }

    return (

        <div className="AllComments">
            <h1>All Comments!!</h1>
            <table>
                <thead>
                    <tr>
                        <td>POST ID</td>
                        <td>AUTHOR NAME</td>
                        <td>AUTHOR EMAIL</td>
                        <td>TEXT</td>
                        <td>CREATED</td>
                        <td>APPROVED</td>
                        <td>SET APPROVAL</td>
                    </tr>
                </thead>
                <tbody>
                    {commentsState.map(comment => {
                        return (
                        <tr key={comment.id} >
                            <td>{comment.PostId}</td>
                            <td>{comment.name}</td>
                            <td>{comment.email}</td>
                            <td>{comment.text}</td>
                            <td>{new Date(comment.createdAt).toLocaleString()}</td>
                            <td style={comment.approved ? {background:'green'}:{background:'red'}}>{comment.approved ? 'Approved' : 'Not Approved'}</td>
                            <td><button onClick={()=>handleApprovalClick(comment.id, comment.approved)}>{comment.approved ? 'Deny' : 'Approve'}</button></td>
                        </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}
