import React from "react";
import style from "./Main.module.scss"
import containerStyle from "../common/styles/Container.module.css"
import mainPhoto from "./../assets/image/avatar.jpg"

export const Main = () => {

    const photo = {
        backgroundImage: `url(${mainPhoto})`
    }
    return (
        <div className={style.mainBlock}>
            <div className={containerStyle.container}>
                <div className={style.greetingText}>
                    <span>Hi there!</span>
                    <h1 className={style.myName}>I am Burnishev Viktor</h1>
                    <p>A Frontend Developer</p>
                </div>
                <div className={style.photo} style={photo}></div>
            </div>
        </div>
    );
}