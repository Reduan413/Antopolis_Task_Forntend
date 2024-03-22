import React from "react";
import Logo from "../../public/assets/images/logo.svg";
import GooglePlayImg from "../../public/assets/images/download-app/google-play.svg";
import AppleStoreImg from "../../public/assets/images/download-app/apple-store.svg";
import Visa from "../../public/assets/images/payment-currency/visa.svg";
import Mastercard from "../../public/assets/images/payment-currency/mastercard.svg";
import Amex from "../../public/assets/images/payment-currency/amex.svg";
import Paypal from "../../public/assets/images/payment-currency/paypal.svg";
import Payoneer from "../../public/assets/images/payment-currency/payoneer.svg";
import Bkash from "../../public/assets/images/payment-currency/bkash.svg";
import Nagad from "../../public/assets/images/payment-currency/nagad.svg";
import Rocket from "../../public/assets/images/payment-currency/rocket.svg";
import Upay from "../../public/assets/images/payment-currency/upay.svg";
import FaceBook from "../../public/assets/images/social-icon/facebook.svg";
import WhatsApp from "../../public/assets/images/social-icon/whatsapp.svg";
import Messenger from "../../public/assets/images/social-icon/messenger.svg";
import YouTube from "../../public/assets/images/social-icon/youtube.svg";
import Link from 'next/link'
import Image from "next/image";

