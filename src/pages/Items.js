/*
Items.js
This page renders a view of all of the menu items
*/

import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ItemsGridView from '../components/ItemsGridView';

function Items() {
    const [items, setItems] = useState([])

    // Function to toggle sold out status of an item
    const onSoldOut = async _id => {
        const response = await fetch(`/api/items/toggle_sold_out/${_id}`, {method: 'PUT'});

        if (response.status === 200){
            loadItems();
        } else {
            console.log(`Failed to update sold out status for item with id ${_id}, 
                status code = ${response.status}`);
        }
    }

    // function to delete an item from the database
    const onDelete = async _id => {
        // confirm their choice
        const choice = window.confirm("Are you sure you want to delete this item?");

        if (choice){
            const response = await fetch(`/api/items/${_id}`, {method: 'DELETE'});
            
            if (response.status === 204){
                const newItems = items.filter(e => e._id !== _id);
                setItems(newItems);
            } else {
                console.log(`Failed to delete item with id: ${_id}, 
                    status code = ${response.status}`);
            }
        }
    }

    const loadItems = async () => {
        const response = await fetch('/api/items');
        const data = await response.json();
        setItems(data);
    }

    useEffect(() => {
        loadItems();
    }, []);

    return (
        <div className="container">
            <h1>Items</h1>
            <ItemsGridView 
                items={items}
                onSoldOut={onSoldOut}
                onDelete={onDelete}
            />

            <div className="container">
                <div className="row justify-content-md-center">
                    <Link className="btn btn-primary btn-lg m-2 col-auto" id="new_item" to="/new_item">New Item</Link>    
                </div>
            </div>
        </div>
    )
}

export default Items;