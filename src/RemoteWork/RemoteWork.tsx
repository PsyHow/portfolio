import style from "./RemoteWork.module.scss";
import React from "react";
import styleContainer from '../common/styles/Container.module.css'
import {Title} from "../common/components/Title/Title";
import { Button } from "../common/components/Button/Button";
import Fade from "react-awesome-reveal";

export const RemoteWork = () => {
    return (
        <div className={style.remoteWork}>
            <Fade>
            <div className={`${styleContainer.container} ${style.container}`}>
                <Title text={"Considering options for remote work"}/>
                <Button text={'HIRE ME'} link={''}/>
            </div>
            </Fade>
        </div>
    );
}

