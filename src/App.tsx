import React          from 'react';
import './App.css';
import { Header }     from "./Header/Header";
import { Main }       from "./Main/Main";
import { MySkills }   from "./skills/MySkills";
import { MyProjects } from "./MyProjects/MyProjects";
import { RemoteWork } from "./RemoteWork/RemoteWork";
import { Footer }     from "./Footer/Footer";
import { Contacts }   from "./Contacts/Contacts";

function App() {
    return (
        <div>
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

