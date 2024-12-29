import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Collapse from 'react-bootstrap/Collapse';
import Stack from 'react-bootstrap/Stack';
// imporfrom 'react-bootstra;
import { FaAngleDown, FaAngleUp } from 'react-icons/fa'; // Font Awesome icons

function CopyCard(props) {
  const [buttonText, setButtonText] = useState("Generate");
  const [open, setOpen] = useState(false); // State to manage collapse


  const handleGenerateButtonClick = () => {
    setButtonText("Copy");
  };

  const handleButtonClick = () => {
    navigator.clipboard.writeText(props.content).then(
      () => {
        setButtonText("Copied!"); // Temporarily change button text
        setTimeout(() => setButtonText("Copy"), 2000); // Reset text after 2 seconds
      },
      (err) => {
        console.error("Failed to copy text: ", err);
      }
    );
  };
  const toggleCollapse = () => {
    setOpen(!open);
  };

  return (
    <Card bg="tertiary" className="copy_card">
      <Card.Header>{props.title}</Card.Header>
      <Card.Body>
        {/* <Stack> */}
        <div className='first-part'>

        <Card.Title>{props.media}</Card.Title>
        <div className="d-flex justify-content-between align-items-center">
          <Button className="fixed j" variant="success" onClick={buttonText === "Generate" ? handleGenerateButtonClick : handleButtonClick}>
            {buttonText}
          </Button>
          <Button variant="link" onClick={toggleCollapse} aria-controls="collapse-content" aria-expanded={open} style={{ textDecoration: "none" }}>
             {open ? <FaAngleUp size={20} /> : <FaAngleDown size={20} />}
          </Button>
        </div>
        </div>
        
        <Card.Text>

        <Collapse in={open}>
          <div id="collapse-content" className="mt-3">
            <p>
            {props.content}
            </p>
          </div>
        </Collapse>
        </Card.Text>           


        {/* </Stack> */}
      </Card.Body>
    </Card>
  );
}

export default CopyCard;
