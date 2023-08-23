/*
ItemOnTicket.js Component
Renders within the TicketItems.js component of a Ticket.js Component
*/

import React from 'react';
import './css/ItemSmallView.css'

function ItemOnTicket(item) {
    return (
        <li>
            {item.item.item_name}
            <ul>
                <p className="mod">{item.item.mods}</p>
            </ul>
        </li>
    )
}

export default ItemOnTicket;