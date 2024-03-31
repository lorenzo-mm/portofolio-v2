'use client'
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link'; // Importamos Link de Next.js

import EnglishPage from '../../../messages/en.json';
import SpanishPage from '../../../messages/es.json';
import ItalianPage from '../../../messages/it.json';

interface LanguageContent {
  [key: string]: string | NestedLanguageContent;
}

interface NestedLanguageContent {
  [key: string]: string | NestedLanguageContent;
}

const LanguageButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [language, setLanguage] = useState<'english' | 'spanish' | 'italian'>('english');

  const changeLanguage = (newLanguage: 'english' | 'spanish' | 'italian') => {
    setLanguage(newLanguage);
    setIsOpen(false);
  };

  const languageContent: { [key: string]: LanguageContent } = {
    english: EnglishPage,
    spanish: SpanishPage,
    italian: ItalianPage,
  };

  const languagePaths: { [key: string]: string } = {
    english: '/en',
    spanish: '/es',
    italian: '/it',
  };

  return (
    <div className="language-button-container">
      {/* Renderiza el botón de cambio de idioma */}
      <motion.button
        className='flex items-center justify-center size-12 rounded-full'
        whileTap={{ scale: 0.97 }}
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg xmlns='http://www.w3.org/2000/svg' fill='transparent' viewBox='0 0 24 24' strokeWidth={1.5} stroke='#ffffff' className='w-6 h-6'>
          <path strokeLinecap='round' strokeLinejoin='round' d='m10.5 21 5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 0 1 6-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 0 1-3.827-5.802' />
        </svg>
      </motion.button>

      {/* Renderiza la lista de idiomas */}
      {isOpen && (
        <motion.ul
          className='absolute top-full left-0 rounded-lg mt-1 shadow-md backdrop-blur-sm bg-black/40 card-skills'
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          {/* Mapeo sobre los idiomas */}
          {Object.keys(languageContent).map((key) => (
            <motion.li
              key={key}
              className='py-2 px-5 text-sm cursor-pointer'
              onClick={() => changeLanguage(key as 'english' | 'spanish' | 'italian')}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              <Link href={languagePaths[key]}>
                <span>{key.charAt(0).toUpperCase() + key.slice(1)}</span>
              </Link>
            </motion.li>
          ))}
        </motion.ul>
      )}
    </div>
  );
}

export default LanguageButton;
