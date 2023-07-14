import React from 'react'
import { useTranslation } from 'react-i18next'
import Translator from '../i18n/Translator'

const CTA = () => {
  const { i18n } = useTranslation()
  const cvEng = "https://firebasestorage.googleapis.com/v0/b/portfolio-victorhleme.appspot.com/o/CV%2FVictorHugoLemeCVen.pdf?alt=media&token=8e8cfd08-5511-41f7-9207-efe8e2ee9b95"
  const cvPor = "https://firebasestorage.googleapis.com/v0/b/portfolio-victorhleme.appspot.com/o/CV%2FVictorHugoLemeCVpt.pdf?alt=media&token=72a4f032-96d2-4454-b9fa-9cb690fc14ca"
  let cvVersion = i18n.language === 'pt-BR' ? cvPor : cvEng

  return (
    <div className='cta'>
      <a className="btn" target="_blank" rel="noreferrer" href={cvVersion} download><Translator path='CTA.download' /></a>
      <a className="btn btn-primary" href='#contact'><Translator path='CTA.contact' /></a>
    </div>
  )
}

export default CTA