import {Navbar,Nav,NavDropdown,Form,FormControl,Button} from 'react-bootstrap';

function Navbar_Component()
{
    return(<div>
        <Navbar bg="dark" variant="dark" expand="lg">
                <Navbar.Brand href="/">Shopping App</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">

                <Nav className="ml-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/Register">Register</Nav.Link>
                            <Nav.Link href="/Login">Login</Nav.Link>
                            <Nav.Link href="/Contact">Contact Us</Nav.Link>     
                </Nav>
                </Navbar.Collapse>
        </Navbar>
    </div>);

}

export default Navbar_Component;