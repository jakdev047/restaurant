import React,{useState} from 'react';
import { NavLink } from 'react-router-dom';
import { Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem } from 'reactstrap';

export const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
    return (
        <Navbar dark color="dark" expand="md">
            <div className="container">
                <NavbarBrand href="/">FoodMenu</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem><NavLink to="/">Home</NavLink></NavItem>
                        <NavItem><NavLink to="/about">About</NavLink></NavItem>
                        <NavItem><NavLink to="/contact">Contact</NavLink></NavItem>
                    </Nav>
                </Collapse>
            </div>
        </Navbar>
    )
};
