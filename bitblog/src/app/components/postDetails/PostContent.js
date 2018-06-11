import React from 'react';
import AuthorName from './AuthorName';

const PostContent = (props) => {

    const { title, body, userId } = props.post;
    return (
        <div className="card-content #dce775 lime lighten-4">
            <h2>{title}</h2>
            <AuthorName authorId={userId} />
            <p>{body}</p>
        </div>
    );
}


export default PostContent;