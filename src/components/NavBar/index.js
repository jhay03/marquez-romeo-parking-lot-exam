import Navbar from "react-bootstrap/Navbar";

const NavBar = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">
          <h4>
            Object-Oriented <span class="badge bg-secondary">Mall</span>
          </h4>
        </Navbar.Brand>
      </Navbar>
    </>
  );
};

export default NavBar;
