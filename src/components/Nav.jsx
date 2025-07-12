import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaUserCircle, FaProjectDiagram, FaInfoCircle, FaFileDownload } from 'react-icons/fa';

function BasicExample() {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Orbitron:wght@500&display=swap"
        rel="stylesheet"
      />
      <style>{`
        .tesla-font {
          font-family: 'Orbitron', sans-serif;
        }
      `}</style>

      <Navbar
        bg="black"
        expand="lg"
        className='position-sticky fixed-top'
      
      >
        <Container>
          <Navbar.Brand
            href="#home"
            
            className='text-white  tesla-font'
          >
            P R I N C E
            
          </Navbar.Brand>
          
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto  bolder tesla-font">
              <Nav.Link
                href="#social"
                className='rounded btn  text-white   mx-2'
              >
                <FaUserCircle className='me-2 ' />MY SOCIAL
           
              </Nav.Link>
              <Nav.Link
                href="#project"
                className='rounded btn  text-white  mx-2'
              >
                <FaProjectDiagram className='me-2' />PROJECTS
              </Nav.Link>
              <Nav.Link
                href="#about"
                className='rounded btn  text-white  mx-2'
              >
                <FaInfoCircle className='me-2' />ABOUT 
              </Nav.Link>
              <Nav.Link
                href="https://drive.google.com/drive/folders/1N-StDJIWtXXxw0DyBJsBfhLJmE-2n_Ua?usp=share_link"
                className='rounded btn  text-white  mx-2'
              >
                <FaFileDownload className='me-2' />MY RESUME 
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default BasicExample;