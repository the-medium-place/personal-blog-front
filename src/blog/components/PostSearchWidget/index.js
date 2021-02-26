import React, { useState } from 'react'
import './style.css';

export default function PostSearchWidget({ postsState, modifiablePostsState,setModifiablePostsState }) {

    const [searchInputState, setSearchInputState] = useState('');
    const [inputReadOnlyState, setInputReadOnlyState] = useState(true);
    const [searchCategoryState, setSearchCategoryState] = useState('');
    const [resultCountShowState, setResultCountShowState] = useState(false)

    function handleCategorySelectInput(e) {
        if (e.target.value === 'text' || e.target.value === 'title' || e.target.value === 'Tags') {
            setSearchCategoryState(e.target.value)
            setInputReadOnlyState(false)
        }
    }

    function handleSearchInput(e) {
        const filter = e.target.value.toLowerCase();
        setSearchInputState(e.target.value)
        // const postArrCopy = [...postsState];
        const filteredPosts = postsState.filter(post => {

            // post.title and post.text are both strings
            if (typeof post[searchCategoryState] !== 'string') {
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

        console.log('filteredPosts: ', filteredPosts)
        setModifiablePostsState(filteredPosts)
        setResultCountShowState(true);
    }

    function handleResetClick(e) {
        setModifiablePostsState([...postsState])
        setSearchInputState('');
        setSearchCategoryState('');
        setInputReadOnlyState(true)
        setResultCountShowState(false)
    }



    return (
        <div className="PostSearchWidget">
            <h3>Search Posts</h3>

            <button className="search-widget-reset-button" onClick={handleResetClick}>Reset</button>

            <div className="search-widget-form-wrapper">

                <form>
                    <label htmlFor="search-category-select">Search by: </label>
                    <select id="search-category-select" value={searchCategoryState} onChange={handleCategorySelectInput}>
                        <option defaultValue>--Category--</option>
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
                {resultCountShowState ? (
                    <h3>Number of Results: {modifiablePostsState.length}</h3>
                ):null}

            </div>
        </div>
    )
}
