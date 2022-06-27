import React from 'react';

import './App.css';
import {Header} from "./header/Header";
import {Main} from "./main/Main";
import {MyProjects} from "./myProjects/MyProjects";
import {Contacts} from "./contacts/Сontacts";
import {Footer} from "./footer/Footer";
import {AboutMe} from "./aboutMe/AboutMe";

function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <AboutMe/>
            <MyProjects/>
            <Contacts/>
            <Footer/>
        </div>
    );
}

export default App;
