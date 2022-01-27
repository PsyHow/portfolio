import React from 'react';
import style from './MySkills.module.scss'
import containerStyle from "../common/styles/Container.module.css";
import { Skill } from "./skill/Skill";
import { Title } from "../common/components/Title/Title";
import jsImage from "../assets/javascript.png";
import htmlImage from "../assets/image/html.png";
import tsImage from "../assets/typescript.png";
import api from "../assets/api.png";
import reactImage from "../assets/physics.png";
import reduxImage from "../assets/redux1.svg";
import firebaseImg from "../assets/mascot_firebase-logo.png";
import Fade from 'react-awesome-reveal';

export const MySkills = () => {

    const javaScript = {
        backgroundImage: `url(${ jsImage })`,
    }
    const typescript = {
        backgroundImage: `url(${ tsImage })`,
    }
    const firebase = {
        backgroundImage: `url(${ firebaseImg })`,
    }
    const restApi = {
        backgroundImage: `url(${ api })`,
    }
    const redux = {
        backgroundImage: `url(${ reduxImage })`,
    }
    const html = {
        backgroundImage: `url(${ htmlImage })`,
    }
    const react = {
        backgroundImage: `url(${ reactImage })`,
    }

    return (
        <div id={ 'skills' } className={ style.skillsBlock }>
            <Fade>
                <div
                    className={ `${ containerStyle.container } ${ style.skillsContainer }` }>
                    <Title text={ 'Skills' }/>
                    <Fade>
                        <div className={ style.skills }>
                            <Skill style={ javaScript } title={ 'JavaScript' }/>
                            <Skill style={ react } title={ 'React' }/>
                            <Skill style={ redux } title={ 'Redux' }/>
                            <Skill style={ typescript } title={ 'Typescript' }/>
                            <Skill style={ restApi } title={ 'RestApi' }/>
                            <Skill style={ firebase } title={ 'Firebase' }/>
                            <Skill style={ redux } title={ 'Redux Toolkit' }/>
                            <Skill style={ html } title={ 'Html & Css' }/>
                        </div>
                    </Fade>
                </div>
            </Fade>
        </div>
    );
}