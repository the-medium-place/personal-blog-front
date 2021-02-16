import React, { useState, useEffect } from 'react'
import API from '../../../utils/API'
import TagEdit from '../TagEdit'

import './style.css'

export default function AllTags() {

    const [tagsState, setTagsState] = useState([])
    const [editViewState, setEditViewState] = useState(false)
    const [editTagId, setEditTagId] = useState(null);

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
            setEditTagId(tag)
            setEditViewState(true);
        // })
        // console.log('clicked!')
        // return <TagEdit tag={tag} />
    }

    return (
        <div className="AllTags">
            <h1>All Tags!</h1>
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
                    {editViewState ? <TagEdit tag={editTagId} setEditViewState={setEditViewState} setParentTagsState={setTagsState}/> : null}
                </div>
            </div>
        </div>
    )
}
