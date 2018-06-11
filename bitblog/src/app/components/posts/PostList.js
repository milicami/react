import React, { Fragment } from 'react';
import { PostItem } from './PostItem';

const PostList = (props) => {

    const renderPostList = () => {
        return props.posts.map((post) => {
            return (
            <PostItem post={post} key={post.postId} />
            )
        })
    }
    return (
        <Fragment>
            <h2 className="center-align">Posts</h2>
            {renderPostList()}
        </Fragment>
    );
};

export { PostList };