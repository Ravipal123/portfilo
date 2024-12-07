import React from 'react';
import './Skills.css';
import { experience } from '../../data';
import SkillCard from './SkillCard';

const Skills = () => {
    return (
        <section>
            <div id="skill">
                <div className="section__wrapper">
                    <div className="section__header center">
                        <div className="primary__title">My Skills</div>
                    </div>
                    <div className="skill__container">
                        {
                            experience.map((list, index) => (
                                <SkillCard 
                                    {...list}
                                    key={index}
                                />
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills
