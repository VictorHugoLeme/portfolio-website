import React, { useEffect, useState } from 'react';
import './experience.css'
import { BsPatchCheckFill } from 'react-icons/bs'
import Translator from '../i18n/Translator'
import { getData } from '../../../store/store'
import Loader from '../loader/Loader';

export default function Experience() {

    const [loadedData, setLoadedData] = useState(null);

    useEffect(() => {
        getData()
            .then(response => {
                setLoadedData(response)
            })
    }, [])

    return (
        <section id='experience'>
            <h5><Translator path='experience.title' /></h5>
            <h2><Translator path='experience.subtitle' /></h2>
            <div className="experience experience__container">
                {/* BACKEND */}
                <div className="experience__backend">
                    <h3><Translator path='experience.backend' /></h3>
                    {loadedData == null &&
                        <Loader />}
                    {loadedData != null &&
                        <div className="experience__content">
                            {[...loadedData.experience.backEndExperience].map(item =>
                                <li key={item.name}>
                                    <article className='experience__details'>
                                        <BsPatchCheckFill className='experience__details-icon' />
                                        <div>
                                            <h4>{item.name}</h4>
                                            <small className='text-light'><Translator path={item.experience} /></small>
                                        </div>
                                    </article>
                                </li>
                            )}
                        </div>
                    }
                </div>
                {/* FRONTEND */}
                <div className="experience__frontend">
                    <h3><Translator path='experience.frontend' /></h3>
                    {loadedData == null &&
                        <Loader />}
                    {loadedData != null &&
                        <div className="experience__content">
                            {[...loadedData.experience.frontEndExperience].map(item =>
                                <li key={item.name}>
                                    <article className='experience__details'>
                                        <BsPatchCheckFill className='experience__details-icon' />
                                        <div>
                                            <h4>{item.name}</h4>
                                            <small className='text-light'><Translator path={item.experience} /></small>
                                        </div>
                                    </article>
                                </li>
                            )}
                        </div>
                    }
                </div>
            </div>
        </section>
    )
}