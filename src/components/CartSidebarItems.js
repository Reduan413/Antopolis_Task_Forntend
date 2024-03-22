import CartItem from "./CartItem";

const CartSidebarItems = ({ carts, setCart }) => {


  return (
    <>
      {carts.map((cart) => (
        <CartItem key={cart.id} cart={cart} carts={carts} setCart={setCart} />
      ))}
    </>
  );
};

export default CartSidebarItems;
