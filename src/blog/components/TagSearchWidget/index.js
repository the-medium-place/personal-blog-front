import { Chip } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import API from '../../../utils/API';
import './style.css';

export default function TagSearchWidget({ postsState, modifiablePostsState, setModifiablePostsState }) {

    const [allTagsState, setAllTagsState] = useState([])
    const [resultCountShowState, setResultCountShowState] = useState(false)

    useEffect(() => {
        API.getAllTags()
            .then(dbTags => {
                // console.log('tags list: ', dbTags.data)
                setAllTagsState(dbTags.data)
            })
            .catch(err => console.log(err))
    }, [])

    function handleTagClick(tagId) {
        API.getPostsByTagId(tagId)
            .then(dbFilteredPosts => {
                console.log('filtered posts by tag: ', dbFilteredPosts)
                setModifiablePostsState(dbFilteredPosts.data)
                setResultCountShowState(true);
            })
    }

    function handleResetClick(e) {
        setModifiablePostsState([...postsState])
        setResultCountShowState(false);

    }

    return (
        <div className="TagSearchWidget">
            <h3>Tags</h3>
            <button className="tag-widget-reset-button" onClick={handleResetClick}>Reset</button>
            <p>Click a tag below to filter posts</p>
            <hr />
            <div className="tag-widget-tags-wrapper">

                {allTagsState.map(tagObj => {
                    // return <button onClick={handleTagClick} className="tag-widget-tag-text" key={tagObj.text} id={tagObj.id}>{tagObj.text}</button>
                    return <Chip
                        clickable
                        id={tagObj.id}
                        onClick={()=>handleTagClick(tagObj.id)}
                        key={tagObj.text}
                        data-id={tagObj.id}
                        label={tagObj.text}
                        
                        style={{ margin: 2, background: 'var(--resetBtnBG)', color: 'var(--tagBtnText)' }}
                    />
                })}
                <hr />
                {resultCountShowState ? (
                    <h3>Number of Results: {modifiablePostsState.length}</h3>
                ) : null}
            </div>

        </div>
    )
}
