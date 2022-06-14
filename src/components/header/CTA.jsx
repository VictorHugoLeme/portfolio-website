import React from 'react'
import CV from '../../assets/cv.pdf'
import Translator from '../i18n/Translator'

const CTA = () => {
  return (
    <div className='cta'>
      <a className="btn" href={CV} download><Translator path='CTA.download' /></a>
      <a className="btn btn-primary" href='#contact'><Translator path='CTA.contact' /></a>
    </div>
  )
}

export default CTA