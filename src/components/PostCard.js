import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Collapse from 'react-bootstrap/Collapse';
import Stack from 'react-bootstrap/Stack';
// imporfrom 'react-bootstra;
import { FaAngleDown, FaAngleUp } from 'react-icons/fa'; // Font Awesome icons
function PostCard(props) {
  const [buttonText, setButtonText] = useState("Copy");
  const [open, setOpen] = useState(false); // State to manage collapse


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

  const truncatedContent = props.content.length > 10 && !open
  ? props.content.substring(0, 100) + "..."
  : props.content;

  return (
    <Card bg="tertiary" className="post_card">
      <Card.Header className='d-flex justify-content-between align-items-center'>
        <h3>
      {props.title}
        </h3>
        <h4>
      {props.media}
        </h4>
      </Card.Header>
      <Card.Body>
        {/* <Stack> */}
        <div className='d-flex justify-content-between align-items-center btn-gap'>
        <div>

        <Collapse in={open}>
          <div id="collapse-content" className="mt-3">
            {truncatedContent}
            </div>
          </Collapse>
          {!open && truncatedContent}
        </div>           
        <div className="d-flex justify-content-end align-items-center btn-gap">
          <Button className="fixed" variant="success" onClick={buttonText === "Copy" && handleButtonClick}>
            {buttonText}
          </Button>
          <Button variant="link" onClick={toggleCollapse} aria-controls="collapse-content" aria-expanded={open} style={{ textDecoration: "none" }}>
             {open ? <FaAngleUp size={20} /> : <FaAngleDown size={20} />}
          </Button>
        </div>
        
        </div>


        {/* </Stack> */}
      </Card.Body>
    </Card>
  );
}

export default PostCard;
