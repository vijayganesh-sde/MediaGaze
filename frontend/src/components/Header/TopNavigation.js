import './TopNav.css';
import { PlusCircleOutlined, BellOutlined, MoonOutlined } from "@ant-design/icons";

export default function TopNavigation(){
  return (
    <>
    <div className="top-container">
      <div className="title">MeDiA GaZe</div>
      <div className="story"><PlusCircleOutlined /><br />Add Story</div>
      <div className="notification"><BellOutlined /><br />Notifications</div>
      <div className="theme"><MoonOutlined /><br />Theme</div>
    </div>
    </>
  )
}