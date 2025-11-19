import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar'; 
import Footer from './Footer'; 

// The Layout component takes all page content as its children or uses <Outlet>
export default function Layout() {
  return (
    <div className="app-container">
    
      <Navbar />

      <main className="content-wrap">
        {/* <Outlet /> renders the specific component for the current route (e.g., Home, About, Pricing) */}
        <Outlet /> 
      </main>

      <Footer />
      
    </div>
  );
}