import axios from 'axios';
import React, { Fragment, useEffect, useState } from 'react';

export default Shoppingcart = (props) => {

  const { total, removeFromShoppingcart } = props
  const [shopCartData, setShopCartData] = useState([])


  const getProdsByUser = async () => {
    let jwt = localStorage.getItem("token")

    try {
      let response = await axios.get('https://localhost:44394/api/shoppingcart', { hearders: { Authorization: ' Bearer' + jwt } }) // add authorization
      setShopCartData(response.data)
    } catch (err) {
      console.log("Error in api call to shopping cart", err)
    }

  }

  useEffect(() => {
    getProdsByUser()
  }, [])

  const handleClick = (shopCartData) => {
    alert("delete products : ", shopCartData)
  }


  return (
    <Fragment>
      <h3>Shopping Cart</h3>
      <div className="Shopping Cart">

        <table>
          <thead>
            <th>Qty</th>
            <th>Actions</th>
          </thead
          <tbody>
            {shopCartData.length > 0 && (
              <div className="shoppingcart__body">
                {shopCartData.map((item, index) => (
                  <tr key={index}>
                    <td>{item.quantity}</td>
                    <td>
                      <button
                        type='button'
                        onClick={() => handleClick(shopCartData)}
                      >Delete</button>
                    </td>
                  </tr>
                ))
                }
              </div>
            )}
          </tbody>
        </table>
        {shopCartData.length === 0 && (
          <div className="alert alert-info">Cart is empty</div>
        )}
        <div className="shoppingcart__total">Total: {total} </div>
      </div>
    </Fragment>
  )
}


