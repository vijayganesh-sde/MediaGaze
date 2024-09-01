
import { useEffect, useState } from "react";
import OwnPostCard from "../../components/OwnPost/OwnPost";
import OwnStory from "../../components/OwnStory/OwnStory";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useNavigate, useLocation } from "react-router";
import dataUsers from "../../dataProvider/Users";
import "./profile.css";

export default function Profile(){
  const [login,setLogin]=useState(0);
  const [authUser,setAuthUser]=useState({});
  const navigate = useNavigate();
  const location = useLocation();
  function Authorize(option){
    if(option){
      navigate("/register");
    }
    else{
      navigate("/login");
    }
  }
  useEffect(()=>{
    if(location.state && location.state.login){
      setLogin(1);
      let authusername = location.state.username;
      for(let i=0; i<dataUsers.length; i++){
        if(dataUsers[i].username==authusername){
          setAuthUser(dataUsers[i]);
        }
      }
    }
    else{
      setLogin(0);
    }
  },[location.state]);
  if(!login){
    return(<>
    <div style={{justifyContent:'center',alignItems: 'center',height:'90vh',display: 'flex'}}>
    <Card style={{border: '1px solid #FFD8E4',padding:'2rem',maxWidth:'30rem'}}>
      
      <Card.Body style={{display:'flex',flexWrap:'nowrap',gap:'2rem'}}>
        <Button type="submit" size="lg" variant="primary" style={{flexGrow:1}} onClick={()=>Authorize(0)}>Log In</Button>
        <Button type="submit" size="lg" variant="primary" style={{flexGrow:1}} onClick={()=>Authorize(1)}>Register</Button>
      </Card.Body>
    </Card>
    </div>
    </>)
  }
  return(<>
  <div className="front-container">
    <div className="profile-container-left">
    <p style={{border:'1px solid #FFD8E4',textAlign:'center'}}>HIGHLIGHTS</p>
      <div className="top">
        
      <div className="post-floater">
        {authUser.stories.map((_,ind)=>{
          return(<OwnStory storyData={authUser.stories[ind]} />)
        })}
    
      </div>
      </div>
      <p style={{border:'1px solid #FFD8E4',textAlign:'center'}}>POSTS</p>
      <div className="bottom">
        
        <div className="post-floater">
          {authUser.posts.map((_,ind)=>{
            return(<OwnPostCard postData={authUser.posts[ind]} />);
          })}
          
        </div>
        
      </div>
    </div>
    <div className="profile-container-right">
      <div className="top">
        <img className="pic" src={authUser.dp} height="50px" width="50px"/>

        <div className="contacts">
          
          <div className="followers">
            <p>{authUser.followers}</p>
            <p>Followers</p>
          </div>
          <div className="posts-total">
            <p>{authUser.post_count}</p>
            <p>Posts</p>
          </div>
          <div className="following">
            <p>{authUser.following}</p>
            <p>Following</p>
          </div>
        </div>
      </div>
      <div className="bottom">
        <div className="username"><span className="box-small">Username</span><span className="box-small">{authUser.username}</span></div>
        
        <div className="name"><span className="box-small">Name </span><span className="box-small">{authUser.name}</span></div>
        <div className="Email"><span className="box-small">E-mail</span><span className="box-small">{authUser.email[0]}***{'@gmail.com'}</span></div>
        <div className="password"><span className="box-small">Password</span><span className="box-small">-------</span></div>
        <div className="likes"><span className="box-small">Total Liked Posts </span><span className="box-small">{authUser.post_count}</span></div>
        <div className="saved"><span className="box-small">Total Saved Posts</span><span className="box-small">{authUser.saved_count}</span></div>
      </div>
      
    </div>
    </div>
  
  </>)
}