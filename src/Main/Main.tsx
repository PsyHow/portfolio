import React from "react";
import style from "./Main.module.scss"
import containerStyle from "../common/styles/Container.module.css"
import mainPhoto from "./../assets/image/321.jpg";
import Particles from "react-tsparticles";
import Typewriter from 'typewriter-effect';

export const Main = () => {
    const photo = {
        backgroundImage: `url(${ mainPhoto })`,
    }
    return (
        <div id={ 'home' } className={ style.mainBlock }>
            <Particles className={style.particles} options={{
                fpsLimit: 30,
                particles: {
                    color: {
                        value: "#F0E68C",
                    },
                    links: {
                        color: "#BA55D3",
                        distance: 150,
                        enable: true,
                        opacity: 0.5,
                        width: 1,
                    },
                    collisions: {
                        enable: true,
                    },
                    move: {
                        direction: "none",
                        enable: true,
                        outMode: "bounce",
                        random: false,
                        speed: 3,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 800,
                        },
                        value: 80,
                    },
                    opacity: {
                        value: 0.5,
                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        random: true,
                        value: 5,
                    },
                },
                detectRetina: true,
            }} />
            <div id={ "main" } className={ `${ containerStyle.container } ${ style.container }` }>
                <div className={ style.greetingText }>
                    <span>Hi there!</span>
                    <h1 className={ style.myName }>I am <span>Burnishev</span> Viktor
                    </h1>
                    <Typewriter
                        options={{
                            strings: ['A Frontend Developer'],
                            autoStart: true,
                            loop: true,
                        }}
                    />
                </div>
                <div className={ style.photoContainer }>
                    <div className={ style.border1 }></div>
                    <div className={ style.border2 }></div>
                    <div className={ style.photo } style={ photo }></div>
                </div>
            </div>
        </div>
    );
}