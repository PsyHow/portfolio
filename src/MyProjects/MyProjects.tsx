import React          from "react";
import style          from "./MyProjects.module.scss"
import containerStyle from "../common/styles/Container.module.css";
import socialImage    from "../assets/image/0_zyCI97lw5e_a7-sP.jpg"
import todoImage      from "../assets/image/istockphoto-863607936-612x612.jpg"
import counterImage   from "../assets/image/360_F_72928371_WqqMwhEb3XPmeGlqH3ynIaoFss8uyV3K.jpg"

export const MyProjects = () => {

    const social = { backgroundImage: `url(${ socialImage })` }
    const todolist = { backgroundImage: `url(${ todoImage })` }
    const counter = { backgroundImage: `url(${ counterImage })` }

    return (
        <div id={ 'projects' } className={ style.myProjects }>
            <div className={ `${ containerStyle.container } ${ style.container }` }>
                <div className={ style.titleBox }>

                    <div className={ style.navigation }>
                        <a className={ style.prev } href={ '' }>
                            <span></span>
                        </a>
                        <a className={ style.next } href={ '' }>
                            <span></span>
                        </a>
                    </div>
                </div>
                <div className={ style.projects }>
                    <div className={ style.projectItems }>
                        <div className={ style.items }>
                            <div className={ style.img } style={ social }></div>
                            <div className={ style.img } style={ todolist }></div>
                            <div className={ style.img } style={ counter }></div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}