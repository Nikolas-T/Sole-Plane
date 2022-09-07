import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './footer.css'
import GitHub from '../../images/GitHub.webp'
import { Container, Button, Link } from 'react-floating-action-button'


const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <footer className="w-100 mt-auto text-dark p-4">
      <Container>
            <Link href="/contact"
                tooltip="Contact Us"
                icon="fa fa-commenting" />
            {/* <Link href="#"
                tooltip="Add user link"
                icon="fa fa-user-plus" /> */}
                {/* className="fab-item btn btn-link btn-lg text-white" */}
            <Button
                tooltip="The big plus button!"
                icon="fa fa-plus"
                rotate={true}
                onClick={() => alert('FAB Rocks!')} />
        </Container>
      <div className="container text-center mb-5">
        {location.pathname !== '/' && (
          <button
            className="btn btn-dark mb-3"
            onClick={() => navigate(-1)}
          >
            &larr; Go Back
          </button>
        )}
        <h4>&copy; {new Date().getFullYear()} - Soul Plane</h4>
      </div>
      <div className='text-center'>
      <a href='https://www.facebook.com/soleplane1' class="fa fa-facebook"></a>
      <a href="https://www.instagram.com/soleplane_official/" class="fa fa-instagram"></a>
      <a href="https://github.com/Nikolas-T/Sole-Plane" class="fa fa-github"></a>
      </div>
    </footer>
  );
};

export default Footer;
