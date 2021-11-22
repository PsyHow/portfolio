import style          from "./Contacts.module.css";
import React          from "react";
import styleContainer from "../common/styles/Container.module.css"
import { Title }      from "../common/components/Title/Title";

export const Contacts = () => {
    return (
        <div className={ style.contactBlock }>
            <div className={ `${ styleContainer.container } ${ style.container }` }>
                <Title text={ 'Contacts' }/>
                <form className={ style.form }>
                    <input type={ "text" }/>
                    <input type={ "text" }/>
                    <textarea>
                    </textarea>
                </form>
                <button className={ style.button }>Send</button>
            </div>
        </div>
    );
}