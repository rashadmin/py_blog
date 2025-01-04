import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import TextBox from './TextBox';
function ChatBox(props) {
  // const [messages, setMessages] = useState([]);


  // const handleInputChange = (e) => setter(e.target.value);

  return (
    <Container>
      {/* <h2></h2> */}
              <div className='chatbody' >
                {props.messages.map((msg, index) => (
                  <div className={msg.sender === "User"? 'right': 'left'} key={index}>
                    <strong>{msg.sender}:</strong> {msg.text}
                  </div>))}
              </div>
              {/* {console.log(props.input)} */}
              {console.log(props.messages)}
              {/* <TextBox/> */}
              {/* <Form>
                <Form.Group className="d-flex">
                  <Form.Control type="text" placeholder="Type a message..." value={input} onChange={handleInputChange}/>
                  <Button
                    variant="success"
                    className="ms-2"
                    onClick={handleSendMessage}>
                    Send
                  </Button>
                </Form.Group>
              </Form> */}
    </Container>
  );
}

export default ChatBox;
