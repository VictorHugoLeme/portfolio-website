import React from 'react'
import { useTranslation } from 'react-i18next'
import Translator from '../i18n/Translator'

const CTA = () => {
  const { i18n } = useTranslation()
  const cvEng = "https://firebasestorage.googleapis.com/v0/b/portfolio-victorhleme.appspot.com/o/CV%2FVictorHugoLemeCVen.pdf?alt=media&token=f5e3c906-e19c-4edd-8d1a-08238468ecfb"
  const cvPor = "https://firebasestorage.googleapis.com/v0/b/portfolio-victorhleme.appspot.com/o/CV%2FVictorHugoLemeCVpt.pdf?alt=media&token=959062cc-9426-440c-ae57-6dd59641061d"
  let cvVersion = i18n.language === 'pt-BR' ? cvPor : cvEng

  return (
    <div className='cta'>
      <a className="btn" target="_blank" rel="noreferrer" href={cvVersion} download><Translator path='CTA.download' /></a>
      <a className="btn btn-primary" href='#contact'><Translator path='CTA.contact' /></a>
    </div>
  )
}

export default CTA