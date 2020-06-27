import React,{useState,useEffect} from 'react';
import './style.css';
import Card from '../UI/Card';
import blogPost from '../../data/blog.json';


/**
* @author
* @function BlogPost
**/

const BlogPost = (props) => {


    const [post,setPost]=useState({
        id:"" ,
        blogCategory:"",
        blogTitle : "",
        slug:"" ,
        postedOn: "",
        author:"",
        blogImage:"",
        blogText:""

    })

    const [postId,setpostId]=useState('');

    useEffect(()=>{
        const postId=props.match.params.postId;
        const post= blogPost.data.find(post=>post.id==postId)
        setPost(post);
        setpostId(postId)
    },[post,props.match.params.postId]);

    if(post.blogImage=="") return null;
    
  return(
    <div className="blogPostContainer">
        <Card>
           <div className="blogHeader">
                <span className="blogCategory">{post.blogCategory}</span>
                 <h1 className="postTitle">{post.blogTitle}</h1>
  <span className="postedby">Posted on{post.postedOn}by{post.author}</span>   
            </div> 

            <div className="postImage">
            <img src={require('../../blogPostImages/' + post.blogImage)} alt="Post Image" />
            </div>

            <div className="postContent">
                <h3 className="contentTitle">{post.author}</h3>
                <p className="contentParagraph">{post.blogText}</p>
            </div>
            
        </Card>
    </div>
    
   )

 }

export default BlogPost