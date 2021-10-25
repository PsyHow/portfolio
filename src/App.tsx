import React from 'react';
import './App.css';
import {Header} from "./header/Header";
import {Main} from "./main/Main";
import {MySkills} from "./skills/MySkills";
import {MyProjects} from "./MyProjects/MyProjects";

function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <MySkills/>
            <MyProjects/>
        </div>
    );
}

export default App;

