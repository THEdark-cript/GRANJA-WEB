import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { GiChicken } from "react-icons/gi";
import { Link } from 'react-router-dom';

function Header() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary fixed-top py-0">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <GiChicken size={24} style={{ marginRight: '30px' }} />
          GRANJA-FRANGOS
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/route1">Galpões</Nav.Link>
            <Nav.Link as={Link} to="/route2">Estudantes</Nav.Link>
            <NavDropdown title="Mais opções" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/action1">Action</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/action2">Another action</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/action3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/action4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
