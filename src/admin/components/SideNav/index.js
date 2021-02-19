import React from 'react'
import './style.css';

export default function SideNav(props) {
    const { componentViewState, setComponentViewState } = props;

    return (
        <div className="SideNav">
            <ul>
                <li onClick={()=>setComponentViewState('main')}>Dashboard</li>
                
                <li onClick={()=>setComponentViewState('addpost')}>Add New Post</li>
       
                <li onClick={()=>setComponentViewState('posts')}>View/Edit All Posts</li>
        
                <li onClick={()=>setComponentViewState('tags')}>View/Edit All Tags</li>
                
                <li onClick={()=>setComponentViewState('comments')}>View/Approve All Comments</li>
            </ul>            
            
        </div>
    )
}
