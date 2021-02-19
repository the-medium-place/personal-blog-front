import React, { useState } from 'react';
import './style.css';

export default function Nav({ postsState, setPostsState, modifiablePostsState, setModifiablePostsState }) {

    const [searchInputState, setSearchInputState] = useState('');
    const [inputReadOnlyState, setInputReadOnlyState] = useState(true);
    const [searchCategoryState, setSearchCategoryState] = useState('');


    function handleCategorySelectInput(e) {
        setSearchCategoryState(e.target.value)
        setInputReadOnlyState(false)
    }

    function handleSearchInput(e) {
        const filter = e.target.value.toLowerCase();
        setSearchInputState(e.target.value)
        // const postArrCopy = [...postsState];
        const filteredPosts = postsState.filter(post => {

            // post.title and post.text are both strings
            if(typeof post[searchCategoryState] !== 'string'){
                // post.Tags is not a string!!

                // check if any tags include the search string
                const tagCheck = post[searchCategoryState].filter(tagObj => {
                    return tagObj.text.toLowerCase().includes(filter);
                })
                // if the filter returns any results, the length of 
                // the resulting array will be greater than 0
                return tagCheck.length > 0;

            } else {
                return post[searchCategoryState].toLowerCase().includes(filter);
            }



        })
        
        console.log('filteredPosts: ',filteredPosts)
        setModifiablePostsState(filteredPosts)
    }


    return (
        <nav className="Nav">
            <div className="nav-text">
                <h2>Feelin' Like C.R.U.D.</h2>
            </div>
                <a href="/admin"><h3>Admin</h3></a>

            <div className="nav-search">
                <form>
                    <label htmlFor="search-category-select">Search by: </label>
                    <select id="search-category-select" value={searchCategoryState} onChange={handleCategorySelectInput}>
                        <option defaultValue>----------</option>
                        <option value="title">&nbsp;&nbsp;&nbsp;&nbsp;&rarr;Title</option>
                        <option value="text">&nbsp;&nbsp;&nbsp;&nbsp;&rarr;Text content</option>
                        <option value="Tags">&nbsp;&nbsp;&nbsp;&nbsp;&rarr;Tag</option>
                    </select>
                    <input
                        type="text"
                        placeholder={inputReadOnlyState ? "Select a category..." : "Enter search..."}
                        value={searchInputState}
                        readOnly={inputReadOnlyState}
                        onChange={handleSearchInput}
                    />
                </form>
            </div>
        </nav>
    )
}
