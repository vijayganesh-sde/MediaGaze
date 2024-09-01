import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { UserAddOutlined, CheckOutlined } from "@ant-design/icons";
import { useEffect, useState } from 'react';

function PeopleCard(props) {
  const [followed,setFollowed]=useState(0);
  const userData=props.data;
  return (<>
    <Card style={{ border: '1px solid #FFD8E4',minWidth: '18rem', flexGrow:1,height: '20rem' }}>
      <Card.Header style={{display:'flex',gap:'20px'}}>
        <Card.Text style={{flexGrow:5,textAlign:'center',paddingTop:'5px'}}>{userData.username}</Card.Text>
      </Card.Header>
      <div style={{display:'flex',justifyContent: 'center',marginTop:'5px'}}>
      <Card.Img style={{borderRadius:"50%",maxWidth:'4rem',height:'3rem',flexGrow:1}} src={userData.dp} /></div>

      <Card.Body style={{alignItems: 'center'}}>
        <Card.Title style={{textAlign: "center"}}>{userData.name}</Card.Title><br />
        <Card.Text className='contacts' style={{fontSize:'12px',justifyContent:'center',width:'100%'}}>
        <div className="followers">
            <p>{userData.followers}</p>
            <p>Followers</p>
          </div>
          <div className="posts-total">
            <p>{userData.post_count}</p>
            <p>Posts</p>
          </div>
          <div className="following">
            <p>{userData.following}</p>
            <p>Following</p>
          </div>
        
        </Card.Text>
      
      </Card.Body>
      
      <Card.Footer style={{width:'100%',justifyContent: 'center',display:'flex'}}>{followed ? <Button id="follow-bn" onClick={()=>{setFollowed(1-followed);userData.followers-=1;}} variant="outline-dark" style={{borderRadius:'10%'}} size='sm'><CheckOutlined />{' '}Following</Button> : <Button id="follow-bn" onClick={()=>{setFollowed(1-followed);userData.followers+=1;}} variant="outline-dark" style={{borderRadius:'10%'}} size='sm'><UserAddOutlined />{' '}Follow</Button>}</Card.Footer>
    </Card>
    </>
  );
}

export default PeopleCard;