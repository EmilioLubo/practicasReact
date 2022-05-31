import {Navbar, Nav, Container, Button, ButtonGroup} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBolt} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
const NavBar = () =>{
    return(
            <Navbar bg="dark" variant="dark" expand="lg">
                <Container fluid>
                    <Navbar.Brand href="#home"><FontAwesomeIcon icon={faBolt} /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                    <Nav className="me-auto">
                        <Nav.Link>Home</Nav.Link>
                        <Nav.Link>Features</Nav.Link>
                        <Nav.Link>Pricing</Nav.Link>
                    </Nav>
                    <ButtonGroup className='gap-3'>
                        <Link to='/register'><Button variant="outline-primary">Registrarse</Button></Link>
                        <Link to='/login'><Button variant="outline-success">Iniciar Sesión</Button></Link>
                    </ButtonGroup>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
    );
}

export default NavBar;