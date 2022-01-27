import React from "react";
import style from "./MyProjects.module.scss"
import { Project } from "./Projects/Project";
import containerStyle from "../common/styles/Container.module.css";
import { Title } from "../common/components/Title/Title";
import socialImage from "../assets/image/0_zyCI97lw5e_a7-sP.jpg"
import todoImage from "../assets/image/istockphoto-863607936-612x612.jpg"
import counterImage
    from "../assets/image/360_F_72928371_WqqMwhEb3XPmeGlqH3ynIaoFss8uyV3K.jpg"
import shopImage from "../assets/image/kak-zarabotat-na-internet-magazine.jpg"
import Fade from 'react-awesome-reveal';

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
    const shop = {
        backgroundImage: `url(${ shopImage })`,
    }

    return (
        <div id={ 'projects' } className={ style.myProjects }>
            <Fade>
                <div className={ `${ containerStyle.container } ${ style.container }` }>
                    <Fade>
                        <Title text={ 'My Project' }/>
                        <div className={ style.project }>
                            <Project style={ todolist } title={ 'Todolist' }
                                     link={ 'https://github.com/PsyHow/Todolist' }
                                     description={ 'A todolist app where you can add everyday notes. Made with React(Hooks)/ReduxToolkit/Typescript/Axios' }/>
                            <Project style={ social } title={ 'Social-Network' }
                                     link={ 'https://github.com/PsyHow/social-Network' }
                                     description={ 'Social network with a list of users. You can follow and unfollow users. View their pages. Made with React(Class)/Redux/Axios/Typescript' }/>
                            <Project style={ counter } title={ 'Simple-Counter' }
                                     link={ 'https://github.com/PsyHow/SimpleCounter' }
                                     description={ 'Pet project is a simple counter with settings. The data is stored in localStorage. Made with React(Hooks)/Redux/Typescript/LocalStorage' }/>
                            <Project style={ shop } title={ 'Shop' }
                                     link={ 'https://github.com/PsyHow/testShop' }
                                     description={ 'Another Pet project. Store page with a shopping cart. You can add an item to your cart and checkout via a form. Made with React(Hooks)/ReduxToolkit/Typescript/Firebase/Formik' }/>
                        </div>
                    </Fade>
                </div>
            </Fade>
        </div>
    );
}