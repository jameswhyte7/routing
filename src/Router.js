import React from 'react';
import {BrowserRouter, Route, Routes, Link} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Services from './components/Services';
import ServiceDetails from './components/ServiceDetails';


const Router = () => {
    return (
        <BrowserRouter> 

            <nav>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/services">Services</Link>
                <Link to="/service1s">Servicels</Link>
            </nav>
            <hr/>

            <Routes>
                <Route exact path="/" Component={Home} />
                <Route path="/about" Component={About} />
                <Route path="/contact" Component={Contact} />
                <Route exact path="/services" Component={Services} />
                <Route path="/services/:id" Component={ServiceDetails} />
            </Routes>

        </BrowserRouter>
    );
}

export default Router;
