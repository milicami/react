import React, { Component } from 'react';
import { postService } from '../../../services/postServices';
import Link from 'react-router-dom/Link';


export class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            content: "",
            createdPosts: []
        }
    }

    onSave = (event) => {
        event.preventDefault();
        const titleValue = this.state.title;
        const contentValue = this.state.body;

        const myPost = {
            title: titleValue,
            body: contentValue
        }
        postService.createPost(myPost)
            .then(myResponse => {
                const createdPosts = this.state.createdPosts;
                createdPosts.push(myResponse);
                this.setState({
                    createdPosts
                })


                const cachedPosts = JSON.parse(localStorage.getItem("createdPosts"));
                if (cachedPosts) {
                    localStorage.setItem("createdPosts", JSON.stringify([...cachedPosts, ...this.state.createdPosts]))
                } else {
                    localStorage.setItem("createdPosts", JSON.stringify(this.state.createdPosts))
                }
            })

        this.setState({
            title: "",
            body: ""
        })
    }

    handleChange = (event) => {
        const field = event.target.name;

        this.setState({
            [field]: event.target.value
        })
    }

    render() {
        return (
            <form>
                <div className="container">
                    <div className="row">
                        <div className="input-field col s12">
                            <h2 className="center-align">New Post</h2>
                            <input placeholder="Title" id="post-title" name="title" type="text" value={this.state.title} className="validate" onChange={this.handleChange} />
                            <label htmlFor="first_name"></label>
                        </div>
                    </div>

                    <div className="row">
                        <div className="input-field col s12">
                            <textarea id="content" className="materialize-textarea" placeholder="Content" name="body" value={this.state.body} onChange={this.handleChange}></textarea>
                            <label htmlFor="textarea1"></label>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col s4 right">
                            <button className="waves-effect  btn-large #00acc1 cyan darken-3 " ><Link to="/">Cancel</Link></button>
                            <button className="waves-effect  btn-large #00acc1 cyan darken-3 right" onClick={this.onSave}>Save</button>
                        </div>
                    </div>
                </div>
            </form>
        )
    }
}