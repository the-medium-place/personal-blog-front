import React, { useState, useEffect } from 'react'
import API from '../../../utils/API'

export default function UpdatePost(props) {


    const [formState, setFormState] = useState({
        title: '',
        text: '',
        image1url: '',
        image2url: '',
        image3url: '',
        Comments: [],
        Tags: []
    })
    const [allTagsState, setAllTagsState] = useState([])
    const [tagCheckboxState, setTagCheckboxState] = useState([])
    const [showCheckboxState, setShowCheckboxState] = useState(false);

    useEffect(() => {
        API.getPostById(props.postId)
            .then(dbPost => {
                setFormState(dbPost.data)
                const tagsCopy = [];
                if (dbPost.data.Tags.length > 0) {
                    dbPost.data.Tags.forEach(tagObj => {
                        // tagsCopy = tagCheckboxState;
                        tagsCopy.push("" + tagObj.id);
                        console.log(tagCheckboxState)
                    })
                }
                return tagsCopy;
            })
            .then(tags => {
                console.log('second .then(): ', tags)
                setTagCheckboxState(tags)
                return tags;
            })
            .then((sameTags)=>setShowCheckboxState(true))
            .catch(err => console.log(err))

        API.getAllTags()
            .then(dbTags => {
                setAllTagsState(dbTags.data)
            })
            .catch(err => console.log(err))
    }, [])
    // console.log('formState.Tags: ', formState.Tags)
    // console.log('allTagsState: ', allTagsState)
    // console.log('tagCheckboxState: ', tagCheckboxState)

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

        console.log(tagCheckboxState)
    }

    function updatePost(event) {
        event.preventDefault();
        const postObj = {
            title: formState.title,
            text: formState.text,
            image1url: formState.image1url,
            image2url: formState.image2url,
            image3url: formState.image3url,
            tags: tagCheckboxState
        }
        API.updatePost(postObj, formState.id)
            .then(dbUpdatedPost => {
                console.log(dbUpdatedPost);
                API.getAllPosts()
                .then(dbPosts => {
                    props.setPostsState(dbPosts.data)
                })
                .catch(err => {
                    console.log('error retrieving DB posts: ', err)
                })
                alert('Post successfully updated!!');
                props.setComponentViewState('posts');
            })
    }



    return (
        <div className="UpdatePost">
            <h1>Update Post!!!</h1>
            <form>
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
                    rows="12"
                    // cols="20"
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
                    <h3>Current Tags:</h3>
                    {formState.Tags.length > 0 ?
                        formState.Tags.map(tag => {
                            return (
                                <div key={tag.id}>
                                    <p>{tag.text}</p>
                                </div>
                            )
                        }) : <h3>No Tags for this Post yet!</h3>}
                </div>

                <div className="post-tags-wrapper">
                    <h3>All Tags (Checked tags are already attached to this post):</h3>
                    {showCheckboxState ? allTagsState.map(tag => {
                        return (
                            <div key={tag.id}>
                                <label htmlFor={tag.id}> {tag.text} </label>
                                <input
                                    type="checkbox"
                                    defaultChecked={tagCheckboxState.includes("" + tag.id)}
                                    id={tag.id}
                                    onChange={handleTagClick}
                                />
                            </div>
                        )
                    }) : null
                }
                </div>

                <input type="submit" value="Update Post" onClick={updatePost} />
                <hr />
            </form>

        </div>
    )
}
