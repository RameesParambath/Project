import React,{useState,useEffect} from 'react'
import Card from '../UI/Card'
import './style.css'
import blogPost from '../../data/blog.json'
import { NavLink } from 'react-router-dom'
import Icons from '../Icons'

/**
* @author
* @function Sidebar
**/

const Sidebar = (props) => {
    console.log(props);
    
    const [posts,setPosts]=useState([])

    useEffect(()=>{
        const posts=blogPost.data;
        setPosts(posts);
    },[posts]);

  return(
      <div className="sidebar">
            <Card style={{marginBottom:'20px',padding:'20px',boxSizing:'border-box'}}>
                <div className="cardHeader">
                    <span>About</span>
                </div>
                <div className="aboutImage">
                            <img src={require('../../blogPostImages/app.jpg')} alt="about"/>

                </div>
                <div className="cardBody">
                     <p className="personalbio">  My name is Ramees, working as software developern in resemble systems.</p> 
                </div>

            </Card>
            <Card style={{marginBottom:'20px',padding:'20px',boxSizing:'border-box'}}>
                <div className="cardHeader">
                    <span><Icons/></span>
                </div>
            </Card>

            <Card style={{marginBottom:'20px',padding:'20px',boxSizing:'border-box'}}>
                <div>
                    <span>Recent Posts</span>
                </div>
                <div className="recentPosts">


                    {
                        posts.map(post=>{
                            return( 
                                
                                <NavLink key={post.id} to={`/post/${post.id}`}>
                                <div className="recentPost">
                                    <h3 className="recentPostTitle">{post.blogTitle}</h3>
                                    
                                    <span>{post.postedOn}</span>
                                </div>
                                </NavLink>
                            );
                        })
                    }
                    
                </div>
            </Card>


            
      </div>
    
   )

 }

export default Sidebar