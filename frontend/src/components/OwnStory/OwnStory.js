import Card from 'react-bootstrap/Card';

function OwnStory(props) {
  let storyData = props.storyData;
  const styles = {
    roundCard:{ borderRadius:'50%',maxWidth: '10rem',minWidth: '8rem',minHeight:'9rem',border:'1px solid #FFD8E4',flexGrow:1},
    roundimg:{borderRadius:'50%',border: '3px solid #FFD8E4',maxWidth: '10rem',minWidth: '8rem',minHeight:'9rem'}
  }
  return (<>
    <Card style={styles.roundCard}>
      
      <Card.Img style={styles.roundimg} src={storyData.image} />

    </Card>
    </>
  );
}

export default OwnStory;