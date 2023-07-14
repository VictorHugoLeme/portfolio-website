import React from 'react'
import { useTranslation } from 'react-i18next'
import Translator from '../i18n/Translator'

const CTA = () => {
  const { i18n } = useTranslation()
  const cvEng = "https://firebasestorage.googleapis.com/v0/b/portfolio-victorhleme.appspot.com/o/cv%2FENG%2FCvVictorHugoLeme-Fullstack-Developer?alt=media&token=38e980e5-1854-4961-a2b8-3364ef6ffeda"
  const cvPor = "https://firebasestorage.googleapis.com/v0/b/portfolio-victorhleme.appspot.com/o/cv%2FPOR%2FCvVictorHugoLeme-Fullstack-Developer?alt=media&token=5407bba1-04e6-476a-a80b-f258fff91e2f"
  let cvVersion = i18n.language === 'pt-BR' ? cvPor : cvEng

  return (
    <div className='cta'>
      <a className="btn" target="_blank" rel="noreferrer" href={cvVersion} download><Translator path='CTA.download' /></a>
      <a className="btn btn-primary" href='#contact'><Translator path='CTA.contact' /></a>
    </div>
  )
}

export default CTA