import React, { useEffect,useState } from "react"; 
import { useParams } from "react-router-dom";
import axios from "axios";
import './DetailPost.css'



const DetailPost = (props) => {
    const [post, setPost] = useState({})
    const { postId } = useParams(); 
    console.log(props);

    useEffect(() => {
        axios.get(`http://localhost:3004/posts/${postId}`).then((res)=>{
            setPost(res.data);
        })
    }, []);

    return (
            <div className="p-detail-post">
                <p className="detail-title">{post.title}</p>
                <p className="detail-body">{post.body}</p>
            </div>
        )

}

export default DetailPost