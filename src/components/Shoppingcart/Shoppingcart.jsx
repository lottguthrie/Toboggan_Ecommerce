import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Shoppingcart = (props) => {
  
   const { total, removeFromCShoppingcart} = props
   const [ shopCartData, setShopCartData ] = useState([])


   const getProdsByUser = async () => {
    let jwt = localStorage.getItem("token")
    
    try {
      let response = await axios.get('https://localhost:44394/api/shoppingcart' , {hearders: {Authorization: ' Bearer' + jwt}} ) // add authorization
      setShopCartData(response.data)
    }  catch (err) {
      console.log("Error in api call to shopping cart", err)
    }

   }

   useEffect(() => {
    getProdsByUser()
   }, [])
   

  return (
      <div>
          <h3>Shopping Cart</h3>
          <div className="Shopping Cart">
                        {shopCartData.length > 0 && (
                            <div className="shoppingcart__body">
                                {shopCartData}.map(item = (
                                    <shopCartData key={shopCartData.id} {...shopCartData} onClick={() => removeFromCShoppingcart(shopCartData.id)} />
                                    ))
                                </div>
                            )}
                            {shopCartData.length === 0 && (
                                <div className="alert alert-info">Cart is empty</div>
                            )}
                            <div className="shoppingcart__total">Total: {total} </div>
                        </div>
                        </div>
                        
                    
             
        );
    }
                
            
          


  export default Shoppingcart;





