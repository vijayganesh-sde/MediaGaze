import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { HeartOutlined, SendOutlined, HeartFilled } from "@ant-design/icons";
import { useState } from 'react';

function PostCard() {
  const [liked,setLiked]=useState(0);
  const [likeCount,setLikeCount]=useState(5);
  const styles = {
    mainCard:{ maxWidth: '20rem', flexGrow:1,border: '1px solid #FFD8E4'},
    buttonGrp:{display:'flex',gap:'2rem',flexWrap:'nowrap'},
    button:{borderRadius:'10%',flexGrow:1}
  }                         
  return (<>
    <Card style={styles.mainCard}>        
      <Card.Header style={{display:'flex',gap:'20px'}}>
        <Card.Img style={{borderRadius:"50%",maxWidth:'35px',height:'35px',flexGrow:1}} src="https://www.garrickadenbuie.com/blog/process-profile-picture-magick/profiles/DItYlc26zVI.jpg" />
        <Card.Text style={{flexGrow:5,textAlign:'left',paddingTop:'5px'}}>Maameyy</Card.Text>
      </Card.Header>
      <Card.Img src="https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg" />
      <Card.Body>
        <Card.Title>{likeCount} Likes</Card.Title>
        <Card.Text>
          Dogs are the bestt!!
        </Card.Text>
        <div style={styles.buttonGrp}>
        {
          liked ? <Button variant="danger" style={styles.button} onClick={()=>{setLikeCount(likeCount-1);setLiked(1-liked)}}><HeartFilled />{' '}LIKE</Button> : <Button variant="outline-danger" style={styles.button} size='sm' onClick={()=>{setLikeCount(likeCount+1);setLiked(1-liked)}}><HeartOutlined />{' '}LIKE</Button>
        }
        <Button variant="outline-dark" style={styles.button} ><SendOutlined />{' '}SHARE</Button>
       </div>
      </Card.Body>
    </Card>
    </>
  );
}

export default PostCard;