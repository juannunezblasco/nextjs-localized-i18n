import { useTranslation } from '@/modules/i18n'
import React from 'react'

const About = async ({
  params: { locale }
}: {
  params: {
    locale: string
  }
}) => {

  const { t } = await useTranslation(locale)
  
  return (
    <div className="flex items-center">
      <h1 className='text-4xl font-bold my-8'>{ t('about-title') }</h1> 
    </div>
  )
}

export default About