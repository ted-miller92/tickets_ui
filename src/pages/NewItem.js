/*
NewItem.js
This page has a form which allows users to create a new menu item
*/

import React from "react";
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

function NewItem(){
    const navigate = useNavigate();

    const [item_name, setItemName] = useState('');
    const [price, setPrice] = useState('');
    const [sold_out, setSoldOut] = useState(false);

    const createItem = async () => {
        const newItem = {item_name, price, sold_out}

        // make a POST req to API
        const response = await fetch('api/items', {
            method: "POST",
            body : JSON.stringify(newItem),
            headers: {
                "content-type": "application/json"
            }
        });

        if (response.status === 201){
            alert("Added new item");
            navigate("/items");
        } else {
            alert("New item not added. Check required fields");
        }
    }

    function handleCancel() {
        const cancel = window.confirm("Cancel? Item will not be saved");
        if (cancel){
            navigate("/");
        }
    }

    return (
        <div className="container">
            <h1>New Item</h1>
            <div>
                <form className="form-control" method="POST" action="api/items">
                    <div className="row m-2">
                        <div className="col-auto">
                            <input
                                className="form-control"
                                type="text" 
                                name="item_name" 
                                id="item_name"
                                placeholder="Item Name"
                                onChange={e => setItemName(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="row m-2">
                        <div className="col-auto">
                            <input
                                className="form-control"
                                type="number"
                                name="price"
                                id="price"
                                placeholder="Price"
                                onChange={e => setPrice(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="row m-2">
                        <div className="col-auto btn-group">
                            <button className="btn btn-primary btn-lg" type="button" onClick = {() => createItem()}>Create Item</button>
                            <button className="btn btn-outline-secondary btn-lg" type="button" onClick = {() => handleCancel()}>Cancel</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default NewItem;
