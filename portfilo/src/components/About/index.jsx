import React, { useEffect, useRef } from 'react';
import { Profile } from '../../images/Image';
import './About.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
    const container = useRef(null);

    useEffect(() => {
        const el = container.current;
        const aboutContainer = el.querySelector(".about__container");

        const animation = gsap.fromTo(
            aboutContainer,
            { scale: 0.7 },
            {
                scale: 1,
                scrollTrigger: {
                    trigger: aboutContainer,
                    scrub: true,
                    ease: "power1.out",
                },
            }
        );

        return () => {
            animation.kill(); // Kill GSAP animation
            ScrollTrigger.getAll().forEach(trigger => trigger.kill()); // Cleanup ScrollTrigger
        };
    }, []);

    return (
        <section id="about" ref={container}>
            <div className="section__wrapper about__container">
                <div className="me__container blur-effect">
                    <div className="photo__container">
                        <img
                            src={Profile}
                            alt="Ravi Kumar"
                        />
                    </div>
                </div>
                <div className="section__header">
                    <h2 className="primary__title">About Me</h2>
                    <h1 className="title">
                        I am <span className="color__primary">Ravi Kumar</span>
                    </h1>
                    <p className="text__muted description">
                        A Full Stack Developer with a passion for creating dynamic, intuitive, and responsive applications.
                        Proficient in multiple programming languages and frameworks. Strong problem-solving and analytical
                        skills, and a track record of delivering high-quality code on time and on budget.
                    </p>
                    <button className="btn btn__primary">Contact Me</button>
                </div>
            </div>
        </section>
    );
};

export default About;
