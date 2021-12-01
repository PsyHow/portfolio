import style          from "./RemoteWork.module.scss";
import React          from "react";
import styleContainer from '../common/styles/Container.module.css'

export const RemoteWork = () => {
    return (
        <div className={style.remoteWork}>
            <div className={`${styleContainer.container} ${style.container}`}>
                <a className={style.link} href={''}>HIRE ME</a>
            </div>
        </div>
    );
}

