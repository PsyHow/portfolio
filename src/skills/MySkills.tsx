import React from 'react';
import style from './MySkills.module.scss'
import containerStyle from "../common/styles/Container.module.css";
import { Skill } from "./skill/Skill";
import { Title } from "../common/components/Title/Title";
import jsImage from "../assets/image/js.png";
import htmlImage from "../assets/image/html.png";
import reactImage from "../assets/image/React.jpg";
import Fade from 'react-awesome-reveal';

export const MySkills = () => {

    const javaScript = {
        backgroundImage: `url(${ jsImage })`,
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
                        <Skill style={ javaScript } title={ 'JavaScript' }
                               description={ 'Lorem ipsum dolor sit amet, consectetur adipiscing elit' }/>
                        <Skill style={ html } title={ 'Html & Css' }
                               description={ 'Lorem ipsum dolor sit amet, consectetur adipiscing elit' }/>
                        <Skill style={ react } title={ 'React' }
                               description={ 'Lorem ipsum dolor sit amet, consectetur adipiscing elit' }/>
                    </div>
                    </Fade>
                </div>
            </Fade>
        </div>
    );
}