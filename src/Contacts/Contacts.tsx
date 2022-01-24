import style from "./Contacts.module.scss";
import React from "react";
import styleContainer from "../common/styles/Container.module.css"
import { Title } from "../common/components/Title/Title";
import { Button } from "../common/components/Button/Button";
import Fade from "react-awesome-reveal";

export const Contacts = () => {
    return (
        <div id={ 'contact' } className={ style.contactBlock }>
            <Fade>
            <div className={ `${ styleContainer.container } ${ style.container }` }>
                <Title text={ 'Contact' }/>
                <form className={ style.form }>
                    <input type={ "text" } placeholder={ 'Name' }/>
                    <input type={ "text" } placeholder={ 'Email' }/>
                    <textarea placeholder={ 'Message' }>
                    </textarea>
                    <Button text={"Send"} link={""}/>
                </form>
            </div>
            </Fade>
        </div>
    );
}