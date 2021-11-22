import React          from "react";
import style          from "./MyProjects.module.scss"
import { Project }    from "./Projects/Project";
import containerStyle from "../common/styles/Container.module.css";
import { Title }      from "../common/components/Title/Title";
import socialImage    from "../assets/image/0_zyCI97lw5e_a7-sP.jpg"
import todoImage      from "../assets/image/istockphoto-863607936-612x612.jpg"
import counterImage   from "../assets/image/360_F_72928371_WqqMwhEb3XPmeGlqH3ynIaoFss8uyV3K.jpg"

export const MyProjects = () => {

    const social = {
        backgroundImage: `url(${ socialImage })`,
    }
    const todolist = {
        backgroundImage: `url(${ todoImage })`,
    }
    const counter = {
        backgroundImage: `url(${ counterImage })`,
    }

    return (
        <div className={ style.myProjects }>
            <div className={ `${ containerStyle.container } ${ style.container }` }>
                <Title text={ 'My Project' }/>
                <div className={ style.project }>
                    <Project style={ todolist } title={ 'Todolist' } link={ 'https://github.com/PsyHow/Todolist' }
                             description={ 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,' +
                             ' sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ' }/>
                    <Project style={ social } title={ 'Social-Network' }
                             link={ 'https://github.com/PsyHow/social-Network' }
                             description={ 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,' +
                             ' sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' }/>
                    <Project style={ counter } title={ 'Simple-Counter' }
                             link={ 'https://github.com/PsyHow/SimpleCounter' }
                             description={ 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,' +
                             ' sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' }/>
                </div>
            </div>
        </div>
    );
}