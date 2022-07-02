import React, { useContext, useState } from 'react';
import { Context } from '../Context';
import CartItem from '../components/CartItem';

function Cart() {
  const { cartItems, emptyCart } = useContext(Context);
  const [buttonText, setButtonText] = useState(['Place Order']);

  const cartItemElements = cartItems.map((item) => (
    <CartItem key={item.id} item={item} />
  ));

  const totalCost = (cartItemElements.length * 5.99).toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  function handlePlaceOrder() {
    setTimeout(() => {
      setButtonText('Place Order');
      emptyCart();
    }, 3000);
    setButtonText('Ordering...');
  }

  return (
    <main className='cart-page'>
      <h1>Check out</h1>
      {cartItemElements}
      <p className='total-cost'>Total: {totalCost}</p>
      {cartItems.length > 0 && (
        <div className='order-button'>
          <button onClick={handlePlaceOrder}>{buttonText}</button>
        </div>
      )}
    </main>
  );
}

export default Cart;
