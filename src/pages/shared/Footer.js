import React from 'react';
import { ImFacebook } from "react-icons/im";
import { ImTwitter } from "react-icons/im";
import { ImLinkedin2 } from "react-icons/im";
import { ImYoutube } from "react-icons/im";
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <div>
      <footer className="w-3/4 mx-auto footer p-10 border-t text-base-content">
        <div>
          <span className="footer-title">Services</span>
          <Link className="link link-hover">Online Consultant</Link>
          <Link className="link link-hover">Appointment</Link>
          <Link className="link link-hover">Blood</Link>
          <Link className="link link-hover">Nurses</Link>
        </div>
        <div>
          <span className="footer-title">Who Are We ?</span>
          <Link className="link link-hover">About</Link>
          <Link className="link link-hover">Contact</Link>

        </div>
        <div>
          <span className="footer-title">Legal</span>
          <Link className="link link-hover">Terms of use</Link>
          <Link className="link link-hover">Privacy policy</Link>
          <Link className="link link-hover">Cookie policy</Link>
        </div>
      </footer>
      <footer className="w-3/4 mx-auto  footer px-10 py-4  text-base-content border-base-300">
        <div className="items-center grid-flow-col">
          <p className="text-xl font-bold">&copy;</p>
          <p>MKM HealthBridge Ltd. <br />Providing reliable medi care since 2022</p>
        </div>
        <div className="md:place-self-center md:justify-self-end">
          <div className="grid grid-flow-col gap-4">

            <ImFacebook ></ImFacebook>
            <ImTwitter></ImTwitter>
            <ImLinkedin2 ></ImLinkedin2>
            <ImYoutube ></ImYoutube>

          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;