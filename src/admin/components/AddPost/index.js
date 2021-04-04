import React, { useState, useEffect } from 'react'
import API from '../../../utils/API';
import './style.css';

export default function AddPost(props) {
    const { postsState, setPostsState, loggedInUser } = props;

    const adminCheck = () => {
        return loggedInUser.admin
    }


    const [formState, setFormState] = useState({
        title: '',
        text: '',
        image1url: '',
        image2url: '',
        image3url: ''
    })
    const [tagCheckboxState, setTagCheckboxState] = useState([])
    const [tagsState, setTagsState] = useState([])



    useEffect(() => {
        API.getAllTags()
            .then(dbTags => {
                console.log(dbTags.data)
                setTagsState(dbTags.data)
            })
    }, [])


    function handleInputChange(event) {
        const { name, value } = event.target;

        setFormState({ ...formState, [name]: value })
    }

    function handleTagClick(event) {
        if (event.target.checked) {
            console.log('checked!', event.target.id)
            const tagsCopy = tagCheckboxState;
            tagsCopy.push(event.target.id);
            setTagCheckboxState(tagsCopy)
        } else {
            console.log('unchecked!', event.target.id)
            const tagsCopy = tagCheckboxState;
            const tagIndex = tagsCopy.indexOf(event.target.id);
            tagsCopy.splice(tagIndex, 1)
            setTagCheckboxState(tagsCopy)
        }
    }

    function savePost(event) {
        event.preventDefault();
        if(adminCheck()){
            const postObj = {
                ...formState, tags: tagCheckboxState
            }
            console.log(postObj);
            API.saveNewPost(postObj)
                .then(dbPost => {
                    alert('post saved');
                    setFormState({
                        title: '',
                        text: '',
                        image1url: '',
                        image2url: '',
                        image3url: ''
                    })
    
                    API.getAllPosts()
                        .then(dbPosts => {
                            setPostsState(dbPosts.data)
                        })
    
                })
        } else {
            alert('you do not have permission to add posts')
        }
    }

    return (
        <div className="AddPost">
            <form className="addpost-form">
                <label htmlFor="post-title">Title:</label>
                <input
                    type="text"
                    name="title"
                    id="post-title"
                    placeholder="Enter Title..."
                    value={formState.title}
                    onChange={handleInputChange}
                />

                <label htmlFor="post-content">Content:</label>
                <textarea
                    rows="20"
                    cols="20"
                    name="text"
                    id="post-content"
                    placeholder="Post content..."
                    value={formState.text}
                    onChange={handleInputChange}
                />

                <label htmlFor="post-image1url">Image 1 URL:</label>
                <input
                    type="text"
                    name="image1url"
                    id="post-image1url"
                    placeholder="http://..."
                    value={formState.image1url}
                    onChange={handleInputChange}
                />

                <label htmlFor="post-image2url">Image 2 URL:</label>
                <input
                    type="text"
                    name="image2url"
                    id="post-image2url"
                    placeholder="Enter image2url..."
                    value={formState.image2url}
                    onChange={handleInputChange}
                />

                <label htmlFor="post-image3url">Image 3 URL:</label>
                <input
                    type="text"
                    name="image3url"
                    id="post-image3url"
                    placeholder="Enter image3url..."
                    value={formState.image3url}
                    onChange={handleInputChange}
                />

                <div className="post-tags-wrapper">
                    <h3>Select Tags:</h3>
                    {tagsState.map(tag => {
                        return (
                            <div key={tag.id}>
                                <label htmlFor={tag.id}>{tag.text} </label>
                                <input type="checkbox" id={tag.id} onChange={(e) => handleTagClick(e, tag.id)} />
                            </div>
                        )
                    })}

                </div>

                <input type="submit" value="Add Post" onClick={savePost} />
                <hr />
            </form>

        </div>
    )
}
