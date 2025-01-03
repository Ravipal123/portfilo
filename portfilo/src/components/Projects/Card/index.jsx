import React, { useState } from 'react';
import { AiOutlineShareAlt } from 'react-icons/ai';
import './Card.css';

const Card = (props) => {
    const [openStackExpandBar, setOpenStackExpandBar] = useState(false);

    return (
        <div className="card">
            <div className="picture">
                <img src={props.image} alt={props.title} />
            </div>

            <div className="card_details">
                <div className="card_details__top">
                    <h2 className="title">{props.title}</h2>
                </div>

                <div className="card__details__middle">
                    <p className="description">{props.data.description}</p>
                </div>

                <div className="card__details__bottom">
                    <div className="stack__container">
                        <div className="stack__left">Stack</div>
                        <div className="stack__right">
                            <div className="stack__box__container">
                                {props.stack.slice(0, 4).map((list, index) => (
                                    <div className="stack__box" key={index}>
                                        <div className="stack__icon__container">
                                            <span
                                                className="stack__icon"
                                                style={{ color: list.iconColor }}
                                            >
                                                {list.icon}
                                            </span>
                                            <span className="stack__name">{list.name}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {props.stack.length > 4 && (
                                <div className="stack__view__more">
                                    <div
                                        className="more__btn"
                                        onClick={() => setOpenStackExpandBar(!openStackExpandBar)}
                                    >
                                        {openStackExpandBar ? "View Less" : "View More"}
                                    </div>

                                    <div
                                        className={`stack__expand__box ${
                                            openStackExpandBar ? "open__stack__expand__box" : ""
                                        }`}
                                    >
                                        <h3 className="title">More Stack Used</h3>
                                        <div className="stack__box__container">
                                            {props.stack.slice(4).map((list, index) => (
                                                <div className="stack__box" key={index}>
                                                    <div className="stack__icon__container">
                                                        <span
                                                            className="stack__icon"
                                                            style={{ color: list.iconColor }}
                                                        >
                                                            {list.icon}
                                                        </span>
                                                        <span className="stack__name">{list.name}</span>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="button__container">
                        <a
                            href={props.demoLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn__primary"
                        >
                            Demo
                        </a>
                        <div className="btn__share">
                            <AiOutlineShareAlt />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
