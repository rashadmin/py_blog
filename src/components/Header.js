import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav  from 'react-bootstrap/Nav';
import { NavLink,Link } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Header() {
  return (
    <Navbar collapseOnSelect className='header' expand="md" data-bs-theme="dark">
      <Container>
      <Navbar.Brand as={Link} to="/home">Py's Blog</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
            
          <Nav className="me-auto my-2 my-lg-0" navbarScroll >
            <Nav.Link as={NavLink} to="/home" end>Home</Nav.Link>
            <Nav.Link as={NavLink} to="/blog">Blog</Nav.Link>
            <Nav.Link as={NavLink} to="/history">History</Nav.Link>
          </Nav>
          <div className='d-flex drop'>

          <Navbar.Text>
            Signed in as: 

          </Navbar.Text>
          <NavDropdown style={{ backgroundColor:'#108d9f',border:'none' }} title="Py_Sama" id="navbarScrollingDropdown" >
                <NavDropdown.Item as={NavLink} to="/Profile">Profile</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={NavLink} to="/logout">Log out</NavDropdown.Item>         
        </NavDropdown>
          </div>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;