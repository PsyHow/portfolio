import style from "./Footer.module.css"
import styleContainer from "../common/styles/Container.module.css";
import React from "react";

export const Footer = () => {
    return (
        <div className={style.footerBlock}>
            <div className={`${styleContainer.container} ${style.container}`}>
                <h2 className={style.title}>Burnishev Viktor</h2>
                <div className={style.socialContainer}>
                    <div className={style.social}></div>
                    <div className={style.social}></div>
                    <div className={style.social}></div>
                    <div className={style.social}></div>
                </div>
                <span>2021</span>
            </div>
        </div>
    );
}