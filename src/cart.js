import React from 'react';
import CartItem from './CartItems';
class Cart extends React.Component {
    render () {
        // const arr = [1, 2, 3, 4, 5];
        const { products } = this.state;
        return(
            <div className = "cart">
                {/* <CartItem qty={1} price = {99} title = {"watch"} img = {''} /> */}
                {products.map((product) =>{
                    return(
                        <CartItem
                        product = {product}
                        key = {product.id}
                        func = {() => console.log('sdsd')}
                        isloggedin = {false}
                        jsx = {<h1>Text</h1>}
                        comp = {<CartItem/>}
                        />
                    )
                
                })}
                </div>);
                // <CartItem/>
                // <CartItem/>
                {/* { arr.map((item) => {
                    return item + 5;
                })} */}
            }
    }

export default Cart;