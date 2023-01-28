import React from 'react';

const CartItem = (props) => {

  console.log('this.props', this.props);
  const { price, title, qty } = this.props.product;
  const { product, onIncreaseQuantity, onDecreaseQuantity,
    onDeleteProduct } = props;
  return (
    <div className="cart-item">
      {/* {this.props.jsx} */}
      <div className="left-block">
        <img style={styles.image} src={product.img} />
      </div>
      <div className="right-block">
        <div style={{ fontSize: 25 }}>{title}</div>
        <div style={{ color: '#777' }}>Rs {price} </div>
        <div style={{ color: '#777' }}>Qty: {qty} </div>
        <div className="cart-item-actions">
          {/* Buttons */}
          <img
            alt="increase"
            className="action-icons"
            src="https://cdn-icons-png.flaticon.com/128/992/992651.png"
            onClick={() => onIncreaseQuantity(product)}
          />
          <img
            alt="decrease"
            className="action-icons"
            src="https://cdn-icons-png.flaticon.com/128/1828/1828899.png"
            onClick={() => this.props.onDecreaseQuantity(this.props.product)}
          />
          <img
            alt="delete"
            className="action-icons"
            src="https://cdn-icons-png.flaticon.com/128/484/484611.png"
            onClick={() => onDeleteProduct(product.id)}
          />
        </div>
      </div>
    </div>
  );
}


const styles = {
  image: {
    height: 110,
    width: 110,
    borderRadius: 4,
    background: '#ccc'
  }
}

export default CartItem;