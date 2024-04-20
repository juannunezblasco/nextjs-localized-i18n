	
export const fallbackLng: string = 'es'
export const languages: string[] = [fallbackLng, 'en']
export const cookieName: string = 'i18next'
export const defaultNS: string = 'translation'

export function getOptions (lng = fallbackLng, ns = defaultNS) {
  return {
    // debug: true,
    supportedLngs: languages,
    fallbackLng,
    lng,
    fallbackNS: defaultNS,
    defaultNS,
    ns
  }
}