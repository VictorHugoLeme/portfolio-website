import { React } from 'react'
import { useTranslation } from 'react-i18next'
import { getCvUrl } from '../../../store/store'
import Translator from '../i18n/Translator'

export default function CTA() {

  const { i18n } = useTranslation()
  let cvVersion = i18n.language === 'pt-BR' ? 'pt' : 'eng'

  const getCv = async () => {
    await getCvUrl(cvVersion).then(response => {
      window.open(response.data, '_blank')
    })
  }

  return (
    <div className='cta'>
      <a className="btn" href='#about' onClick={getCv}><Translator path='CTA.download' /></a>
      <a className="btn btn-primary" href='#contact'><Translator path='CTA.contact' /></a>
    </div>
  )
}
