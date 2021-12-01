import React from "react";
import style from "./Main.module.scss"
import containerStyle from "../common/styles/Container.module.css"
import mainPhoto from "./../assets/image/0lNvI18_fL4.jpg"

export const Main = () => {

    const photo = {
        backgroundImage: `url(${mainPhoto})`
    }
    return (
        <div id={'home'} className={style.mainBlock}>
            <div className={`${containerStyle.container} ${style.container}`}>
                <div className={style.photoContainer}>
                    <div className={style.border1}></div>
                    <div className={style.border2}></div>
                    <div className={style.mainPhotoBlock}>
                        <div className={style.photo} style={photo}></div>
                    </div>
                    <div className={style.greetingText}>
                        <span>Hi there! I am</span>
                        <h1 className={style.myName}>Burnishev Viktor</h1>
                        <p>A Frontend Developer</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
