import { useState, useEffect } from "react";


export default function Card(props){
    const {posts, onDelete, onUpdate} = props
    return(
            <table>
                <tr>
                    <td>Id</td>
                    <td>Title</td>
                    <td>Body</td>
                </tr>
                {
                    posts.map(post =>{
                        return(
                            <tr key={post.id}>
                                <td>{post.userId}</td>
                                <td>{post.title}</td>
                                <DescriptionForm post={post} onUpdate={onUpdate}/>
                                <td>
                                    <button onClick={()=> onDelete(post.id)}>Delete</button>
                                </td>
                            </tr>
                        )
                    })
                }
            </table>
    )
};

function DescriptionForm(props){
    const{post, onUpdate} = props;
    const [body, setBody] = useState(post.body);
    const handleChange = (event)=>{
        setBody(event.target.value)
    }
    return(
        <div>
            <td>
                <input type="text" value={body} onChange={(event)=>handleChange(event)}/>
            </td>
            <td>
                <button onClick={() => onUpdate({id: post.id, body:body})}>Update</button>
            </td>
        </div>
    )
}