import React, { useState } from 'react'
import API from '../../../utils/API'

export default function TagEdit(props) {
   
    const {tag, setEditViewState, setParentTagsState, setPostsState } = props;

    const [tagState, setTagState] = useState(tag)

    function handleInput (event) {
        const { name, value } = event.target;

        setTagState({...tagState,[name]:value})
    }

    function handleUpdateClick(event){
        event.preventDefault()
        const updateObj = {
            text: tagState.text
        }
        const currentTagId = tagState.id;

        console.log(updateObj, currentTagId);
        API.updateTagTextById(updateObj, tagState.id)
        .then(dbUpdatedTag => {
            console.log(dbUpdatedTag);

            API.getAllTags()
            .then(dbTags => {
                setParentTagsState(dbTags.data)
                setEditViewState(false);
            })
            .catch(err => console.log('error retrieving tags after update: ', err))

            API.getAllPosts()
            .then(dbPosts=>{
                setPostsState(dbPosts.data)
            })
            .catch(err => {
                console.log("error updating posts state: ", err)
            })
        })
        .catch(err => {
            console.log('error updating tag: ', err);
        })
    }
    return (
        <div className="TagEdit">
            <h1>Edit Tag!!</h1>
     
            <form onSubmit={handleUpdateClick}>
                <input onChange={handleInput} name="text" value={tagState.text} />
            </form>
            <button onClick={handleUpdateClick}>Update Tag</button>
            <button onClick={()=>setEditViewState(false)}>Close</button>
        </div>
    )
}
