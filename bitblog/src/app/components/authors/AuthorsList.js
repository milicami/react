import React, {Fragment} from 'react';

import { AuthorsItem } from './AuthorsItem';

const AuthorsList = (props) => {
    const {authors} = props
    return (
        <Fragment>
        <h2 className="center-align">Authors</h2>
        {authors.map((author) => {
            return <AuthorsItem author={author} key={author.authorId}/>
        })}
        
        </Fragment>
    );
};

export { AuthorsList };