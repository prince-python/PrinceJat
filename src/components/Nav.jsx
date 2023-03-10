import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function BasicExample() {
  return (
    <Navbar bg="primary" expand="lg" className='position-sticky fixed-top' style={{boxShadow:"0px 0px 50px black"}} >
      <Container>
        <Navbar.Brand href="#home" style={{fontFamily:"cursive" }} className='text-black shadow-lg'>FULL STACK WEB DEVLOPER</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto text-black">
            <Nav.Link href="#social" className='text-black shadow-lg' >MY SOCIAL</Nav.Link>
            <Nav.Link href="#hobbies" className='text-black shadow-lg' >HOBBIES</Nav.Link>
            <Nav.Link href="#project" className='text-black shadow-lg' >PROJECTS</Nav.Link>
            <Nav.Link href="#about" className='text-black shadow-lg' >ABOUT</Nav.Link>
            <Nav.Link href="https:drive.google.com/file/d/16HV4GRa41GPSU6QJwa6ilmB8uZzpPhhp/view?usp=sharing" className='text-black'>MY RESUME</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;