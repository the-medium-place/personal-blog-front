import React, { useState, useEffect } from 'react'
import API from '../../../utils/API'
import TagEdit from '../TagEdit'

import './style.css'

export default function AllTags({ setPostsState }) {

    const [tagsState, setTagsState] = useState([])
    const [editViewState, setEditViewState] = useState(false)
    const [editTag, setEditTag] = useState(null);
    const [newTagState, setNewTagState] = useState('')

    useEffect(() => {
        API.getAllTags()
            .then(dbTags => {
                console.log(dbTags)
                setTagsState(dbTags.data);
            })
            .catch(err => console.log(err))
    }, [])

    function handleEditClick(tag) {
        // API.getTagById(event.target.id)
        // .then(dbTag => {
            setEditTag(tag)
            setEditViewState(true);
        // })
        // console.log('clicked!')
        // return <TagEdit tag={tag} />
    }

    function handleInputChange(event) {
        const { name, value } = event.target;
        setNewTagState({[name]:value})

    }

    function handleTagSave () {
        API.saveNewTag(newTagState)
        .then(dbNewTag => {
            API.getAllTags()
            .then(dbTags => {
                setTagsState(dbTags.data);
            })
            .catch(err => console.log(err))
        })
        .catch(err => console.log(err))
    }

    return (
        <div className="AllTags">
            <h1>All Tags!</h1>
            <label htmlFor="new-tag">Save new tag: </label>
            <input id="new-tag" name="text" type="text" value={newTagState.text} onChange={handleInputChange} />
            <button onClick={handleTagSave}>SAVE</button>
            <div className="tags-wrapper">
                <div className="tags-left">
                    <table>
                        <thead>
                            <tr>
                                <td>TAG ID</td>
                                <td>TEXT</td>
                                <td>CREATED</td>
                                <td>EDIT</td>
                            </tr>
                        </thead>
                        <tbody>
                            {tagsState.map(tag => {
                                return (
                                    <tr key={tag.id} >
                                        <td>{tag.id}</td>
                                        <td>{tag.text}</td>
                                        <td>{new Date(tag.createdAt).toLocaleString()}</td>
                                        <td><button id={tag.id} onClick={()=>handleEditClick(tag)}>Edit Tag</button></td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
                <div className="tags-right">
                    {editViewState ? <TagEdit editTag={editTag} setEditTag={setEditTag} setEditViewState={setEditViewState} setParentTagsState={setTagsState} setPostsState={setPostsState}/> : null}
                </div>
            </div>
        </div>
    )
}
