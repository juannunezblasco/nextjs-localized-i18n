'use client'

import { useState } from 'react'
import Link from 'next/link'
import { FalChevronRight } from '@/assets/icons/FalChevronRight'
import { languages } from '../settings'

export const LanguageSwitcher = ({ locale, className }: { locale: string, className?: string }) => {

  const [showLocales, setShowLocales] = useState(false)

  const handleShowLocales = () => {
    setShowLocales(!showLocales)
  }

  return (
    <div className={'relative cursor-pointer ml-3 LanguageSwitcher' + className } onClick={handleShowLocales}>
      <div
        className="text-center cursor-pointer "
        // className="route.params.url == item.url ? 'border-white' : 'border-transparent'"
      >
        <div className="flex items-center justify-between">
          <span className="mr-1">{ locale }</span>
          <span className="transition-all">
            <FalChevronRight
              className={"h-3 fill-white rotate-90 transition-all duration-150 " + (showLocales && '-rotate-90')} />
          </span>
        </div>
      </div>
      {
        showLocales &&
          <div className="flex flex-col absolute shadow-md bg-white">
            {languages.filter((l) => locale !== l).map((l) => {
              return (
                <Link className='hover:bg-black-300/10 px-2 py-1 text-black' key={l} href={`/${l}`}>
                  {l}
                </Link>
              )
            })}
          </div>
      }
    </div>
  )
}