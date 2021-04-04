import React, { useState, useEffect } from 'react'
import API from '../../../utils/API'
import TagEdit from '../TagEdit'
import Grid from '@material-ui/core/Grid'

import './style.css'

export default function AllTags({ setPostsState, loggedInUser }) {

    const [tagsState, setTagsState] = useState([])
    const [editViewState, setEditViewState] = useState(false)
    const [editTag, setEditTag] = useState(null);
    const [newTagState, setNewTagState] = useState({ text: '' })

    useEffect(() => {
        API.getAllTags()
            .then(dbTags => {
                console.log(dbTags)
                setTagsState(dbTags.data);
            })
            .catch(err => console.log(err))
    }, [])


    const adminCheck = () => {
        return loggedInUser.admin
    }

    function handleEditClick(tag) {
        // API.getTagById(event.target.id)
        // .then(dbTag => {
        if (adminCheck()) {
            setEditTag(tag)
            setEditViewState(true);
        } else {
            alert('You do not have permission to edit tags')
        }
        // })
        // console.log('clicked!')
        // return <TagEdit tag={tag} />
    }

    function handleInputChange(event) {
        const { name, value } = event.target;
        setNewTagState({ [name]: value })

    }

    function handleTagSave() {
        if (adminCheck()) {
            API.saveNewTag(newTagState)
                .then(dbNewTag => {
                    API.getAllTags()
                        .then(dbTags => {
                            setTagsState(dbTags.data);
                        })
                        .catch(err => console.log(err))
                })
                .catch(err => console.log(err))
        } else {
            alert('You do not have permission to add new tags')
        }
    }

    return (
        <div className="AllTags">
            <h1>All Tags!</h1>
            <label htmlFor="new-tag">Save new tag: </label>
            <input id="new-tag" name="text" type="text" value={newTagState.text} onChange={handleInputChange} />
            <button onClick={handleTagSave}>SAVE</button>
            <Grid container className="tags-wrapper">
                {editViewState ? 
                <Grid item xs={12} md={4}>
                    <TagEdit editTag={editTag} setEditTag={setEditTag} setEditViewState={setEditViewState} setParentTagsState={setTagsState} setPostsState={setPostsState} />
                </Grid> : null
                }
                <Grid item xs={12} md={8}>
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
                                    <tr key={tag.text} >
                                        <td>{tag.id}</td>
                                        <td>{tag.text}</td>
                                        <td>{new Date(tag.createdAt).toLocaleString()}</td>
                                        <td><button id={tag.id} onClick={() => handleEditClick(tag)}>Edit Tag</button></td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </Grid>

            </Grid>
        </div>
    )
}
