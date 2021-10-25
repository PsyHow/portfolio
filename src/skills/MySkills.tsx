import React from 'react';
import style from './MySkills.module.css'
import containerStyle from "../common/styles/Container.module.css";
import {Skill} from "./skill/Skill";

export const MySkills = () => {
    return (
        <div className={style.skillsBlock}>
            <div className={`${containerStyle.container} ${style.skillsContainer}`}>
                <h2 className={style.title}>Skills</h2>
                <div className={style.skills}>
                    <Skill title={'JS'}
                           description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit'}/>
                    <Skill title={'Html&Css'}
                           description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit'}/>
                    <Skill title={'React'}
                           description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit'}/>
                </div>
            </div>
        </div>
    );
}