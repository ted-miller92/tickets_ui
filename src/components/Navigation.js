/*
Navigation.js Component
Simple navigation component
*/

import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './css/Navigation.css';

function Navigation() {
    return (
        <nav className="nav nav-tabs nav-fill">
            <NavLink className="nav-link" to="/">Home</NavLink>
            <NavLink className="nav-link" to="/tickets">Tickets</NavLink>
            <NavLink className="nav-link" to="/new_ticket">New Ticket</NavLink>
            <NavLink className="nav-link" to="/items">Items</NavLink>
            <NavLink className="nav-link" to="/new_item">New Item</NavLink>
        </nav>
    );
}

export default Navigation;