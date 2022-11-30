import React from 'react'
import { useTranslation } from 'react-i18next'
import './i18n.css'

import BrazilFlag from '../../../assets/flags/BrazilFlag.png'
import USAFlag from '../../../assets/flags/USAFlag.png'
import Flag from './Flag'

export const I18n = () => {
    const { i18n } = useTranslation()

    function handleChangeLanguage(language) {
        i18n.changeLanguage(language)
    }

    const selectedLanguage = i18n.language

    return (
        <div className="flags-container">
            <Flag className='flag'
                image={BrazilFlag}
                isSelected={selectedLanguage === 'pt-BR'}
                onClick={() => handleChangeLanguage('pt-BR')}
            />
            <Flag className='flag'
                image={USAFlag}
                isSelected={selectedLanguage === 'en-US'}
                onClick={() => handleChangeLanguage('en-US')}
            />
        </div>
    )
}
