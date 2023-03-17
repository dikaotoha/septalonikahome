import React, {useState, useEffect, Fragment} from "react";
import Post from "../../../component/Post/Post";
import "./Blogpost.css";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const BlogPost = () => {
    const [post, setPost] = useState([]);
    const [formBlogPost, setFormBlogPost] = useState({
        id: 1,
        title: '',
        body:'',
        userId: 1
    });
    const [isUpdate, setIsUpdate] = useState(false);
    const navigate = useNavigate();
    
    useEffect(() => {
        getPostAPI();
    }, []);

    const getPostAPI = () => {
        axios.get('http://localhost:3004/posts?_sort=id&_order=desc')
        .then((res)=>{
            setPost(res.data);
        })
    }

    const postDataToAPI = () => {
        axios.post('http://localhost:3004/posts', formBlogPost)
        .then((res)=>{  
            console.log(res);
            getPostAPI();
            setFormBlogPost({
                id : 1,
                title : '',
                body : '',
                userId : 1
            });
        }, (err)=>{
            console.log('error ', err);
        });
    }

    const putDataToAPI = () => {
        axios.put(`http://localhost:3004/posts/${formBlogPost.id}`, formBlogPost)
        .then((res)=>{
            console.log(res);
            getPostAPI();
            setFormBlogPost({
                id : 1,
                title : '',
                body : '',
                userId : 1
            });
            setIsUpdate(false);
        });
    }

    const handleRemove = (data) => {
        axios.delete(`http://localhost:3004/posts/${data}`)
        .then((res)=>{
            getPostAPI();
        });
    }

    const handleFormChange = (event)  => {
        let formBlogPostNew = {...formBlogPost};
        let timeStamp = new Date().getTime();
        if(!isUpdate){
            formBlogPostNew['id'] = timeStamp;
        }
        formBlogPostNew[event.target.name] = event.target.value;
        setFormBlogPost(formBlogPostNew);
    }

    const handleSubmit = () => {
        if(isUpdate){
            putDataToAPI();    
        }else{
            postDataToAPI();
        }
    }
    
    const handleDetail = (id) => {
        navigate(`/detail-post/${id}`);
    }

    const handleUpdate = (data) => {
        setFormBlogPost(data);
        setIsUpdate(true);
    }

    return (
        <Fragment>
            <p className="section-title">Blog Post</p>
            <div className="form-add-post">
                <label htmlFor="title" >Title</label>
                <input type="text" name="title" value={formBlogPost.title} placeholder="add titles" onChange={handleFormChange} />
                <label htmlFor="body">Blog Content</label>
                <textarea name="body" value={formBlogPost.body} id="body" cols="30" rows="10" placeholder="add blog content" onChange={handleFormChange}></textarea>
                <button className="btn-submit" onClick={handleSubmit}>submit</button>
            </div>
            {
                post.map(post  => {
                    return <Post key={post.id}  data={post} remove={handleRemove} update={handleUpdate} goDetail={handleDetail}/>
                })
            }
        </Fragment>
    )
}

export default BlogPost;
