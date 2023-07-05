import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';




function BasicExample() {
  return (
    <Navbar bg="black" expand="lg" className='position-sticky  fixed-top' 
    style={{boxShadow:"0px 0px 10px white",}} >
    <Container>
      <Navbar.Brand href="#home" style={{fontFamily:"Lilita One",boxShadow:"0px 0px  10px white" }} className=' rounded-2 p-2 text-white '>FULL STACK WEB DEVLOPER</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto text-white bolder">
          <Nav.Link href="#social"className=' rounded btn btn-outline-light text-white mx-5 ' 
           >MY SOCIAL</Nav.Link>
          
          <Nav.Link href="#project" className=' rounded btn btn-outline-light text-white mx-5 ' >PROJECTS</Nav.Link>
          <Nav.Link href="#about" className=' rounded btn btn-outline-light text-white mx-5 ' >ABOUT</Nav.Link>
          <Nav.Link href="https://drive.google.com/drive/folders/1N-StDJIWtXXxw0DyBJsBfhLJmE-2n_Ua?usp=share_link" className='rounded btn btn-outline-light text-white mx-5'>MY RESUME</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  );
}

export default BasicExample;