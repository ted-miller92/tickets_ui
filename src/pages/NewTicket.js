/*
NewTicket.js
This page has a form which allows users to create a new ticket
*/

import React from "react";
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import AddItemToTicket from "../components/AddItemToTicket";
import TicketItems from "../components/TicketItems";

function NewTicket() {
    const navigate = useNavigate();
    
    // user inputted promo code, not yet validated
    const [inputPromoCode, setInputPromoCode] = useState('');

    // items to display when choosing items for ticket
    const [items, setItems] = useState([]);

    // fields to POST when creating new ticket
    const [cust_name, setCustName] = useState();
    const [ticket_items, setTicketItems] = useState([]);
    const [promo_code, setPromoCode] = useState('N/A');
    const [active, setActive] = useState();

    // property for modal appearance when adding item to ticket
    const [isOpen, setIsOpen] = useState(false);

    // load only available items to display when adding item to ticket
    const loadItems = async () => {
        const response = await fetch('/api/available_items');
        const data = await response.json();
        setItems(data);
    }

    function handleCancel() {
        const cancel = window.confirm("Cancel? Ticket will not be saved");
        if (cancel){
            navigate("/");
        }
    }

    useEffect(() => {
        loadItems();
    }, []);

    // This function sends a GET request to the Code Tool's 
    // verify.py microservice to determine validity of a promo code
    const promoCodeValidation = async (inputPromoCode) => {
        const response = await fetch(`/code/code?code=${inputPromoCode}`, {
            method: "GET"
        }).then(response => {
            if (!response.ok) {
                alert("Unable to connect to Promo Code Tool");
                throw new Error(response.statusText);
            }
            return response.text();
        }).catch(error => {
            console.error("Error : ", error);
        });
        
        if (response === "Valid"){
            alert("Valid promo code will be applied");
            setPromoCode(inputPromoCode);
        } else if (response === "Not Valid") {
            alert("Promo code not valid");
        }
    }

    // This function sends a POST request to the tickets API,
    const createTicket = async (status) => {
        const newTicket = {cust_name, ticket_items, active, promo_code};

        // set active status
        setActive(status);

        // make a POST request to the API
        const response = await fetch('/api/tickets', {
            method: "POST",
            body: JSON.stringify(newTicket),
            headers: {
                'Content-Type' : 'application/json'
            }
        });

        if (response.status === 201) {
            // if everything is valid, notify user and redirect home
            alert("Added new ticket");
            navigate("/tickets");
        } else {
            // alert user that fields are not filled out
            alert("Fill out required fields");
        }
    }
    
    return (
        <div className="container">
            <h1>New Ticket</h1>
            <div>
                <form className="form-control" method="POST" action="/api/tickets">
                    <div className="row m-2">
                        <div className="col-auto">
                            <input
                            className="form-control"
                            type="text" 
                            name="cust_name"
                            placeholder="Customer Name"
                            id="cust_name" 
                            onChange={e => setCustName(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="row m-2">
                        <div className="col-auto">
                            <TicketItems ticket_items={ticket_items}/>
                        </div>
                    </div>

                    <div className="row m-2">
                        <div className="col-auto">
                        <button className="btn btn-primary" type="button" onClick={() => setIsOpen(true)}>Add Item to Ticket</button>
                        </div>
                    </div>

                    {isOpen && <AddItemToTicket 
                        setIsOpen={setIsOpen} 
                        items={items}
                        ticket_items={ticket_items}
                        setTicketItems={setTicketItems}
                        />}

                    <div className="row m-2">
                        <div className="col-auto">
                        <input
                            className="form-control"
                            type="text"
                            name="promo_code"
                            id="promo_code"
                            placeholder="Promo Code (optional)"
                            onChange={e => setInputPromoCode(e.target.value)}
                            />
                        </div>
                        <div className="col-auto">
                            <button className="btn btn-outline-primary" type="button" onClick = {() => promoCodeValidation(inputPromoCode)}>Apply Promo Code</button>
                        </div>
                    </div>

                    <div className="row m-2">
                        <div className="btn-group col-auto">
                            <button className="btn btn-success btn-lg" type="button" onClick = {() => createTicket(true)}>Send Ticket</button>
                            <button className="btn btn-outline-secondary btn-lg" type="button" onClick = {() => createTicket(false)}>Save for Later</button>
                            <button className="btn btn-outline-secondary btn-lg" type="button" onClick = {() => handleCancel()}>Cancel</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default NewTicket;