
import { NextResponse, NextRequest } from 'next/server'
import acceptLanguage from 'accept-language'
import { cookieName, fallbackLng, languages } from './modules/i18n/settings'

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|assets|images|styles|icons|favicon.ico|sw.js).*)']
}

export async function middleware(request: NextRequest) {

  const response = NextResponse.next()

  let locale
  if (request.cookies.has(cookieName)) locale = acceptLanguage.get(request.cookies.get(cookieName)?.value)
  if (!locale) locale = acceptLanguage.get(request.headers.get('Accept-Language'))
  if (!locale) locale = fallbackLng

  // Redirect if locale in path is not supported
  if (
    !languages.some(locale => request.nextUrl.pathname.startsWith(`/${locale}`)) &&
    !request.nextUrl.pathname.startsWith('/_next')
  ) {
    return NextResponse.redirect(new URL(`/${locale}${request.nextUrl.pathname}`, request.url))
  }

  if (request.headers.has('referer')) {
    const refererUrl = new URL(request.headers.get('referer') ?? '')
    const lngInReferer = languages.find((locale) => refererUrl.pathname.startsWith(`/${locale}`))
    const response = NextResponse.next()
    if (lngInReferer) response.cookies.set(cookieName, lngInReferer)
    
  }

  return response

}
