import { createI18n } from 'vue-i18n'
import en from './locales/en.json'
import et from './locales/et.json'

const messages = {
    en,
    et
}

const i18n = createI18n({
    locale: 'en', // set locale
    fallbackLocale: 'en', // set fallback locale
    messages, // set locale messages
})

export default i18n
