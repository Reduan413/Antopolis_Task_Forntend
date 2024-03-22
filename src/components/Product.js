import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Link from 'next/link'
import Image from 'next/image'

const Product = ({
  product,
}) => {

    const [sidebar, setSidebar] = useState(true);
    const [cart, setCart] = useState([]);


//   const location = useLocation();
  const { id, name, image, price, discount, weight, promo } = product;
  const [themeBtn, setThemeBtn] = useState(true);
  const [modalProduct, setModalProduct] = useState([]);
  const [show, setShow] = useState(false);
  useEffect(() => {
    handleShowThemeBtn(id);
  }, [product]);
  const handleShowThemeBtn = (id) => {
    const exists = cart?.find((cartProduct) => cartProduct.id === id);
    // if(exists.quantity === 0){
    //   removeFromDb(id)
    // }
    //console.log(exists.quantity)
    if (exists) {
      setThemeBtn(false);

      const cartQuantity = exists.quantity;
      setQuantity(cartQuantity);
    }
  };

  const showThemeBtn = () => {
    setThemeBtn(!themeBtn);
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
  };

  const [quantity, setQuantity] = useState(0);
  let newCart = [];

  const increment = (product) => {
    const newQuantity = quantity + 1;
    const exists = cart.find((product) => product.id === id);
    if (exists) {
      const rest = cart.filter((product) => product.id !== id);
      exists.quantity = exists.quantity + 1;
      newCart = [...rest, exists];
      setCart(newCart);

    //   addToDb(id);
    }
    //handleAddToCart(product)

    setQuantity(newQuantity);
  };
  const decrement = () => {
    if (quantity > 0) {
      const newQuantity = quantity - 1;
      const exists = cart.find((product) => product.id === id);
      if (exists) {
        const rest = cart.filter((product) => product.id !== id);
        exists.quantity = exists.quantity - 1;
        console.log(rest);
        newCart = [...rest, exists];
        setCart(newCart);
        // removeFromDbCart(id);
      }
      setQuantity(newQuantity);
    }
    if (quantity === 1) {
      setThemeBtn(!themeBtn);
    }
  };
  const change = (url) => {
    window.history.pushState("new", "title", url);
  };
  const handleModal = () => {
    setShow(!show);
    setModalProduct(product);
    const productUrl = `/product/` + id;
    change(productUrl);
  };

  return (
    <>
      <div className="popular-products-wrapper">
        <Link href="/ProductSingle">
          {" "}
          <div className="p-products-wrapper-img">
            {/* <img src={img} alt="#" /> */}
            <Image
                    src={"https://eco.best-it.online/" + image}
                    width={300}
                    height={500}
                    alt="Picture of the author"
                  />
            <span className="p-product-weight">{weight}</span>
          </div>
          <div className="p-products-cont-top">
            <div className="p-products-cont-top-title">
              <h6 className="p-products-cont-title">{name}</h6>
              <div className="p-products-price ">
                {discount <= 0 ? "" : <del>{price} Taka</del>}
                <span>{Math.round(price - (price * discount) / 100)} Taka</span>
              </div>
            </div>
            <ul className="p-products-review-list">
              <li>
                <i class="fi fi-ss-star"></i>
              </li>
              <li>
                <i class="fi fi-ss-star"></i>
              </li>
              <li>
                <i class="fi fi-ss-star"></i>
              </li>
              <li>
                <i class="fi fi-ss-star"></i>
              </li>
              <li>
                <i class="fi fi-rs-star"></i>
              </li>
              <li>4 (ratings)</li>
            </ul>
          </div>
        </Link>
        <div className="popular-products-content">
          {product?.Quantity == 0 ? (
            <div class="product-stock-out">
              <span class="product-stock-out-btn">Out of stock</span>
            </div>
          ) : (
            <div className="p-products-cont-btn">
              <div className="p-products-buy-now-btn w-100">
                <a
                  href="#qty-input"
                  onClick={showThemeBtn}
                  className={
                    themeBtn
                      ? "pp-quantity theme-btn"
                      : "pp-quantity theme-btn "
                  }
                >
                  <div onClick={() => handleAddToCart(product)}>
                    <i className="fi-rr-shopping-bag-add"></i>Add to cart
                  </div>
                </a>
              </div>
              {/* <div className="p-products-buy-now-btn">
                <Link href="#" className="theme-btn">
                  <i className="fi-rr-shopping-bag"></i>Buy now
                </Link>
              </div> */}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Product;

