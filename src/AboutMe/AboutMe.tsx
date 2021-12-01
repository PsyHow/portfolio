import React     from "react";
import { Title } from "../common/components/Title/Title";
import style     from "./AboutMe.module.scss"
import { Table } from "../common/components/Table/Table";

export const AboutMe = () => {

    return (
        <section className={ style.about }>
            <div className={ style.container }>
                <div className={ style.roww }>
                    <div className={ style.resumeMainTitle }>
                        <Title subtitle={ "About me" }
                               title={ "Biography" }
                               description={ "Hi, I'm a frontend developer specializing in\n" +
                               "                creating Spa at React / Redux.\n" +
                               "                I would like to find a full-time job with a\n" +
                               "                professional team in order to further\n" +
                               "                develop my skills and grow as a\n" +
                               "                developer.\n" +
                               "                My free time is dedicated to Codewars,\n" +
                               "                programming tutorials, and becoming\n" +
                               "                familiar with NodeJS, because,\n" +
                               "                in the future, I see myself as a Full Stack\n" +
                               "                Developer." }/>
                        <div className={ style.aboutInfo }>
                            <div className={ style.aboutLeft }>
                                <Table/>
                            </div>
                            <div className={ style.aboutRight }>
                                <div className={ style.cvDwnld }>
                                    <a download="#">
                                        <span>Download CV</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}