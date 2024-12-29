import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {NavLink} from 'react-router-dom';
function HistoryCard(props) {
  return (
    <Card bg="tertiary" className='history_card'>
      <Card.Header>Post {props.id}</Card.Header>
      <Card.Body>
        <Card.Text>
         {props.title} <br/>
         <small>{props.timestamp}</small>
        </Card.Text>
        <Button as={NavLink} to="/Blog  " className="fixed justify-content-end" variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default HistoryCard;