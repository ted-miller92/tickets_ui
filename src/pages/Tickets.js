/*
Tickets.js
The main view that renders the active tickets
*/

import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import TicketListHorizontal from '../components/TicketListHorizontal';
import TicketListVertical from "../components/TicketListVertical";
import './css/Tickets.css';

function Tickets() {
    const [tickets, setTickets] = useState([]);

    const onComplete = async _id => {
        // Confirm choice
        const choice = window.confirm("Are you sure you want to change active status?");

        if (choice){
            const response = await fetch(`/api/tickets/toggle_active/${_id}`, {method: 'PUT'});
        
            if (response.status === 200) {
                const newTickets = tickets.filter(e => e._id !== _id);
                loadTickets();
            } else {
                console.log(`Failed to toggle active status for ticket with id= ${_id}, 
                status code = ${response.status}`);
            }
        }
    }

    const onDelete = async _id => {
        // Confirm choice
        const choice = window.confirm("Delete this ticket? There is no recovering the ticket after deletion");

        if (choice) {
            const response = await fetch(`/api/tickets/${_id}`, {method: 'DELETE'});
            
            if (response.status === 204){
                loadTickets();
            } else {
                console.log(`Failed to delete item with id: ${_id}, 
                    status code = ${response.status}`);
            }
        }
    }

    const loadTickets = async () => {
        const response = await fetch('/api/tickets');
        const data = await response.json();
        setTickets(data);
    }

    useEffect(() => {
        loadTickets()
    }, []);

    return (
        <>
            <div className="container">
                <h1>Active Tickets</h1>
            </div>

            <TicketListHorizontal
                tickets={tickets}
                onComplete={onComplete}>
            </TicketListHorizontal>

            <div className="container">
                <div className="row justify-content-md-center">
                    <Link className="btn btn-primary btn-lg m-2 col-auto" id="newTicketLink" to="/new_ticket">New Ticket</Link>    
                </div>
            </div>

            <div className="container">
                <h2>Ticket List</h2>
                <p>Active tickets are listed first</p>
                <TicketListVertical
                    tickets={tickets}
                    onComplete={onComplete}
                    onDelete={onDelete}>
                </TicketListVertical>
            </div>
        </>
    );
}

export default Tickets;