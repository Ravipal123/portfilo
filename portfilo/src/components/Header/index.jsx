import React, { useRef } from "react";
import { Profile } from "../../images/Image";
import "./Header.css";
import gsap from "gsap";
import { useLayoutEffect } from "react";

const Header = () => {
    const container = useRef(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            // Animations
            gsap.fromTo(
                ".profile__photo__container",
                { scale: 0.5, duration: 1, opacity: 0.5 },
                { scale: 1, duration: 1, ease: "sine.in", opacity: 1 }
            );

            gsap.from(".intro__text", {
                fontSize: 100,
                duration: 1,
                delay: 1,
                ease: "sine.in",
            });

            const timeline = gsap.timeline();
            timeline
                .from(".header__info__top", { opacity: 0 })
                .from(".header__title", { opacity: 0, y: -30 })
                .from(".btn", { x: -40, opacity: 0, stagger: 0.5 });
        }, container);

        return () => ctx.revert(); // Cleanup
    }, []);

    return (
        <header id="header" className="blur-effect" ref={container}>
            <div className="stroke__text intro__text">WEB DEVELOPER</div>
            <div className="section__wrapper header__container">
                <div className="column intro__container blur-effect">
                    <div className="header__info">
                        <div className="header__info__top">
                            Hello There! I'm <span className="color__primary">Ravi Kumar</span>
                        </div>
                        <div className="header__info__middle">
                            <h1 className="primary__title header__title">I'M A WEB DEVELOPER</h1>
                            <p className="text__muted header__description">
                                I dissect intricate user experience challenges to engineer integrity-focused
                                solutions that resonate with billions of users.
                            </p>
                        </div>
                        <div className="header__info__bottom">
                            <button className="btn"><a href="./images/RaviKumar_.pdf" download="./images/RaviKumar_.pdf">Download CV</a></button>
                            <a href="mailto:ravisidd1122@gmail.com" className="btn">Email Me</a>
                        </div>
                    </div>
                </div>
                <div className="column profile__wrapper">
                    <div className="profile__photo__container">
                        <img src={Profile} alt="Ravi" className="profile__photo" />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
