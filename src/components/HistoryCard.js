import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {NavLink} from 'react-router-dom';
function HistoryCard() {
  return (
    <Card bg="tertiary" className='history_card'>
      <Card.Header>Post</Card.Header>
      <Card.Body>
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.
          With supporting text below as a natural lead-in to additional content.
          With supporting text below as a natural lead-in to additional content.
          With supporting text below as a natural lead-in to additional content.
        </Card.Text>
        <Button as={NavLink} to="/Blog" className="fixed justify-content-end" variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default HistoryCard;