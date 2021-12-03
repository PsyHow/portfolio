import style from "./Footer.module.scss"
import styleContainer from "../common/styles/Container.module.css";
import React from "react";
import gmailImg from "../assets/image/gmail.png";
import telegramImg from "../assets/image/telegram.png";
import linkedinImg from "../assets/image/linkedin.png";
import githubImg from "../assets/image/github.png";

export const Footer = () => {

    const gmail = {
        backgroundImage: `url(${ gmailImg })`,
    }
    const telegram = {
        backgroundImage: `url(${ telegramImg })`,
    }
    const linkedIn = {
        backgroundImage: `url(${ linkedinImg })`,
    }
    const github = {
        backgroundImage: `url(${ githubImg })`,
    }

    return (
        <div className={ style.footerBlock }>
            <div className={ `${ styleContainer.container } ${ style.container }` }>
                <span className={ style.title }>Burnishev Viktor</span>
                <div className={ style.socialContainer }>
                    <div className={ style.social } style={gmail}></div>
                    <div className={ style.social } style={telegram}></div>
                    <div className={ style.social } style={linkedIn}></div>
                    <div className={ style.social } style={github}></div>
                </div>
                <p className={ style.about }>Copyright © 2021. All rights reserved.</p>
            </div>
        </div>
    );
}