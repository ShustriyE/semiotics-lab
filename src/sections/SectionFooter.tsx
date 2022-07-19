import React from "react";
import "../static/style.css";
import copy from "clipboard-copy";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useTranslation } from "react-i18next";

const SectionFooter = () => {
  const [t] = useTranslation("translation");

  const copyText = (text: string | undefined) => {
    if (text) {
      copy(text);
    }
  };
  const contact_email: string = "info@pixsellz.io";
  const contact_phone: string = "522-423-7990";

  return (
    <footer>
      <div id="footer">
        <div className="footer--left">
          <img src="/icons/logo_colored.svg" alt="" width="275px" />
          <ul className="footer--list">
            <li className="footer--list-item">
              <a href="#">First Link</a>
            </li>
            <li className="footer--list-item">
              <a href="#">Second Link</a>
            </li>
            <li className="footer--list-item">
              <a href="#">Third Link</a>
            </li>
          </ul>
        </div>
        <div className="footer--right">
          <div className="footer--right-container--left">
            <div className="container--left-box">
              <span className="container--left-header">Phone</span>
              <a
                href="tel:522-423-7990"
                className="container--left--phone"
                onClick={() => {
                  copyText(contact_phone);
                }}
              >
                {contact_phone}
              </a>
            </div>
            <div className="container--left-box">
              <span className="container--left-header">Email</span>
              <a
                href="mailto:info@pixsellz.io"
                className="container--left--email"
                onClick={() => {
                  copyText(contact_email);
                }}
              >
                {contact_email}
              </a>
            </div>
            <div className="container--left-box">
              <span className="container--left-header">Social</span>
              <div className="container--left--social-box">
              <a href="#" className="container--left--social">
                Twitter
              </a>
              <a href="#" className="container--left--social">
                Facebook
              </a>
              </div>
            </div>
          </div>
          <div className="footer--right-container--right">
            <div className="container--right-box">
              <span className="container--right-header">California</span>
              <a href="#" className="container--right-adress">
                21 Lebsack Harbor Apt. 276 Palo Alto, CA
              </a>
            </div>
            <div className="container--right-box">
              <span className="container--right-header">New York</span>
              <a href="#" className="container--right-adress">
                74 Howell Islands Suite 834 Rochester, NY
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default SectionFooter;
