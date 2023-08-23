/*
AddItemToTicket.js Component
This is a modal component that is part of the NewTicket.js page,
allows users to add items (with modifications) to the ticket
*/

import React from "react";
import { useState, useEffect } from 'react';
import "./css/AddItemToTicket.css";
import Select from "react-select";

function AddItemToTicket({setIsOpen, items, ticket_items, setTicketItems}) {
    // set state variables
    const [selectedItem, setSelectedItem] = useState();
    const [mods, setMods] = useState();

    // options for the select dropdown
    const options = items.map(item => ({
        value : JSON.stringify(item),
        label : item.item_name
    }));

    const handleChange = (selectedOption) => {
        setSelectedItem(JSON.parse(selectedOption.value));
    }

    function addToTicketHandler (){
        if (!selectedItem) {
            alert("Please select an item");
            return;
        }

        let itemName = selectedItem.item_name;
        let price = selectedItem.price;

        setTicketItems(
            // spread operator to add items to ticket_items array
            [                    
            ...ticket_items,
            {
                item_name: itemName,
                price: price,
                mods: mods
            }
        ],
        setIsOpen(false));
    }
    
    return (
        <>
            <div className="customModal">
                <h1>Add Item to Ticket</h1>
                <div className="form-control">
                    {/* the list of selectable items*/ }
                    
                    <div className="row m-2">
                        <div className="col-auto">
                        <label for="selectedItem">Choose an item: </label>
                        
                        </div>
                        <Select
                            options={options}
                            onChange={handleChange}/>
                    </div>
                    
                    <div className="row m-2">
                        <div className="col-auto">
                            <textarea
                                className="form-text"
                                name="mods"
                                value={mods}
                                rows="2"
                                cols="50"
                                placeholder="Modifications (optional)"
                                onChange={e => setMods(e.target.value)}>
                            </textarea>
                        </div>          
                    </div>
                    
                    <div className="row m-2">
                        <div className="col-auto btn-group">
                            <button className="btn btn-primary" type="button" onClick={() => addToTicketHandler()}>Add To Ticket</button>
                            <button className="btn btn-outline-secondary" type="button" onClick={() => setIsOpen(false)}>Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modalOverlay"></div>
        </>
    )
}

export default AddItemToTicket;