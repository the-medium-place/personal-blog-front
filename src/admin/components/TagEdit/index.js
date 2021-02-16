import React, { useState, useEffect } from 'react'
import API from '../../../utils/API'

export default function TagEdit(props) {
   
    const {tag, setEditViewState, setParentTagsState } = props;

    const [tagState, setTagState] = useState({})
    useEffect(()=>{
        setTagState(tag);
    },[tag])

    function handleInput (event) {
        console.log(tagState)
        const { name, value } = event.target;
        console.log(name, value)
        // console.log('form value: ',value)

        setTagState({...tagState,[name]:value})
        // console.log('tagstate after setting: ',tagState)
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
        })
        .catch(err => {
            console.log('error updating tag: ', err);
        })
    }
    return (
        <div className="TagEdit">
            <h1>Edit Tag!!</h1>
     
            <form>
                <input onChange={handleInput} name="text" value={tagState.text} />
            </form>
            <button onClick={handleUpdateClick}>Update Tag</button>
            <button onClick={()=>setEditViewState(false)}>Close</button>
        </div>
    )
}
