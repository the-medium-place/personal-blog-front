import React, { useState } from 'react';
import './style.css';

export default function Nav({ postsState, setPostsState, modifiablePostsState, setModifiablePostsState }) {



    return (
        <nav className="Nav">
            <div className="nav-content">

                <div className="nav-text">
                    <h2>CRUDposting <small>by &lt;Zac Stowell&gt;</small></h2>
                </div>

                <div>
                    <a href="/crudposting/admin"><h3>Admin</h3></a>
                </div>
            </div>
        </nav>
    )
}
