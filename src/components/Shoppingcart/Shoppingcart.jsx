import React, { Component } from 'react';

const Shoppingcart = ({ items, total, addToShoppingcart, removeFromCShoppingcart }) => {
  return (
      <div>
          <h3>Shopping Cart</h3>
          <div className="Shopping Cart">
                        {items.length > 0 && (
                            <div className="shoppingcart__body">
                                {items.map(item => (
                                    <><items key={item.id} {...item} onClick={() => removeFromCShoppingcart(item.id)} /><items key={items.id} {...item} onClick={() => addToShoppingcart(item.id)} /></>
                                    ))}
                                </div>
                            )}
                            {items.length === 0 && (
                                <div className="alert alert-info">Cart is empty</div>
                            )}
                            <div className="shoppingcart__total">Total: {total} </div>
                        </div>
                        </div>
                        
                    
             
        );
    }
                
            
          


  export default Shoppingcart;





