import React, { useContext } from 'react';
import { Context } from '../Context';
import PropTypes from 'prop-types';
import useHover from '../hooks/useHover';

function Image({ className, img }) {
  const [hovered, ref] = useHover();
  const { cartItems, toggleFavorite, addImageToCart, removeImageFromCart } =
    useContext(Context);

  const heartIcon = hovered && (
    <i
      className='ri-heart-line favorite'
      onClick={() => toggleFavorite(img.id)}
    ></i>
  );
  const filledHeartIcon = hovered && (
    <i
      className='ri-heart-fill favorite'
      onClick={() => toggleFavorite(img.id)}
    ></i>
  );

  function handleCartIcon() {
    if (cartItems.some((item) => item.id === img.id)) {
      return (
        <i
          className='ri-shopping-cart-fill cart'
          onClick={() => removeImageFromCart(img)}
        ></i>
      );
    } else if (hovered)
      return (
        <i
          className='ri-add-circle-line cart'
          onClick={() => addImageToCart(img)}
        ></i>
      );
  }

  return (
    <div className={`${className} image-container`} ref={ref}>
      <img src={img.url} className='image-grid' />
      {img.isFavorite ? filledHeartIcon : heartIcon}
      {handleCartIcon()}
    </div>
  );
}

Image.propTypes = {
  className: PropTypes.string,
  img: PropTypes.shape({
    url: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    isFavorite: PropTypes.bool,
  }),
};

export default Image;
