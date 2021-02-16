import React from 'react'
import './style.css';

export default function SideNav(props) {
    const { componentViewState, setComponentViewState } = props;

    return (
        <div className="SideNav">
            <ul>
                <li onClick={()=>setComponentViewState('main')}>Dashboard</li>
            </ul>
            <ul>
                <li onClick={()=>setComponentViewState('posts')}>All Posts</li>
            </ul>
            <ul>
                <li onClick={()=>setComponentViewState('comments')}>All Comments</li>
            </ul>            
            <ul>
                <li onClick={()=>setComponentViewState('addpost')}>Add New Post</li>
            </ul>
            <ul>
                <li onClick={()=>setComponentViewState('tags')}>All Tags</li>
            </ul>            
            
        </div>
    )
}
