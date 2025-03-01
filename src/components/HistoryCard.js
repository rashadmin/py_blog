import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {NavLink} from 'react-router-dom';
import { FaAngleRight } from 'react-icons/fa'; 
function HistoryCard(props) {
  return (
    <Card bg="tertiary" className='history_card'>
      <Card.Header className='d-flex justify-content-between align-items-center'>
        <Button style={{ backgroundColor:'#108d9f',border:'none' }}>Post {props.id}</Button>

        <Button variant={props.status==='Completed' ? 'success' : 'warning'}>{props.status}</Button>
      </Card.Header>
      <Card.Body>
        <Card.Text>
         {props.title} <br/>
         <small>{props.timestamp}</small>
        </Card.Text>
        <Button style={{ backgroundColor:'#108d9f',border:'none' }} as={NavLink} to={`/Blog/${props.id}`} className="fixed justify-content-end align-content-center" >Open <FaAngleRight size={20} /></Button>
      </Card.Body>
    </Card>
  );
}

export default HistoryCard;