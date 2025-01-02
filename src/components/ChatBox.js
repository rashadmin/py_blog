import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import TextBox from './TextBox';
function ChatBox() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleSendMessage = () => {
    if (input.trim()) {
      setMessages([...messages, { sender: "User", text: input }]);
      setInput(""); // Clear the input
      // Simulate agent response
      setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          { sender: "Agent", text: "Okay! I’ve received your message." },
        ]);
      }, 1000);
    }
  };

  const handleInputChange = (e) => setInput(e.target.value);

  return (
    <Container className="chatbox mt-5">
          <Card>
            <Card.Header className="bg-primary text-white">ChatBox</Card.Header>
            <Card.Body>
              <div className='chatbody' >
                {messages.map((msg, index) => (
                  <div className={msg.sender === "User"? 'right': 'left'} key={index}>
                    <strong>{msg.sender}:</strong> {msg.text}
                  </div>))}
              </div>
              <TextBox/>
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
            </Card.Body>
          </Card>
    </Container>
  );
}

export default ChatBox;
