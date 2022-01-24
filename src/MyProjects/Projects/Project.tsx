import style from "./Project.module.scss"
import React from "react";
import { Button } from "../../common/components/Button/Button";
import Fade from "react-awesome-reveal";

type PropsType = {
    title: string
    description: string
    style: any
    link: string
}

export const Project = (props: PropsType) => {
    return (
        <Fade>
            <div className={ style.project }>
                <div className={ style.imgContainer } style={ props.style }>
                    <Button text={ "Watch Now" } link={ props.link }/>
                </div>
                <div className={ style.projectInfo }>
                    <h3 className={ style.projectTitle }>{ props.title }</h3>
                    <span
                        className={ style.projectDescription }>{ props.description }</span>
                </div>
            </div>
        </Fade>

    );
}


