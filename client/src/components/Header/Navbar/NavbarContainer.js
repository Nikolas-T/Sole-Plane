import React, { useState } from 'react';
import NavTabs from './NavTabs';
import Footer from './Footer';

export default function NavbarContainer() {

  return (
    <div>
      <NavTabs/>
      <div><Footer/></div>
    </div>
  );
  
}
