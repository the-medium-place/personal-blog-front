import axios from 'axios';
// 
const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:8080';

const API = {
    // PORTFOLIO CALLS
    // ===============
    sendMail: function (input) {
        return axios.post(API_URL + "/contactme", input);
    },

    // USER INFO QUERIES
    // =================
    userLogin: function (userObj) {
        return axios.post(API_URL + '/api/users/login', userObj)
    },

    getProfile: function (token) {
        return axios.get(API_URL + '/api/users/secretProfile', {
            headers: {
                "authorization": `Bearer ${token}`
            }
        })
    },

    // BLOG POST 'GET' QUERIES
    // =======================
    getAllPosts: function () {
        return axios.get(API_URL + '/api/posts');
    },

    getPostById: function (id) {
        return axios.get(API_URL + `/api/posts/${id}`);
    },

    getPostsByTagId: function (tagId) {
        return axios.get(API_URL + `/api/posts/tag/${tagId}`);
    },

    getAllComments: function () {
        return axios.get(API_URL + `/api/comments`);
    },

    getAllTags: function () {
        return axios.get(API_URL + `/api/tags`)
    },

    getTagById: function (tagId) {
        return axios.get(API_URL + `/api/tags/${tagId}`)
    },

    getAllPostsWithApprovedComments: function () {
        return axios.get(API_URL + '/api/posts/approved');

    },

    // BLOG 'POST'/'PUT' QUERIES
    // ========================
    // save post
    saveNewPost: function (postObj) {
        return axios.post(API_URL + `/api/posts`, postObj)
    },
    // save comment to post
    addComment: function (commentObj, postId) {
        return axios.post(API_URL + `/api/comments/${postId}`, commentObj)
    },
    // change comment approval (true/false)
    setCommentApproval: function (apprObj, commentId) {
        return axios.put(API_URL + `/api/comments/setapproval/${commentId}`, apprObj)
    },

    updateTagTextById: function (tagObj, tagId) {
        return axios.put(API_URL + `/api/tags/${tagId}`, tagObj)
    },

    updatePost: function (postObj, postId) {
        console.log('updatePost postId: ', postId)
        return axios.put(API_URL + `/api/posts/${postId}`, postObj)
    },

    saveNewTag: function (tagObj) {
        return axios.post(API_URL + `/api/tags`, tagObj)
    }



}

export default API;

