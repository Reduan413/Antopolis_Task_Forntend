import { useEffect, useState } from "react";
// import { addToDb, removeFromDb, removeFromDbCart } from "../utilities/fakedb";
// import MultipleQty from "./MultipleQty";

const CartItem = ({ cart, carts, setCart }) => {
  const [quantity, setQuantity] = useState(0);
  useEffect(() => {
    handleShowThemeBtn(cart.id);
  }, []);
  const handleShowThemeBtn = (id) => {
    const exists = carts.find((cartProduct) => cartProduct.id === id);
    
    //console.log(exists.quantity)
    if (exists) {
      const cartQuantity = exists.quantity;
      setQuantity(cartQuantity);
    }
  };
  const handleDeleteItem = (cartProduct)=>{
    const exists = carts.find((product) => product.id === cartProduct.id);
    if (exists) {
      const rest = carts.filter((product) => product.id !== cartProduct.id);
      newCart = [...rest];
      setCart(newCart);
      // removeFromDb(cartProduct.id);
    }
    console.log(cartProduct.id)
  }
  let newCart = [];
  const increment = (cartProduct) => {
    const _carts =  [...carts]
    const newQuantity = quantity + 1;
    const exists = _carts.find((product) => product.id === cartProduct.id);
    if (exists) {
      //const rest = carts.filter((product) => product.id !== cartProduct.id);
      exists.quantity = exists.quantity + 1;
      //newCart = [...rest, exists];
      setCart(carts);
      // addToDb(cartProduct.id);
    }
    //handleAddToCart(product)
    setQuantity(newQuantity);
  };
  const decrement = (cartProduct) => {
    if (quantity > 1) {
      const _carts =  [...carts]
      const newQuantity = quantity - 1;
      const exists = _carts.find((product) => product.id === cartProduct.id);
      if (exists) {

        //const rest = carts.filter((product) => product.id !== cartProduct.id);
        exists.quantity = exists.quantity - 1;
        //newCart = [...rest, exists];
        setCart(carts);
        // removeFromDbCart(cartProduct.id);
      }
      setQuantity(newQuantity);
    }
    //   if (quantity === 1) {
    //     setThemeBtn(!themeBtn);
    //   }
  };
  return (
    <>
      <div>
        <div className="cart-sidebar-item-wrapper">
          <div className="cart-sidebar-item-delete">
            <button className="btn btn-outline-danger border-0 " onClick={()=>handleDeleteItem(cart)}>
              <i className="fi-sr-trash"></i>
            </button>
          </div>
          <div className="cart-sidebar-item-info">
            <img src={cart.img} alt="#" />
            <div className="cart-sidebar-item-content">
              <p>{cart.name}</p>
              <span className="cart-sidebar-item-price">
                ৳ {cart.price}/ {cart.weight}
              </span>
            </div>
          </div>
          <div className="cart-sidebar-item-qty">
            <h4 className="cart-s-item-qty-price">
              ৳{cart.price * cart.quantity}
            </h4>
            {/* <MultipleQty
              increment={increment}
              decrement={decrement}
              quantity={quantity}
              cart={cart}
            /> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default CartItem;
