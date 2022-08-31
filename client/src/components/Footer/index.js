import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './footer.css'
import GitHub from '/UCF/Sole-Plane/client/src/images/GitHub.webp'

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <footer className="w-100 mt-auto text-dark p-4">
      <div className="container text-center mb-5">
        {location.pathname !== '/' && (
          <button
            className="btn btn-dark mb-3"
            onClick={() => navigate(-1)}
          >
            &larr; Go Back
          </button>
        )}
        <h4>&copy; {new Date().getFullYear()} - Soul Plane <img src={GitHub} alt="GitHub" /></h4>
      </div>
    </footer>
  );
};

export default Footer;
