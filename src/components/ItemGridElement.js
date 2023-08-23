/*
ItemGridElement.js
Renders an individual item as part of the ItemsGridView.js component
*/
import React from "react";
import "./css/ItemGridElement.css";

function ItemGridElement({item, onSoldOut, onDelete}) {
    // is an item sold out?
    const item_sold_out = item.sold_out ? "soldOut" : "";
    const sold_out_msg = item.sold_out? "Sold Out" : "";

    return (
        <div className={"card m-2"}>
            <h2 className={`card-header ${item_sold_out}`}>{item.item_name}</h2>
            <h2 className="card-header warningOverlay">{sold_out_msg}</h2>
            <div className="card-body">
                <p className="card-text">${item.price}</p>
                
                <div className="btn-group">
                    <button className="btn btn-outline-primary" type="button">Update</button>
                    <button className="btn btn-outline-primary" type="button" onClick= {() => onSoldOut(item._id)}>Sold Out</button>
                    <button className="btn btn-outline-danger" type="button" onClick= {() => onDelete(item._id)}>Delete</button>
                </div>
            </div>
            
        </div>
    )
}

export default ItemGridElement;