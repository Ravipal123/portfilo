import React, { useEffect, useState, useRef } from "react";
import { SiWebmoney } from "react-icons/si";
import { menu } from "../../data";
import { Link, animateScroll as scroll } from "react-scroll";
import { FaArrowUpRightFromSquare, FaBarsStaggered } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";
import "./Navbar.css";
import gsap from "gsap";

const Navbar = () => {
    const [showSidebar, setShowSidebar] = useState(false);
    const [visible, setVisible] = useState(false);
    const container = useRef(null);
    const tabItems = useRef([]);

    const handleScroll = () => {
        const currentScrollPos = window.scrollY;
        setVisible(currentScrollPos > 145);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        if (visible) {
            gsap.fromTo(
                container.current,
                { y: -250 },
                { y: 0, top: 0, zIndex: 100 }
            );
        }
    }, [visible]);

    useEffect(() => {
        gsap.from(tabItems.current, { opacity: 0, stagger: 0.5 });
    }, []);

    return (
        <nav
            className={`navbar__container ${visible ? "visible" : ""}`}
            ref={container}
        >
            {showSidebar && (
                <div
                    className="overlay"
                    onClick={() => setShowSidebar(false)}
                ></div>
            )}
            <div
                className="logo__container"
                onClick={() => scroll.scrollToTop({ duration: 500 })}
            >
                <SiWebmoney />
            </div>
            <div className={`tab__group ${showSidebar ? "show" : ""}`}>
                <span
                    className="icon__container close__btn"
                    onClick={() => setShowSidebar(!showSidebar)}
                >
                    <FaTimes />
                </span>
                {menu.map((list, index) => (
                    <Link
                        ref={(el) => (tabItems.current[index] = el)}
                        activeClass="active"
                        className="tab__item name"
                        to={list.name.toLowerCase()}
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        key={index}
                    >
                        {list.name}
                    </Link>
                ))}
            </div>
            <div className="nav__buttons__group">
                <button className="btn btn__primary">
                    <a href="./RaviKumar_.pdf" download="./RaviKumar_.pdf">Download Resume<FaArrowUpRightFromSquare style={{marginLeft: "5px"}} /></a>
                </button>
                <FaBarsStaggered
                    className="menu"
                    onClick={() => setShowSidebar(!showSidebar)}
                />
            </div>
        </nav>
    );
};

export default Navbar;
