import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useState } from 'react';
import InputField from './InputField';
import ChatBox from './ChatBox';
import CopyCard from './Copy';
import Spinner from 'react-bootstrap/Spinner'

const TextBox = () => {

const generateRandomValue = () => (Math.random() < 0.2 ? "OK" : "Not OK");
const [buttonText, setButtonText] = useState("Generate");
const [chatCmd, setChatCmd] = useState(null);
const [formErrors, setFormErrors] = useState({});
const [showExtraComponent, setShowExtraComponent] = useState(false);
const [data,setData] = useState({title:'',description:'qwertyuiopasdfghjklzxcvbnm'})
const medias   = ['X','LinkedIn','Facebook']
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

  const onChange = (ev) =>{setData({...data,title:ev.target.value})}
  const onSubmit = (ev) => {
    ev.preventDefault();
    console.log(ev.target.value,'jdjjdjdjdjd')
    
    console.log('handle form here');
  };
  return (
    chatCmd === 'Next' ?
    <>
    {console.log(data)}
    {medias.map((media) => <CopyCard title={data['title']} media={media} content={data.description}/>)}
    </>
    :
    <>
    {console.log(data)}
    {showExtraComponent && <ChatBox/>}
    {/* {chatCmd !== "Next" && chatCmd !== null && <ChatBox />} */}
    <div className='textarea'>
      <Container>
        {/* <Row className="justify-content-center">
          <Col xs={12} md={8} lg={6} className="textbox" > */}
          <Form onSubmit={onSubmit} className="d-flex">
          <InputField
          name="chat" placeholder="Enter Your Message"
          error={formErrors.username} onChange={onChange}/>
          <Button type="submit" variant={(buttonText==="Generate"||buttonText==="Generating")?"primary":buttonText==="Success" ?"success":"warning"} className='button' onClick={handleButtonClick}>
          {buttonText==="Generating" && <Spinner as="span" animation="grow" size="sm" role="status" aria-hidden="true"/>} {buttonText}
          </Button>
          </Form>
          {/* </Col>
        </Row> */}
      </Container>
    </div>
          </>
  );
};

export default TextBox;
