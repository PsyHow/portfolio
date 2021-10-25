import React from 'react';
import './App.css';
import {Header} from "./header/Header";
import {Main} from "./main/Main";
import {MySkills} from "./skills/MySkills";
import {MyProjects} from "./MyProjects/MyProjects";
import {RemoteWork} from "./remoteWork/RemoteWork";
import {Footer} from "./footer/Footer";
import {Contacts} from "./contacts/Contacts";

function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <MySkills/>
            <MyProjects/>
            <RemoteWork/>
            <Contacts/>
            <Footer/>
        </div>
    );
}

export default App;

