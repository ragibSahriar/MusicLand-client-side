import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer p-10 bg-zinc-900 text-neutral-content">
      <div>
        <span className="footer-title">MusicCloud</span>
        <img className="w-28 rounded-full" src="https://th.bing.com/th/id/R.ee91ecf276e355eae3ff467f89941cfa?rik=IYimY4UTWAUgSw&pid=ImgRaw&r=0" alt="" />
        
      </div>
      <div>
        <span className="footer-title">Company</span>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Students</a>
      </div>
      <div>
        <span className="footer-title">Legal</span>
        <Link to="/signup">Signup</Link>
        <h1>Music can heal yourself</h1>
      </div>
    </footer>
  );
};

export default Footer;
