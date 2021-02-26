import React, { useState, useEffect } from 'react'
import API from '../../../utils/API'

export default function TagEdit(props) {
   
    const {editTag, setEditTag, setEditViewState, setParentTagsState, setPostsState } = props;

    // const [editTag, seteditTag] = useState({
    //     id:null,
    //     text:''
    // })
    
    // useEffect(()=>{
    //     seteditTag(editTag)
    // },[])

    function handleInput (event) {
        const { name, value } = event.target;

        setEditTag({...editTag,[name]:value})
    }

    function handleUpdateClick(event){
        event.preventDefault()
        const updateObj = {
            text: editTag.text
        }
        const currentTagId = editTag.id;

        console.log(updateObj, currentTagId);
        API.updateTagTextById(updateObj, editTag.id)
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
                <input onChange={handleInput} name="text" value={editTag.text} />
            </form>
            <button onClick={handleUpdateClick}>Update Tag</button>
            <button onClick={()=>setEditViewState(false)}>Close</button>
        </div>
    )
}
