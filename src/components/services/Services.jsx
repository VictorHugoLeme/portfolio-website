import React from 'react'
import './services.css'
import { BiCheck } from 'react-icons/bi'
import Translator from '../i18n/Translator'

const Services = () => {
    return (
        <section id='services'>
            <h5><Translator path='services.title' /></h5>
            <h2><Translator path='services.subtitle' /></h2>
            <div className="div container services__container">

                <article className="service">
                    <div className="service__head">
                        <h3><Translator path='services.web' /></h3>
                    </div>
                    <ul className="service__list">
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p><Translator path='services.webl.item1' /></p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p><Translator path='services.webl.item2' /></p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p><Translator path='services.webl.item3' /></p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p><Translator path='services.webl.item4' /></p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p><Translator path='services.webl.item5' /></p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p><Translator path='services.webl.item6' /></p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p><Translator path='services.webl.item7' /></p>
                        </li>
                    </ul>
                </article>

                <article className="service">
                    <div className="service__head">
                        <h3><Translator path='services.backend' /></h3>
                    </div>
                    <ul className="service__list">
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p><Translator path='services.backendl.item1' /></p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p><Translator path='services.backendl.item2' /></p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p><Translator path='services.backendl.item3' /></p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p><Translator path='services.backendl.item4' /></p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p><Translator path='services.backendl.item5' /></p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p><Translator path='services.backendl.item6' /></p>
                        </li>
                    </ul>
                </article>

                <article className="service">
                    <div className="service__head">
                        <h3><Translator path='services.UI' /></h3>
                    </div>
                    <ul className="service__list">
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p><Translator path='services.UIl.item1' /></p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p><Translator path='services.UIl.item2' /></p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p><Translator path='services.UIl.item3' /></p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p><Translator path='services.UIl.item4' /></p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p><Translator path='services.UIl.item5' /></p>
                        </li>
                    </ul>
                </article>

            </div>
        </section>
    )
}

export default Services