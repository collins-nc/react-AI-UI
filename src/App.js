import React from 'react';
import {Blog,Feature,Footer,Header,Possibility,WhatGPT3} from './container';
import {Brand,CTA,Navbar} from './components';
import "./index.css";
import "./App.css";

const App = () => {    
    return (
        <div className='App'>
            <div className='gradient__bg'>
                <Navbar/>
                <Header/>
            </div>
            <Brand/>
            <WhatGPT3/>
            <Feature/>

        </div>
    )
}
export default App