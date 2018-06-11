import React from 'react';
import { Link } from 'react-router-dom';

const AuthorsItem = (props) => {

    const {authorId, name} = props.author
    return (
        <div className="container">
            <div className="row">
                <div className="col s12">
                    <div className="card #e0f2f1 teal lighten-5">
                        <div className="card-content grey-text text-darken-3">
                            <span className="card-title"><Link to={`/authors/${authorId}`}>{name}</Link></span>
                            <p>I am a very simple card. I am good at containing small bits of information.
          I am convenient because I require little markup to use effectively.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export { AuthorsItem };