import Card from 'react-bootstrap/Card';

function OwnPostCard(props) {
  let postData = props.postData;
  return (<>
    <Card style={{ maxWidth: '12rem',minWidth:'12rem',maxHeight:'20rem',border:'1px solid #FFD8E4',flexGrow:1}}>
      
      <Card.Img src={postData.image} />
      <Card.Body style={{alignItems:'center'}}>
        <Card.Title>{postData.likes} Likes</Card.Title>
        <Card.Text>
          {postData.caption}
        </Card.Text>
      </Card.Body>
    </Card>
    </>
  );
}

export default OwnPostCard;