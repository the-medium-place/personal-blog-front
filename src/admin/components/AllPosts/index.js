import React from 'react'
import './style.css';

export default function AllPosts(props) {

    const { postsState, setComponentViewState, setUpdatePostState } = props;

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
                            <td>{post.Comments.length} total /<br/> {post.Comments.filter(comment=>comment.approved).length} approved</td>
                            <td>{post.Tags.map(tag=>tag.text+' ')}</td>
                            <td><img src={post.image1url||'https://via.placeholder.com/150'} alt={post.title} className="post-table-img" /></td>
                            <td><img src={post.image2url||'https://via.placeholder.com/150'} alt={post.title} className="post-table-img"/></td>
                            <td><img src={post.image3url||'https://via.placeholder.com/150'} alt={post.title} className="post-table-img"/></td>
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
