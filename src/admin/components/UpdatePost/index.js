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

    useEffect(() => {
        API.getPostById(props.postId)
            .then(dbPost => {
                setFormState(dbPost.data)
                console.log(formState)
            })
            .catch(err => console.log(err))

        API.getAllTags()
            .then(dbTags => {
                setAllTagsState(dbTags.data)
            })
            .catch(err => console.log(err))

    }, [])
    console.log('formState.Tags: ', formState.Tags)
    console.log('allTagsState: ', allTagsState)

    function handleInputChange(event) {
        const { name, value } = event.target;

        setFormState({ ...formState, [name]: value })
    }

    function updatePost() {

        console.log(formState)
    }

    function findMatchingTags(id) {
        // search allTagsState for tags that are in formState.Tags
        const tagCheck = formState.Tags.filter(tag => {
            return tag.id === id
        })
        console.log('tagCheck for id #' + id + ': ', tagCheck)

        if (tagCheck.length > 0) {
            return true
        } else {
            return false
        };
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
                    <h3>Current Tags:</h3>
                    {formState.Tags.length > 0 ?
                    formState.Tags.map(tag => {
                        return (
                            <div key={tag.id}>
                                {/* <label htmlFor={tag.id}>{tag.text} </label>
                                <input type="checkbox" defaultChecked id={tag.id} /> */}
                                <p>{tag.text}</p>
                            </div>
                        )
                    }) : <h3>No Tags for this Post yet!</h3>}
                </div>

                <div className="post-tags-wrapper">
                    <h3>All Tags (Checked tags are already attached to this post):</h3>
                    {allTagsState.map(tag => {
                        return (
                            <div key={tag.id}>
                                <label htmlFor={tag.id}>{tag.text} </label>
                                <input type="checkbox" defaultChecked={findMatchingTags(tag.id)} id={tag.id} onChange={() => console.log('clicked!')} />
                            </div>
                        )
                    })}
                </div>

                <input type="submit" value="Update Post" onClick={updatePost} />
                <hr />
            </form>

        </div>
    )
}
