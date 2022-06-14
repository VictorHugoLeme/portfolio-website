import React from 'react'
import './experience.css'
import { BsPatchCheckFill } from 'react-icons/bs'
import Translator from '../i18n/Translator'

const Experience = () => {
    return (
        <section id='experience'>
            <h5><Translator path='experience.title' /></h5>
            <h2><Translator path='experience.subtitle' /></h2>
            <div className="experience experience__container">
                <div className="experience__frontend">
                    <h3><Translator path='experience.frontend' /></h3>
                    <div className="experience__content">
                        <article className='experience__details'>
                            <BsPatchCheckFill className='experience__details-icon' />
                            <div>
                                <h4>HTML</h4>
                                <small className='text-light'><Translator path='experience.experienced' /></small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <BsPatchCheckFill className='experience__details-icon' />
                            <div>
                                <h4>CSS</h4>
                                <small className='text-light'><Translator path='experience.experienced' /></small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <BsPatchCheckFill className='experience__details-icon' />
                            <div>
                                <h4>Javascript</h4>
                                <small className='text-light'><Translator path='experience.intermediate' /></small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <BsPatchCheckFill className='experience__details-icon' />
                            <div>
                                <h4>ReactJS</h4>
                                <small className='text-light'><Translator path='experience.intermediate' /></small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <BsPatchCheckFill className='experience__details-icon' />
                            <div>
                                <h4>Tailwind</h4>
                                <small className='text-light'><Translator path='experience.intermediate' /></small>
                            </div>
                        </article>
                    </div>
                </div>
                {/* END OF FRONTEND */}
                <div className="experience__backend">
                    <h3><Translator path='experience.backend' /></h3>
                    <div className="experience__content">
                        <article className='experience__details'>
                            <BsPatchCheckFill className='experience__details-icon' />
                            <div>
                                <h4>Java</h4>
                                <small className='text-light'><Translator path='experience.intermediate' /></small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <BsPatchCheckFill className='experience__details-icon' />
                            <div>
                                <h4>Spring Boot</h4>
                                <small className='text-light'><Translator path='experience.intermediate' /></small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <BsPatchCheckFill className='experience__details-icon' />
                            <div>
                                <h4>Python</h4>
                                <small className='text-light'><Translator path='experience.intermediate' /></small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <BsPatchCheckFill className='experience__details-icon' />
                            <div>
                                <h4>Django</h4>
                                <small className='text-light'><Translator path='experience.intermediate' /></small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <BsPatchCheckFill className='experience__details-icon' />
                            <div>
                                <h4>PostgreSQL</h4>
                                <small className='text-light'><Translator path='experience.intermediate' /></small>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience