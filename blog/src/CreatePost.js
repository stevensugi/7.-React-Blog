import { useState } from "react";

export default function CreatePost(props){
    const {onCreate} = props;

    const [post, setPost]= useState({
        userId: "",
        Title: "",
        Body: ""
    });

    const handleChange = (e)=>{
        setPost({
            ...post,
            [e.target.name]: e.target.value
        })
    }
    
    const onSubmit = (e)=>{
        e.preventDefalut()
        onCreate(post);
    }
    
    return(
        <form onSubmit={onSubmit}>
            <label>
                userId: <input name="userId" type="text" value={post.userId} onChange={(e) => handleChange(e)}/>
            </label>
            <label>
                Title: <input name="title" type="text" value={post.title} onChange={(e) => handleChange(e)}/>
            </label>
            <label>
                Body: <input name="body" type="text" value={post.body} onChange={(e) => handleChange(e)}/>
            </label>
            <input type="submit"/>
        </form>
    )
};