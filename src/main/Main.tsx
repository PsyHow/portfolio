import React from 'react';
import style from './Main.module.css'
import containerStyle from '../common/styles/Container.module.css'

export const Main = () => {
    return (
        <div className={style.mainBlock}>
            <div className={containerStyle.container}>
                <div className={style.greetingText}>
                    <span>Hi there</span>
                    <h1>I am Burnishev Viktor</h1>
                    <p>A Frontend Developer</p>
                </div>
                <div className={style.photo}></div>
            </div>
        </div>
    );
}