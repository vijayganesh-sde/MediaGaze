import './BottomNav.css';
import { SearchOutlined,MessageOutlined, CameraOutlined,UserOutlined} from "@ant-design/icons";
import { useEffect, useImperativeHandle, useState } from 'react';
import { useNavigate } from 'react-router-dom';
function BottomNavigation(){

  const [clicks,setClicks]=useState([1,0,0,0]);
  const routes = ["/","/search","/message","/profile"];
  const navigate=useNavigate();
  function ToggleButton(input){
      switch (input) {
        case 0:
          setClicks([1,0,0,0]);
          
          break;
        case 1:
          setClicks([0,1,0,0]);
          

          break;
        case 2:
          setClicks([0,0,1,0]);


          break;
        case 3:
          setClicks([0,0,0,1]);


          break;
        default:
          break;
      }
  }
  useEffect(()=>{
    console.log("called");
    for(let i=0; i<4;i++){
      if (clicks[i]){
        document.getElementById(i.toString()).style.opacity=0.4;
        navigate(routes[i]);
      }
      else{
        document.getElementById(i.toString()).style.opacity=1;
      }
    }
  },[clicks])
  return (
    <>
    <div className="bottom-container">
    <div style={{flexGrow:2}}></div>
      
      <div className="posts" id='0' onClick={()=>ToggleButton(0)}><CameraOutlined /><br />Posts</div>
      <div className="search" id='1' onClick={()=>ToggleButton(1)}><SearchOutlined /><br />Search</div>
      
      <div className="messages" id='2' onClick={()=>ToggleButton(2)}><MessageOutlined /><br />Chat</div>
      <div className="profile" id='3' onClick={()=>ToggleButton(3)}><UserOutlined /><br />profile</div>
      <div style={{flexGrow:2}}></div>

    </div>
    </>
  )
}
export default BottomNavigation;