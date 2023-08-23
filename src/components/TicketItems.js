/*
TicketItems.js
An ordered list of the items to be rendered as part of a Ticket.js component
*/

import React from 'react';
import ItemOnTicket from './ItemOnTicket';
import './css/TicketItems.css';

function TicketItems( {ticket_items}) {
    return (
        <ol>
            {ticket_items.map((item, i) => <ItemOnTicket item={item} key={i} />)}
        </ol>
    );
}

export default TicketItems;