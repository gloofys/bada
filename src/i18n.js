import { createI18n } from 'vue-i18n'

function loadLocaleMessages() {
    const locales = import.meta.glob('./locales/*.json', { eager: true })
    const messages = {}
    for (const key in locales) {
        const matched = key.match(/([A-Za-z0-9-_]+)\./i)
        if (matched && matched.length > 1) {
            const locale = matched[1]
            messages[locale] = locales[key].default
        }
    }
    return messages
}

const i18n = createI18n({
    locale: 'en', // set default locale
    fallbackLocale: 'en', // set fallback locale
    messages: loadLocaleMessages() // set locale messages
})

export default i18n