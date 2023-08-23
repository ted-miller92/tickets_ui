/*
ItemsGridView.js Component
Renders a grid view of the items in the database
*/

import React from "react";
import ItemGridElement from './ItemGridElement';
// import "./css/ItemsGridView.css";

function ItemsGridView({items, onSoldOut, onDelete}) {
    return (
        <>
            <div className="d-flex flex-wrap">
                {items.map((item, i) => <ItemGridElement
                    item={item}
                    onSoldOut={onSoldOut}
                    onDelete={onDelete}
                />)}
            </div>
        </>
    )
}

export default ItemsGridView;