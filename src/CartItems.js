import React from 'react';
class CartItem extends React.Component{
    constructor () {
        super();
            this.state = {
                price: 999,
                title: 'Mobile Phone',
                qty: 13,
                img: ''
            }
            this.increaseQuantity = this.increaseQuantity.bind(this);
        }

        increaseQuantity = () =>
        {
            // this.state.qty += 1;
            // console.log('this', this.state);

            // setState form 1
            // this.setState({
            //     qty: this.state.qty + 1
            // });

            // setState form 2 - if prevState required use this
            this.setState((prevState) => {
                return {qty:prevState.qty + 1}
            });
        }
    render()
    {
        const {price, title, qty} = this.state;
        return (
            <div className = "cart-item">
                <div className = "left-block"> <img alt="" style = {styles.image}/></div>
                <div className = "right-block">
                <div style = {{fontSize: 25 }}>{title}</div>
                <div style = {{color: 'blue' }}>Rs {price}</div>
                <div style = {{color: 'blue7' }}>Qty: {qty}</div>
                </div>

                <div className = "cart-item-actions">
                    {/* Buttons */}
                    <img alt = "increase" className = "action-icons" src = "https://cdn-icons-png.flaticon.com/512/1237/1237946.png" />
                    onClick = {this.increaseQuantity}
                    <img alt ="decrease" className = "action-icons" src = "https://cdn-icons-png.flaticon.com/512/992/992683.png" />
                    <img alt = "delete" className = "action-icons" src = "https://cdn-icons-png.flaticon.com/512/484/484611.png" />
                </div>
            </div>
        )
    }
}

const styles = {
    image: {
        height: 110,
        width: 110,
        borderRadius: 4
    }
}

export default CartItem;