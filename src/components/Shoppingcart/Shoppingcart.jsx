import React from 'react';
import ReactDOM from 'react-dom';

function Product(props) {
  return <li>{ props.brand }</li>;
}

function ShoppingCart() {
  const products = [
    {id: 1, brand: 'White Label', price: '$19.99'},
    {id: 2, brand: 'Black Label', price: '$19.99'},
    {id: 3, brand: 'Red Label', price: '$19.99'},
  ];
  return (
    <>
	    <h1>The following items are in your shopping cart:</h1>
	    <ul>
        {products.map((product) => <Product key={product.id} brand={product.brand} price={product.price}/>)}
      </ul>
    </>
  );
}

ReactDOM.render(<ShoppingCart />, document.getElementById('root'));