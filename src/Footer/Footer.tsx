import style          from "./Footer.module.scss"
import styleContainer from "../common/styles/Container.module.css";
import React          from "react";
import {Title} from "../common/components/Title/Title";

export const Footer = () => {
    return (
        <div className={ style.footerBlock }>
            <div className={ `${ styleContainer.container } ${ style.container }` }>
                <Title text={'Burnishev Viktor'}/>
                <div className={ style.socialContainer }>
                    <div className={ style.social }></div>
                    <div className={ style.social }></div>
                    <div className={ style.social }></div>
                    <div className={ style.social }></div>
                </div>
                <p className={style.about}>Copyright © 2021. All rights reserved.</p>
            </div>
        </div>
    );
}