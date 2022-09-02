import React from 'react';
import { Link } from 'react-router-dom';
import './header.css'
import logo from '../../images/soul-plane-logo.png'
import NavTabs from './Navbar/NavTabs';
import Auth from '../../utils/auth';

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <header className="bg-info text-dark mb-4 py-3 display-flex align-center">
      <div className="logo">
        <Link className="text-dark" to="/">
          <h1 className="">
            <img src={logo} alt="SoulPlaneLogo"/>
          </h1>
        </Link>
        <p className="m-0" style={{ fontSize: '1.75rem', fontWeight: '700' }}>
        </p>
        <form className='searchBar'>
            <input
                  className="form-input"
                  placeholder="Adidas, YEEZY, Nike, Jordan..."
                  name="name"
                  type="text"
                  />
                <button className="btn btn-lg btn-primary m-2" type="submit">
                  Search
                </button>
          </form>
          <div><NavTabs/></div>
        <div className='login'>
          {Auth.loggedIn() ? (
            <>
              <Link className="btn btn-lg btn-primary m-2" to="/me">
                View My Profile
              </Link>
              <button className="btn btn-lg btn-light m-2" onClick={logout}>
                Logout
              </button>
            </>
          ) : (
            <>
              <Link className="btn btn-lg btn-primary m-2" to="/login">
                Login
              </Link>
              <Link class="stage" className="btn btn-lg btn-light m-2" to="/signup">
                Signup
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
