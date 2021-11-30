import React, { Component } from 'react';
import { Link as RouterLink } from "react-router-dom";

const ShoppingCart = ({ items, total, removeFromCart }) => {
  return (
      <div>
          <h3>Shopping Cart</h3>

          
                      {items.length > 0 && (
                          <div className="cart__body">
                              {items.map(item => (
                                  <item key={item.id} {...item} onClick={() => removeFromCart(item.id)} />
                              ))}
                          </div>
                      )}
                      {items.length === 0 && (
                          <div className="alert alert-info">Cart is empty</div>
                      )}
                      <div className="cart__total">Total: {total}</div>
                  </div>
         
  );
  }

  export default ShoppingCart;





