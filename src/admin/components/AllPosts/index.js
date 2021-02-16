import React from 'react'
import './style.css';

export default function AllPosts(props) {

    const { postsState, setPostsState, setComponentViewState, setUpdatePostState } = props;


    // function handleEditClick(){

    //     setComponentViewState('updatepost')
    //     setUpdatePostState(post.id)
    // }

    return (
        <div className="AllPosts">
            <h1>All Posts!</h1>
            <table>
                <thead>
                    <tr>
                        <td>POST ID</td>
                        <td>TITLE</td>
                        <td>TEXT</td>
                        <td># OF COMMENTS</td>
                        <td>TAGS</td>
                        <td>IMAGE 1</td>
                        <td>IMAGE 2</td>
                        <td>IMAGE 3</td>
                        <td>CREATED</td>
                        <td>EDIT</td>
                    </tr>
                </thead>
                <tbody>
                    {postsState.map(post => {
                        return (
                        <tr key={post.id} >
                            <td>{post.id}</td>
                            <td>{post.title}</td>
                            <td>{post.text.substr(0,30)+'...'}</td>
                            <td>{post.Comments.length}</td>
                            <td>{post.Tags.map(tag=>tag.text+' ')}</td>
                            <td><img src={post.image1url} alt={post.title} /></td>
                            <td><img src={post.image2url} alt={post.title} /></td>
                            <td><img src={post.image3url} alt={post.title} /></td>
                            <td>{new Date(post.createdAt).toLocaleString()}</td>
                            <td><button onClick={()=>{
                                      setComponentViewState('updatepost')
                                      setUpdatePostState(post.id)
                            }}>EditPost</button></td>
                        </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}
