import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useState } from 'react';
import InputField from './InputField';
import ChatBox from './ChatBox';
const TextBox = () => {

const generateRandomValue = () => (Math.random() < 0.5 ? "OK" : "Not OK");
const [buttonText, setButtonText] = useState("Generate");
const [chatCmd, setChatCmd] = useState(null);
const [formErrors, setFormErrors] = useState({});
const [showExtraComponent, setShowExtraComponent] = useState(false);

const handleButtonClick = () => {
  setButtonText("Generating"); // Step 1: Change to "Generating"
  setTimeout(() => {
    const result = generateRandomValue(); // Generate random value
    if (result === "OK") {
      setButtonText("Success"); // Step 2: Change to "Success"
      setTimeout(() => {
        setChatCmd("Next"); // Open new component
      }, 2000);
    } else {
      setButtonText("Not yet"); // Step 2: Change to "Not yet"
      setTimeout(() => {
        setButtonText("Generate"); // Reset button text
        setShowExtraComponent(true); // Add another component
      }, 2000);
    }
  }, 3000);
};

  const onSubmit = (ev) => {
    ev.preventDefault();
    console.log('handle form here');
  };
  return (
    chatCmd === 'Next' ?
    <h1>Generate PAGE</h1>:
    <>
    {showExtraComponent && <ChatBox/>}
    {/* {chatCmd !== "Next" && chatCmd !== null && <ChatBox />} */}
    <div className='textarea'>
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} md={8} lg={6} className="textbox" >
          <Form onSubmit={onSubmit} className="d-flex">
          <InputField
          name="chat" placeholder="Enter Your Message"
          error={formErrors.username} />
          <Button type="submit" variant="primary" className='button' onClick={handleButtonClick}>
            {buttonText}
          </Button>
          </Form>
          </Col>
        </Row>
      </Container>
    </div>
          </>
  );
};

export default TextBox;
