import React from 'react';
//import '../styles/NavTabs.css'
import { Link } from 'react-router-dom'
import Adidas from '../../../images/white-adidas-logo-transparent-11.png'
import YEEZY from '../../../images/Daco_5179936.png'
import Nike from '../../../images/white-nike-logo.png'
import Jordan from '../../../images/michael-jordan-logo-2671.png'
import SolePlane from '../../../images/SOLEPLANELOGO.png';
import '../../../styles/navbar.css'

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <ul class="buttons">
      <span class='btn-hover color-6 '>
      <Link 
        to='/adidas' 
        style={{ textDecoration: 'none' }}
        className={currentPage === 'Adidas' ? 'nav-link active' : 'nav-link'}
      >
        <img src={Adidas}  alt="Adidas" height="8%" width="5%" />
      </Link>
    </span>
    <span class='btn-hover color-6'>
      <Link 
        to='/yeezy' 
        style={{ textDecoration: 'none' }}
        className={currentPage === 'Yeezy' ? 'nav-link active' : 'nav-link'}
      >
        <img src={YEEZY}  alt="Yeezy" height="6%" width="11%" />
      </Link>
    </span>
    <span class='btn-hover color-6'>
      <Link 
        to='/nike' 
        style={{ textDecoration: 'none' }}
        className={currentPage === 'Nike' ? 'nav-link active' : 'nav-link'}
      >
        <img src={Nike}  alt="Nike" height="6%" width="7%" />
      </Link>
    </span>
    <span class='btn-hover color-6'>
      <Link 
        to='/jordan' 
        style={{ textDecoration: 'none' }}
        className={currentPage === 'Jordan' ? 'nav-link active' : 'nav-link'}
      >
        <img src={Jordan}  alt="Jordan" height="9%" width="5%" />
      </Link>
    </span>
    <span class='btn-hover color-6'>
      <Link 
        to='/soleplane' 
        style={{ textDecoration: 'none' }}
        className={currentPage === 'SolePlane' ? 'nav-link active' : 'nav-link'}
      >
        <img src={SolePlane}  alt="SolePlane" height="7%" width="5%" />
      </Link>
    </span>
    </ul>
  );
}

export default NavTabs;
