import { useTranslation } from 'react-i18next'
// Importamos o hook

const Translator = ({ path }) => {
    const { t } = useTranslation()

    return t(path)
}

export default Translator