import React from 'react';
import { FaFacebook, FaLinkedin, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer bg-gray-600 text-neutral-content p-10">
  <aside>
   <h2 className='text-3xl font-bold'>TASK</h2>
    <p>
      TASK tech house.
      <br />
      Providing reliable tech since 1992
    </p>
  </aside>
  <nav>
    <h6 className="footer-title">Social</h6>
    <div className="grid grid-flow-col gap-4">
     <Link to="https://www.youtube.com/@md.hadisurrahmanmanna7006"><FaYoutube className='text-2xl font-bold '></FaYoutube></Link>
     <Link to="www.linkedin.com/in/md-hadisur-rahman-manna"><FaLinkedin className='text-2xl font-bold '></FaLinkedin></Link>
     <Link to="https://www.facebook.com"><FaFacebook className='text-2xl font-bold '></FaFacebook></Link>
    </div>
  </nav>
</footer>
    );
};

export default Footer;