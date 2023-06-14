import React from 'react'
import './experience.css'
import { BsPatchCheckFill } from 'react-icons/bs'
import Translator from '../i18n/Translator'

const frontEndExperience = [
    {
        name: "VueJs",
        experience: "experience.intermediate"
    },
    {
        name: "ReactJs",
        experience: "experience.intermediate"
    },
    {
        name: "HTML",
        experience: "experience.experienced"
    },
    {
        name: "CSS",
        experience: "experience.experienced"
    },
    {
        name: "Javascript",
        experience: "experience.intermediate"
    },
    {
        name: "Tailwind",
        experience: "experience.intermediate"
    }
]

const backEndExperience = [
    {
        name: "Java",
        experience: "experience.experienced"
    },
    {
        name: "Spring Boot",
        experience: "experience.experienced"
    },
    {
        name: "AWS Cloud Computing",
        experience: "experience.intermediate"
    },
    {
        name: "SQL Databases",
        experience: "experience.intermediate"
    },
    {
        name: "NoSQL Databases",
        experience: "experience.intermediate"
    },
]

const Experience = () => {
    return (
        <section id='experience'>
            <h5><Translator path='experience.title' /></h5>
            <h2><Translator path='experience.subtitle' /></h2>
            <div className="experience experience__container">
                {/* FRONTEND */}
                <div className="experience__frontend">
                    <h3><Translator path='experience.frontend' /></h3>
                    <div className="experience__content">
                        {[...frontEndExperience].map((item) => {
                            return (
                                <article className='experience__details'>
                                    <BsPatchCheckFill className='experience__details-icon' />
                                    <div>
                                        <h4>{item.name}</h4>
                                        <small className='text-light'><Translator path={item.experience} /></small>
                                    </div>
                                </article>
                            )
                        })}
                    </div>
                </div>
                {/* BACKEND */}
                <div className="experience__backend">
                    <h3><Translator path='experience.backend' /></h3>
                    <div className="experience__content">
                        {[...backEndExperience].map((item) => {
                            return (
                                <article className='experience__details'>
                                    <BsPatchCheckFill className='experience__details-icon' />
                                    <div>
                                        <h4>{item.name}</h4>
                                        <small className='text-light'><Translator path={item.experience} /></small>
                                    </div>
                                </article>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience