import React from "react";
import { PopupButton } from "@typeform/embed-react";
import { Button, Container } from "react-bootstrap";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import { Link } from "react-router-dom";

import "./Footer.css";
import SubscribeForm from "./SubscribeForm";

const Footer = () => {
  const postUrl = `https://swapbase.us14.list-manage.com/subscribe/post?u=${process.env.REACT_APP_MAILCHIMP_U}&id=${process.env.REACT_APP_MAILCHIMP_ID}`;

  return (
    <footer className="page-footer font-small blue pt-4">
      <Container>
        <div className="footer-main">
          <h1>
            Start your <span>Data Automation </span> now
          </h1>
          <p>
            Reach out for any questions on our Enterprise plan, pricing, or
            security. Chat <br></br> with an enterprise collaboration
            specialist.
          </p>
          <div className="footer-btn">
            <PopupButton
              id="z9lnnwc4"
              size={80}
              hidden={{
                foo: "Foo Value",
                bar: "Bar Value",
              }}
              onReady={() => {
                console.log("form ready");
              }}
              className="btn btn-primary"
            >
              Try for free
            </PopupButton>
            <Link to="/contact">
              <Button className="btn btn-success" aria-pressed="false">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </Container>
      <div className="container-fluid footer-nav text-left text-md-left">
        <div className="row">
          <div className="col-md-5 mt-md-0 mt-3">
            <img src="16.png" alt="logo" width={"150px"} />
            <ul className="list-unstyled">
              <li>
                <a href="mailto:info@swapbase.io">info@swapbase.io</a>
              </li>
              <li>
                <a href="tel:/+2347068365435">+234 7068 365 435</a>
              </li>
              <li>
                <a href="tel:/+447796010762">+44 7796 010762</a>
              </li>
            </ul>
          </div>

          <hr className="clearfix w-100 d-md-none pb-0" />

          <div className="col-md-3 mb-md-0 mb-3">
            <h5 className="footer-group-name">Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/solution">Solution</Link>
              </li>
              <li>
                <Link to="/pricing">Pricing</Link>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
              <li>
                <Link to="/faq">FAQs</Link>
              </li>
            </ul>
          </div>

          <div className="col-md-4 mb-md-0 mb-3">
            <h5 className="footer-group-name">Newsletter</h5>
            <p className="newsletter-intro">
              To receive industry updates, of technology and decentralized data,
              subscribe to our newsletter.
            </p>
            <MailchimpSubscribe
              url={postUrl}
              render={(props) => <SubscribeForm {...props} />}
            />
          </div>
        </div>
        <hr />
        <div className="footer-copyright text-left py-3">
          <a href="/">
            Swapbase ©{new Date().getFullYear()}. All Rights Reserved.
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
