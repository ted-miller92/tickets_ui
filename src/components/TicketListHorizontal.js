/*
TicketList.js Component
Horizontal Scroll menu component for rendering  active tickets
*/

import React from 'react';
import Ticket from './Ticket';
import './css/TicketListHorizontal.css';

function TicketListHorizontal({tickets, onComplete}) {
    // filter out inactive tickets
    let activeTickets = tickets.filter(function (ticket) {
        return ticket.active;
    });
    
    return (
        <div className="horizontalScrollMenu">
            {activeTickets.map((ticket, i) => <Ticket 
                ticket={ticket}
                onComplete={onComplete}
                key={i} />)}
        </div>
    )
}

export default TicketListHorizontal;