import { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
// import { useNavigate } from "react-router-dom";
// import useCoupon from "../hooks/useCoupon";
import CartSidebarItems from "./CartSidebarItems";

const options = [
  {
    name: "12 items",
    scroll: true,
    backdrop: true,
  },
];

function CartSidebar({setOrderInfo, name, ...props }) {
  
  const [sidebar, setSidebar] = useState(true);
  const [cartShow, setCartShow] = useState(true);
  const [cart, setCart] = useState([]);

  const handleClose = () => setCartShow(false);
  const toggleShow = () => setCartShow((s) => !s);
  const [
    subTotal,
    totalAmount,
    couponText,
    couponBtn,
    couponMess,
    discount,
    showDiscount,
    couponMessText,
    applyCoupon,
    handleDiscount,
  ] = [1,1,1,1,1,1,1,1,1,1];
  const handleOrder = () => {
    const order = {
      coupon: couponText,
      subTotal: subTotal,
      discount: discount,
    };
    setOrderInfo(order);
    setCartShow(false);
    // navigate("/checkout/shoppinginfo");
  };

  return (
    <>

      <Button className="cart-active" variant="primary" onClick={toggleShow}>
        <i className="fi-rr-shopping-bag"></i>
        <p className="cart-active-text">{cart.length} items</p>
      </Button>
      <Offcanvas show={cartShow} onHide={handleClose} {...props}>
        <Offcanvas.Header >
          <Offcanvas.Title>
            <div className="cart-modal-header">
              <h5 className="cart-modal-header-title">
                Cart <span>( {cart.length} items)</span>
              </h5>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
            </div>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="cart-sidebar-item-main">
            <CartSidebarItems carts={cart} setCart={setCart} />
          </div>
          <div className="cart-sidebar-bottom">
            <div className="s-cart-bottom-content">
              <div className="cart-coupon-form">
                <div className="form-group">
                  <label>Have a special code?</label>
                  <div className="cart-coupon-form-input">
                    <input
                      type="apply"
                      onChange={applyCoupon}
                      placeholder="Apply coupon"
                    />
                    <Button
                      disabled={couponBtn ? false : true}
                      className="button theme-btn"
                      type="submit"
                      onClick={handleDiscount}
                    >
                      Apply coupon
                    </Button>
                  </div>
                </div>
                <p
                  className={
                    couponMess ? "coupon-applied-text" : "coupon-applied-text2"
                  }
                >
                  “{couponText}” {couponMessText}
                </p>
                <div className="coupon-applied-price">
                  <h4 className="coupon-applied-price-title">
                    ৳{totalAmount} BDT{" "}
                    <del style={{ display: showDiscount ? "" : "none" }}>
                      ৳{subTotal}(-20%)
                    </del>
                  </h4>
                </div>

                <div
                  className="sidebar-cart-b-btn"
                  onClick={() => handleOrder()}
                >
                  <Button className="theme-btn" type="submit">
                    Place order
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

function Example({ cart, setCart, setOrderInfo,cartShow, setCartShow }) {
  return (
    <>
      {options.map((props, idx) => (
        <CartSidebar
          key={idx}
          {...props}
          cart={cart}
          setCart={setCart}
          setOrderInfo={setOrderInfo}
          cartShow={cartShow}
        setCartShow={setCartShow}
        />
      ))}
    </>
  );
}

export default Example;
