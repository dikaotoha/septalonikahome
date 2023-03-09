import React, {Component, Fragment} from "react";
import Post from "../../component/Post/Post";
import "./Blogpost.css";
import axios from "axios";

class BlogPost extends Component {
    state = {
        post: [],
        formBlogPost:{
            id: 1,
            title: '',
            body:'',
            userId: 1
        },
        isUpdate: false
    }
    //menggunakan fetch
        // fetch('https://jsonplaceholder.typicode.com/posts')
        // .then(response => response.json())
        // .then(json => {
        //     this.setState({
        //         post: json
        //     })
        // })
        //menggunakan axios
        // axios.get('http://localhost:3004/posts')
        // .then((res)=>{
        //     this.setState({
        //         post: res.data
        //     })
        // })
    getPostAPI = () => {
        axios.get('http://localhost:3004/posts?_sort=id&_order=desc')
        .then((res)=>{
            // console.log(res.data);
            this.setState({
                post: res.data
            })
        })
    }

    postDataToAPI = () => {
        axios.post('http://localhost:3004/posts', this.state.formBlogPost)
        .then((res)=>{  
            console.log(res);
            this.getPostAPI();
            this.setState({
                formBlogPost: {
                    id : 1,
                    title : '',
                    body : '',
                    userId : 1
                },
            });
        }, (err)=>{
            console.log('error ', err);
        });
        
    }

    putDataToAPI = () => {
        axios.put(`http://localhost:3004/posts/${this.state.formBlogPost.id}`, this.state.formBlogPost)
        .then((res)=>{
            console.log(res);
            this.getPostAPI();
            this.setState({
                formBlogPost: {
                    id : 1,
                    title : '',
                    body : '',
                    userId : 1
                },
                isUpdate: false
            });
        });
    }

    handleRemove = (data) => {
        // console.log(data);
        axios.delete(`http://localhost:3004/posts/${data}`)
        .then((res)=>{
            this.getPostAPI();
        });
    }

    handleFormChange = (event)  => {
        let formBlogPostNew = {...this.state.formBlogPost};
        let timeStamp = new Date().getTime();
        if(!this.state.isUpdate){
            formBlogPostNew['id'] = timeStamp;
        }
        formBlogPostNew[event.target.name] = event.target.value;
        this.setState({
            formBlogPost: formBlogPostNew
        }, () => {
            // console.log('value obj formBlogPost: ', this.state.formBlogPost);
        });
    }

    handleSubmit = () => {
        if(this.state.isUpdate){
            this.putDataToAPI();
            
        }else{
            this.postDataToAPI();
        }
    }

    handleUpdate = (data) => {
        this.setState({
            formBlogPost: data,
            isUpdate: true
        });
        // let bodyValue = data.body;
        // let titleValue = data.title;
        // let idValue = data.id;
        // console.log (`Body= ${bodyValue}, Title= ${titleValue}, ID= ${idValue}`);
    }
    componentDidMount(){
        this.getPostAPI();
    }

    render() {
        return (
            <Fragment>
                <p className="section-title">Blog Post</p>
                <div className="form-add-post">
                    <label htmlFor="title" >Title</label>
                    <input type="text" name="title" value={this.state.formBlogPost.title} placeholder="add titles" onChange={this.handleFormChange} />
                    <label htmlFor="body">Blog Content</label>
                    <textarea name="body" value={this.state.formBlogPost.body} id="body" cols="30" rows="10" placeholder="add blog content" onChange={this.handleFormChange}></textarea>
                    <button className="btn-submit" onClick={this.handleSubmit}>submit</button>
                </div>
                {
                    this.state.post.map(post  => {
                        return <Post key={post.id}  data={post} remove={this.handleRemove} update={this.handleUpdate}/>
                    })
                }
                
            </Fragment>
            
        )
    }
}

export default BlogPost;