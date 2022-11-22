import React from 'react';
import HeaderAndNavigation from '../Header/Header.component';
import Footer from '../Footer/Footer.component';
import { Outlet } from 'react-router-dom'

const SharedLayout = () => {
  return (
    <div className='shared-layout'>
        <HeaderAndNavigation />
        <Outlet />
        <Footer />
    </div>
  )
};

export default SharedLayout;