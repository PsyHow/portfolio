import React          from 'react';
import './App.css';
import { Header }     from "./Header/Header";
import { Main }       from "./Main/Main";
import { MySkills }   from "./skills/MySkills";
import { MyProjects } from "./MyProjects/MyProjects";
import { RemoteWork } from "./RemoteWork/RemoteWork";
import { Footer }     from "./Footer/Footer";
import { Contacts }   from "./Contacts/Contacts";
import { AboutMe }    from "./AboutMe/AboutMe";

function App() {
    return (
        <div className="App">
                {/*<Header/>*/}
                <Main/>
                <AboutMe/>
                <MySkills/>
                <MyProjects/>
                <RemoteWork/>
                <Contacts/>
                <Footer/>
        </div>
    );
}

export default App;

