import style from "./RemoteWork.module.scss";
import React from "react";
import styleContainer from '../common/styles/Container.module.css'
import { Title } from "../common/components/Title/Title";
import { Button } from "../common/components/Button/Button";
import Fade from "react-awesome-reveal";

export const RemoteWork = () => {
    return (
        <div id={'cv'} className={ style.remoteWork }>
            <Fade>
                <div className={ `${ styleContainer.container } ${ style.container }` }>
                    <Title text={ "You can download my CV here" }/>
                    <Button text={ 'Download' }
                            link={ 'https://drive.google.com/file/d/1lAF1cTcEMMwKXHIOxQuVG-Zfpd9d8ARw/view?usp=sharing' }/>
                </div>
            </Fade>
        </div>
    );
}

