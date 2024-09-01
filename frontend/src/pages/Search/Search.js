import dataUsers from "../../dataProvider/Users";
import { SearchOutlined } from "@ant-design/icons";
import "./Search.css";
import { useEffect, useState } from "react";
import PeopleCard from "../../components/PeopleCard/PeopleCard";
export default function SearchUsers(){
  const [mockUsers,setMockUsers]=useState(dataUsers);
  console.log(mockUsers);
  function searchUsers(){
    const inputVal = document.getElementById("user-inp").value;
    const temp=[];
    for(let i=0;i<mockUsers.length;i++){
      if(inputVal==mockUsers[i].username || inputVal==mockUsers[i].name){
        temp.push(mockUsers[i]);
      }
    }
    setMockUsers(temp);
  }
  
  return(<>
    <div className="search-box">
      <input id="user-inp" type="text" placeholder="Search for a profile..." />
      <button type="submit" onClick={searchUsers}><SearchOutlined /></button>

    </div>
    <div className="search-container">
      {mockUsers.map((_,ind)=>{
        return(<PeopleCard data={mockUsers[ind]} />);
        
      })}
    </div>
    </>
  );
}