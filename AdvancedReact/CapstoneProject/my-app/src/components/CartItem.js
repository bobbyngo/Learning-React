import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Context } from '../Context';
import useHover from '../hooks/useHover';

function CartItem({ item }) {
  const { removeImageFromCart } = useContext(Context);
  const [hovered, ref] = useHover();

  function binIcon() {
    if (hovered) {
      return <i className='ri-delete-bin-fill'></i>;
    }
    return <i className='ri-delete-bin-line'></i>;
  }

  return (
    <div
      className='cart-item'
      onClick={() => removeImageFromCart(item)}
      ref={ref}
    >
      {binIcon()}
      <img src={item.url} width='130px' />
      <p>$5.99</p>
    </div>
  );
}

CartItem.propTypes = {
  item: PropTypes.shape({
    url: PropTypes.string.isRequired,
  }),
};

export default CartItem;
