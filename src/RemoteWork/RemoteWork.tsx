import style from "./RemoteWork.module.css";
import React from "react";
import styleContainer from '../common/styles/Container.module.css'

export const RemoteWork = () => {
    return (
        <div className={style.remoteWork}>
            <div className={`${styleContainer.container} ${style.container}`}>
                <h2 className={style.title}>Considering options for remote work</h2>
                <a className={style.link} href={''}>HIRE ME</a>
            </div>
        </div>
    );
}