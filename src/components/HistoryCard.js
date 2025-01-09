import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {NavLink} from 'react-router-dom';
import { FaAngleRight } from 'react-icons/fa'; 
function HistoryCard(props) {
  return (
    <Card bg="tertiary" className='history_card'>
      <Card.Header className='d-flex justify-content-between align-items-center'>
        <h3>Post {props.id}</h3>

        <Button variant={props.status==='Completed' ? 'success' : 'warning'}>{props.status}</Button>
      </Card.Header>
      <Card.Body>
        <Card.Text>
         {props.title} <br/>
         <small>{props.timestamp}</small>
        </Card.Text>
        <Button as={NavLink} to={`/Blog/${props.id}`} className="fixed justify-content-end" variant="primary">Open <FaAngleRight size={20} /></Button>
      </Card.Body>
    </Card>
  );
}

export default HistoryCard;