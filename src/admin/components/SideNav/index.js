import React from 'react'
import './style.css';
import { useHistory } from 'react-router-dom'

export default function SideNav(props) {
    const history = useHistory();

    const { componentViewState, setComponentViewState } = props;

    const handleLogout = () => {
        localStorage.removeItem('token')
        history.push('/crudposting')
    }

    return (
        <div className="SideNav">
            <ul>
                <li onClick={()=>setComponentViewState('main')}>Dashboard</li>
                
                <li onClick={()=>setComponentViewState('addpost')}>Add New Post</li>
       
                <li onClick={()=>setComponentViewState('posts')}>View/Edit All Posts</li>
        
                <li onClick={()=>setComponentViewState('tags')}>View/Edit All Tags</li>
                
                <li onClick={()=>setComponentViewState('comments')}>View/Approve All Comments</li>

                <li onClick={()=>handleLogout()}>Logout & Exit</li>

            </ul>            
            
        </div>
    )
}
