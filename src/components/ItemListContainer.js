import React from 'react';
import ItemCount from './ItemCount';


export const ItemListContainer = (props) => {
        return (<div>
                    
                    <h1 style={{border: `10px solid ${props.color}`}}>Nuestros Productos en Stock, proximamente...</h1>
                    <ItemCount></ItemCount>
                </div>);
        };
