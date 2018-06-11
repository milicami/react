import Post from "../models/Post";
import { postsEndpoint } from "../shared/constants";

class PostServices {
    fetchPosts(postsEndpoint) {
        return fetch(postsEndpoint)
            .then(response => response.json())
            .then(myData => {
                const postsList = this.adaptPostData(myData)

                return postsList
            })
    }
    fetchRelatedPosts(id) {
        const relatedPostsEndpoint = `${postsEndpoint}?userId=${id}`
        return fetch(relatedPostsEndpoint)
            .then(response => response.json())
            .then(myData => {
                const postsList = this.adaptPostData(myData)

                return postsList
            })
    }

    fetchSinglePost(id) {
        const singlePostEndpoint = `${postsEndpoint}/${id}`
        return fetch(singlePostEndpoint)
            .then(response => response.json())
            .then(data => this.createPostInstance(data)
            )
    }

    adaptPostData(postData) {
        const myPostData = postData.map(post => {
            return this.createPostInstance(post);
        })
        return myPostData;
    }

    createPostInstance(post) {
        let { title, body, id, userId } = post;
        title = `${title.charAt(0).toUpperCase()}${title.slice(1)}`;
        body = `${body.charAt(0).toUpperCase()}${body.slice(1)}`;
        return new Post(title, body, id, userId);
    }

    createPost(myPost) {
        return fetch(postsEndpoint, {
            method: 'POST',
            body: JSON.stringify(myPost),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json())
            .then((myPost) => {
                const {title, body, id} = myPost;
                return new Post(title, body, id);
            })
    }

    adaptMyPost(myPost) {
        const {title, body, postId} = myPost;
        return new Post(title, body, postId);
    }

    getMyPosts() {
        const postsFromStorage = JSON.parse(localStorage.getItem("createdPosts"))
        return postsFromStorage
    }
    

}

export const postService = new PostServices();