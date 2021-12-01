import React       from 'react';
import style       from "./App.module.scss"
import { AboutMe } from "./AboutMe/AboutMe";
import { Resume }  from "./Resume/Resume";

function App() {
    return (
        <div className={style.appContainer}>
                <div className={style.resumeLeftContent}>
                    <div className={style.resumePage}>
                        <AboutMe/>
                        <Resume/>
                    </div>
            </div>
        </div>
    );
}

export default App;

