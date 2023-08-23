/*
Ticket list in vertical view. Separates active and inactive tickets,
ordering the active tickets by oldest to newest, amd the inactive
tickets by newest to oldest
*/

import React from 'react';
import TicketListElement from './TicketListElement';
import "./css/TicketListVertical.css";

function TicketListVertical ({tickets, onComplete, onDelete}) {

    // filter out inactive tickets
    let activeTickets = [...tickets].filter(function (ticket) {
        return ticket.active;
    });

    let inactiveTickets = [...tickets].filter(function (ticket) {
        return !ticket.active;
    })

    return (
        <div class="ticketListVertical">
            <ul class="list-group list-group-flush">
                {[...activeTickets].map((ticket, i) => <TicketListElement 
                    ticket={ticket}
                    onComplete={onComplete}
                    onDelete={onDelete}
                    active="true"
                    key={i} />)}
            </ul>
            <ul  class="list-group list-group-flush">
                {[...inactiveTickets].reverse().map((ticket, i) => <TicketListElement 
                    ticket={ticket}
                    onComplete={onComplete}
                    onDelete={onDelete}
                    active="false"
                    key={i} />)}
            </ul>
        </div>
    );
}

export default TicketListVertical;