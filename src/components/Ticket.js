/* 
Ticket.js Component
A ticket that is to be rendered within the TicketList.js component
*/

import React from 'react';
import TicketItems from './TicketItems';
import './css/Ticket.css';

function Ticket ({ticket, onComplete}){
    const ticket_class = ticket.active === true ? "active" : "inactive";
    const ticket_items = ticket.ticket_items;

    return (
        <div className={`card m-2 ticket ${ticket_class}`}>
            <h2 className="card-header">{ticket.cust_name}</h2>
            <button className="btn btn-primary m-2" type="button" onClick= {() => onComplete(ticket._id)}>Mark Complete</button>
            <div className="card-body">
                <TicketItems ticket_items={ticket_items} />
            </div>
            <div className="card-footer">
                <p className="card-text">{ticket.time}</p>
                <p className="card-text text-muted">{ticket.date}</p>
            </div>
        </div>
    );
}

export default Ticket;