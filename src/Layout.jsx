import React from 'react'
import Header from './componets/Header';
import { Outlet } from 'react-router-dom';
import Products from './componets/Products';
import Footer from './componets/Footer';

const Layout = () => {
    return ( 
        <>
            <Header/>
            <Outlet/>
            <Footer />
        </>
     );
}
 
export default Layout;