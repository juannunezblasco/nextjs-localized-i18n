'use client'

import { useTranslation } from '@/modules/i18n/client'
import { useParams } from 'next/navigation'
import React, { useState } from 'react'
import { useFormState, useFormStatus } from 'react-dom'

export const FormBasic = () => {

  const { locale } = useParams<{locale: string}>()
  const { t } = useTranslation(locale)

  const [question, setQuestion] = useState('')
  return (
    <div className="w-full">
      <form className='mb-4'>
        <input
          type="text"
          name="question"
          id="question"
          placeholder={t('form.placeholder')}
          className='bg-transparent border border-gray-300 w-full p-2'
          onChange={(e) => setQuestion(e.target.value)}
        />
      </form>
      <div>
        <p className=''>{ t('question', { text: question }) }</p>
      </div>
    </div>
  )
}
