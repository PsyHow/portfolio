import style from "./RemoteWork.module.scss";
import React from "react";
import styleContainer from '../common/styles/Container.module.css'
import {Title} from "../common/components/Title/Title";

export const RemoteWork = () => {
    return (
        <div className={style.remoteWork}>
            <div className={`${styleContainer.container} ${style.container}`}>
                <Title text={"Considering options for remote work"}/>
                <a className={style.link} href={''}>HIRE ME</a>
            </div>
        </div>
    );
}

