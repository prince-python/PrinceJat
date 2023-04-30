import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';




function BasicExample() {
  return (
    <Navbar bg="primary" expand="lg" className='position-sticky fixed-top' 
    style={{boxShadow:"0px 0px 100px black",}} >
    <Container>
      <Navbar.Brand href="#home" style={{fontFamily:"cursive",textShadow:"0px 0px  100px black" }} className=' text-black '>FULL STACK WEB DEVLOPER</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto text-black bolder">
          <Nav.Link href="#social"className='shadow-lg rounded text-black mx-5 ' 
           >MY SOCIAL</Nav.Link>
          <Nav.Link href="#hobbies" className='shadow-lg rounded text-black mx-5 ' >HOBBIES</Nav.Link>
          <Nav.Link href="#project" className='shadow-lg rounded text-black mx-5 ' >PROJECTS</Nav.Link>
          <Nav.Link href="#about" className='shadow-lg rounded text-black mx-5 ' >ABOUT</Nav.Link>
          <Nav.Link href="https://drive.google.com/drive/folders/1N-StDJIWtXXxw0DyBJsBfhLJmE-2n_Ua?usp=share_link" className='shadow-lg rounded btn btn-outline-primary text-black mx-5'>MY RESUME</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  );
}

export default BasicExample;