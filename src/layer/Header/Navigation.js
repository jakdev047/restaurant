import React from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';

export const Navigation = () => {
    return (
        <Navbar dark color="dark">
            <div className="container">
                <NavbarBrand href="/">FoodMenu</NavbarBrand>
            </div>
        </Navbar>
    )
};