const Footer = () => {
  return (
    <>
      <footer className="footer-area">
        <div className="footer-top">
          <div className="container">
            <div className="row g-0">
              <div className="col-lg-6 col-xl-4 col-12">
                <div className="footer-widget footer-about">
                  <div className="footer-logo">
                    <Link href="/">
                      <Image src={Logo} alt="#" />
                    </Link>
                  </div>
                  <p className="f-about-para">
                    We ara a lorem ipsum dolor sit amet, consectetur adipiscing
                    elit, sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua. Ut enim ad minim veniam, quis nostrud equip
                    commodo consequat... <Link href="#">Read More</Link>
                  </p>
                </div>
              </div>
              <div className="col-lg-6 col-xl-4 col-12">
                <div className="footer-widget f-download-app">
                  <h4 className="footer-widget-title">
                    Download the mobile app
                  </h4>
                  <div className="f-download-btn">
                    <a
                      href="https://play.google.com/store/games"
                      target="_blank"
                      className="google-play-btn"
                    >
                      <Image src={GooglePlayImg} alt="#" />
                    </a>
                    <a
                      href="https://www.apple.com/store"
                      target="_blank"
                      className="apple-store-btn"
                    >
                      <Image src={AppleStoreImg} alt="#" />
                    </a>
                  </div>
                  <div className="footer-download-form">
                    <p className="f-subs-download-content">
                      Receive a download link via SMS
                    </p>
                    <form
                      action="#"
                      method="post"
                      className="f-download-form-main"
                    >
                      <input
                        type="email"
                        placeholder="Enter phone number"
                        required
                      />
                      <button className="button" type="submit">
                        Get link
                      </button>
                    </form>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-12">
                <div className="footer-widget footer-stay-update">
                  <h4 className="footer-widget-title">Stay up to date!</h4>
                  <div className="footer-stay-update-form">
                    <p className="f-stay-update-content">
                      Don't worry, we won't spam you.
                    </p>
                    <form
                      action="#"
                      method="post"
                      className="f-update-form-main"
                    >
                      <input
                        type="email"
                        placeholder="Enter phone number"
                        required
                      />
                      <button className="button" type="submit">
                        Subscribe
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="row g-0">
              <div className="col-12">
                <div className="footer-address-main">
                  <div className="row">
                    <div className="col-lg-6 col-xl-3 col-md-6 col-12">
                      <div className="footer-address-wrapper">
                        <div className="f-about-social">
                          <ul className="f-about-social-list">
                            <li>
                              <a
                                href="https://www.facebook.com/"
                                target="_blank"
                              >
                                <Image src={FaceBook} alt="#" />
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://www.messenger.com/"
                                target="_blank"
                              >
                                <Image src={Messenger} alt="#" />
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://www.messenger.com/"
                                target="_blank"
                              >
                                <Image src={WhatsApp} alt="#" />
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://www.youtube.com/"
                                target="_blank"
                              >
                                <Image src={YouTube} alt="#" />
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-xl-3 col-md-6  col-12">
                      <div className="footer-address-wrapper">
                        <div className="footer-address-icon">
                          <i className="fi-rr-phone-call"></i>
                        </div>
                        <div className="footer-address-content">
                          <h5 className="f-address-cont-title">Mobile phone</h5>
                          <ul className="f-address-cont-list">
                            <li>
                              <Link href="tel:+1-212-9876543">
                                {" "}
                                +1-212-9876543,{" "}
                              </Link>
                              <Link href="tel:+1-212-4567890">
                                +1-212-4567890
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-xl-3 col-md-6 col-12">
                      <div className="footer-address-wrapper">
                        <div className="footer-address-icon">
                          <i className="fi-rr-envelope"></i>
                        </div>
                        <div className="footer-address-content">
                          <h5 className="f-address-cont-title">Mail</h5>
                          <ul className="f-address-cont-list">
                            <li>
                              <Link href="mailto:shop@yourwebsite.com">
                                shop@yourwebsite.com
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-xl-3 col-md-6 col-12">
                      <div className="footer-address-wrapper">
                        <div className="footer-address-icon">
                          <i className="fi-rr-map-marker"></i>
                        </div>
                        <div className="footer-address-content">
                          <h5 className="f-address-cont-title">Address</h5>
                          <ul className="f-address-cont-list">
                            <li>706 Campfire Ave. Meriden, CT 06450</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <div className="row g-0 align-items-center">
              <div className="col-lg-12 col-xl-7 col-12">
                <div className="footer-left-content">
                  <ul className="footer-left-content-list">
                    <li>
                      <Link href="#">About us</Link>
                    </li>
                    <li>
                      <Link href="#">Contact</Link>
                    </li>
                    <li>
                      <Link href="#" target="_blank">
                        Privacy policy
                      </Link>
                    </li>
                    <li>
                      <Link href="#" target="_blank">
                        Sitemap
                      </Link>
                    </li>
                    <li className="arrow-none">
                      <Link href="#">News/ Blogs</Link>
                    </li>
                  </ul>
                  <p className="f-copyright-main-text m-0">
                    © 2022, All Rights Reserved | Design & Developed by{" "}
                    <a href="https://getup.com.bd" target="_blank">
                      GetUp
                    </a>{" "}
                    | Powered by{" "}
                    <a href="#" target="_blank">
                      SodaiNagar
                    </a>
                  </p>
                </div>
              </div>
              <div className="col-lg-12 col-xl-5 col-12">
                <div className="footer-right-content">
                  <ul className="payment-currency-img">
                    <li>We accept:</li>
                    <li>
                      <a href="https://bd.visa.com/" target="_blank">
                        <Image src={Visa} alt="#" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.mastercard.com/global/en.html"
                        target="_blank"
                      >
                        <Image src={Mastercard} alt="#" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.americanexpress.com/"
                        target="_blank"
                      >
                        <Image src={Amex} alt="#" />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.paypal.com/bd/home" target="_blank">
                        <Image src={Paypal} alt="#" />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.payoneer.com/" target="_blank">
                        <Image src={Payoneer} alt="#" />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.bkash.com/" target="_blank">
                        <Image src={Bkash} alt="#" />
                      </a>
                    </li>
                    <li>
                      <a href="https://nagad.com.bd/" target="_blank">
                        <Image src={Nagad} alt="#" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.dutchbanglabank.com/rocket/rocket.html"
                        target="_blank"
                      >
                        <Image src={Rocket} alt="#" />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.upaybd.com/" target="_blank">
                        <Image src={Upay} alt="#" />
                      </a>
                    </li>
                  </ul>
                  <ul className="footer-bottom-notice">
                    <li>
                      <Link href="#" target="_blank">
                        Privacy Notice
                      </Link>
                    </li>
                    <li>
                      <Link href="#" target="_blank">
                        Cookie Notice
                      </Link>
                    </li>
                    <li className="arrow-none">
                      <Link href="#" target="_blank">
                        Terms of Use
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
