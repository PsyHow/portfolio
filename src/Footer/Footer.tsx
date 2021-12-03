import style          from "./Footer.module.scss"
import styleContainer from "../common/styles/Container.module.css";
import React          from "react";
import {Title} from "../common/components/Title/Title";
import linkedinImg from "../assets/image/linkedin.png";
import telegramImg from "../assets/image/telegram.png";
import githubImg from "../assets/image/github-sign.png";
import gmailImg from "../assets/image/gmail.png";


export const Footer = () => {

    const linkedin = {
        backgroundImage: `url(${linkedinImg})`
    }
    const github = {
        backgroundImage: `url(${githubImg})`
    }
    const telegram = {
        backgroundImage: `url(${telegramImg})`
    }
    const gmail = {
        backgroundImage: `url(${gmailImg})`
    }

    return (
        <div className={ style.footerBlock }>
            <div className={ `${ styleContainer.container } ${ style.container }` }>
                <Title text={'Burnishev Viktor'}/>
                <div className={ style.socialContainer }>
                    <div className={ style.social } style={linkedin}></div>
                    <div className={ style.social } style={telegram}></div>
                    <div className={ style.social } style={github}></div>
                    <div className={ style.social } style={gmail}></div>
                </div>
                <p className={style.about}>Copyright © 2021. All rights reserved.</p>
            </div>
        </div>
    );
}