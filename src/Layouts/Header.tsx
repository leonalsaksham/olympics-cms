import React, { useEffect, useState } from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useNavigate } from 'react-router';

function Header() {
    const [isAdmin, setIsAdmin] = useState(true)
    const navigate = useNavigate()

    useEffect(() => {
        if (localStorage.getItem("token")) {
            setIsAdmin(true)
        } else if (!localStorage.getItem("token")) {
            setIsAdmin(false)
            navigate("/login");
        } else {}
    }, [isAdmin])
    return (
        <Navbar bg="light" expand="lg" className={`${isAdmin ? 'cms-navbar' : 'd-none'}`}>
            <Container fluid>
                <Navbar.Brand href="#home">Fun Olympic - CMS</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <NavDropdown align={'start'} title={<i className="fa-solid fa-circle-user me-2"></i>} id="basic-nav-dropdown">
                            <NavDropdown.Item href="/login" onClick={() => localStorage.removeItem("token") }>Logout <i className="ms-3 fa-solid fa-arrow-right-from-bracket"></i></NavDropdown.Item>
                            {/* <NavDropdown.Item href="#action/3.2">
                                Another action
                            </NavDropdown.Item> */}
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header