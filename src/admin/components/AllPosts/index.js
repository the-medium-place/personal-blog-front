import React from 'react'
import './style.css';

export default function AllPosts(props) {

    const { postsState, setPostsState } = props;

    return (
        <div className="AllPosts">
            <h1>All Posts!</h1>
            <table>
                <thead>
                    <tr>
                        <td>TITLE</td>
                        <td>TEXT</td>
                        <td>IMAGE 1</td>
                        <td>IMAGE 2</td>
                        <td>IMAGE 3</td>
                        <td>CREATED</td>
                    </tr>
                </thead>
                <tbody>
                    {postsState.map(post => {
                        return (
                        <tr key={post.id} >
                            <td>{post.title}</td>
                            <td>{post.text.substr(0,30)+'...'}</td>
                            <td><img src={post.image1url} alt={post.title} /></td>
                            <td><img src={post.image2url} alt={post.title} /></td>
                            <td><img src={post.image3url} alt={post.title} /></td>
                            <td>{post.createdAt}</td>
                        </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}
