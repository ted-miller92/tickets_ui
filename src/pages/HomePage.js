/*
Main/Home page of the Tickets application. From here the user can navigate to:
- tickets view
- items view
- new ticket
*/

import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
    return (
        <div className="container">
            <h1>Tickets Home</h1>

            <div className="row row-cols-1 row-cols-md-2 g-4">
                <div className="col">
                    <Link className="card" id="ticketsViewLink" to="/tickets">
                        <h2 className="card-header text-white bg-primary">Tickets</h2>
                        <div className="card-body">
                            <p className="card-text">See all current tickets</p>
                        </div>
                    </Link>
                </div>

                <div className="col">
                    <Link className="card" id="itemsViewLink" to="/items">
                        <h2 className="card-header text-white bg-primary">Items</h2>
                        <div className="card-body">
                            <p className="card-text">View, edit, add or delete menu items</p>
                        </div>
                    </Link>
                </div>

                <div className="col">
                    <Link className="card" id="newTicketLink" to="/new_ticket">
                        <h2 className="card-header text-white bg-primary">New Ticket</h2>
                        <div className="card-body">
                            <p className="card-text">Create a new ticket</p>
                        </div>
                    </Link>
                </div>

                <div className="col">
                    <Link className="card" id="newItemLink" to="/new_item">
                        <h2 className="card-header text-white bg-primary">New Item</h2>
                        <div className="card-body">
                            <p className="card-text">Create a new menu item</p>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default HomePage;