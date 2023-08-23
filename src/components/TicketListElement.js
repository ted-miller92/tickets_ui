/*
Ticket element in a list view. Includes buttons for editing, toggling active
status and deleting
*/

import React from 'react';

function TicketListElement ({ticket, onComplete, onDelete}) {
    let custName = ticket.cust_name;
    let date = ticket.date;
    let time = ticket.time;
    let classModifier = "primary"
    if (!ticket.active){
        classModifier = "secondary"
    }
    
    return (
        <li className={`list-group-item list-group-item-${classModifier}`}>
            <div className="row">
                <span className="col-2">{time}</span>
                <span className="col-2">{date}</span>
                <span className="col-5" >{custName}</span>

                <div className="btn-group col-3">
                    <button className="btn btn-outline-primary">See Items</button>
                    <button className="btn btn-outline-primary" type="button" onClick= {() => onComplete(ticket._id)}>Toggle Active</button>
                    <button className="btn btn-outline-danger" type="button" onClick= {() => onDelete(ticket._id)}>Delete</button>
                </div>
            </div>
        </li>
    );
}

export default TicketListElement;