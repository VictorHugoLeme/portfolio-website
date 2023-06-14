import React from 'react'
import CV from '../../../assets/VictorHugoLemeCVpt.pdf'
import EngCV from '../../../assets/VictorHugoLemeCVen.pdf'
import { useTranslation } from 'react-i18next'
import Translator from '../i18n/Translator'

const CTA = () => {
  const { i18n } = useTranslation()
  let cvVersion = i18n.language === 'pt-BR' ? CV : EngCV

  return (
    <div className='cta'>
      <a className="btn" href={cvVersion} download><Translator path='CTA.download' /></a>
      <a className="btn btn-primary" href='#contact'><Translator path='CTA.contact' /></a>
    </div>
  )
}

export default CTA