import React, { Component } from 'react';
import { PostList } from '../components/posts/PostList';
import { postService } from '../../services/postServices';
import { postsEndpoint } from "../../shared/constants";



class PostsPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        }
    }

    componentDidMount() {

        if (postService.getMyPosts()) {
            const createdPosts = postService.getMyPosts();
            const adaptedPosts = createdPosts.map(createdPost => {
                return postService.adaptMyPost(createdPost)
            })
            console.log(adaptedPosts)
            this.setState({
                posts: adaptedPosts
            })
        } else {
            postService.fetchPosts(postsEndpoint)
                .then(myPosts => {
                    this.setState({
                        posts: myPosts
                    })
                })
        }
    }

    render() {
        return (
            <PostList posts={this.state.posts} />
        );
    }
}

export { PostsPage }