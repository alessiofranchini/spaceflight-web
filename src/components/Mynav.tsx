import { Navbar, Container, Nav } from "react-bootstrap";

const MyNav = () => {
  return (
    <Navbar bg="dark" variant="light" fixed="top">
      <Container>
        <Navbar.Brand href="#home" className="text-light">SPACEFLIGHTNEW</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#news" className="text-light">HOME</Nav.Link>
          <Nav.Link href="#opinion" className="text-light">NEW ARCHIVE</Nav.Link>
          <Nav.Link href="#civil" className="text-light">LAUNCH SCHEDULE</Nav.Link>
          <Nav.Link href="#commercial" className="text-light">MISSION REPORTS</Nav.Link>
          <Nav.Link href="#military" className="text-light">MEMBERS</Nav.Link>
          <Nav.Link href="#sponsored" className="text-light">SHOP</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default MyNav;