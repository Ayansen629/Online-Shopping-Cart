import React from 'react';
// import mobile from './image/mobile.jpg';
import { NavLink } from 'react-router-dom';

 function Home() {
    return (
        <>
        <section id="header" className="d-flex align-item-center">
        <div className="container-fluid nav bg">
        <div className="row">
        <div className="col-10 mx-auto">
        <div className="row">
        <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">

        <h1><strong className="brand-name">Ecommerce Shopping Website</strong> </h1>
        <h2 className="my-3">
        We are the talented developer making websites.This is  for Online Shopping

            
        </h2>
        <div className="mt-3">

        <NavLink to="/service" className="btn-get-started">Get Started</NavLink>
        

        </div>
        {/* <div className=" header-img">
        <img src="https://source.unsplash.com/1600x900/?ecommerce,mobile" className="img-fluid animated" alt="home img"/>

        </div> */}

        </div>
        </div>
            
        </div>

        </div>


        </div>

        </section>
        </>
           )
}
export default Home;
