'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import EnglishPage from '../../../messages/en.json'
import SpanishPage from '../../../messages/es.json'
import ItalianPage from '../../../messages/it.json'
import Link from 'next/link'

export default function LanguageButton() {

  const [isOpen, setIsOpen] = useState(false)
  const [language, setLanguage] = useState('english'); // Estado del idioma

  // Función para cambiar el idioma
  const changeLanguage = (newLanguage: string) => {
    setLanguage(newLanguage)
  }

  // Renderiza el contenido según el idioma seleccionado
  let content;
  switch (language) {
    case 'english':
      content = EnglishPage
      break;
    case 'spanish':
      content = SpanishPage
      break;
    case 'italian':
      content = ItalianPage
      break;
    default:
      content = EnglishPage // Por defecto, muestra el contenido en inglés
  }
  
  return (
    <div>
      {/* Renderiza el botón de cambio de idioma y pasa la función para cambiar el idioma */}
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
          initial={{ opacity: 0, y: -10 }} // Inicia la lista con opacidad 0 y desplazamiento hacia arriba
          animate={{ opacity: 1, y: 0 }} // Anima la lista a opacidad 1 y posición original
          transition={{ duration: 0.3, delay: 0.1 }} // Duración de la animación y retraso
        >
          {/* Cada elemento <li> animado */}
          <motion.li
            className='py-2 px-5 text-sm cursor-pointer'
            onClick={() => changeLanguage('english')}
            initial={{ opacity: 0, y: 20 }} // Inicia cada elemento <li> con opacidad 0 y desplazamiento vertical de 20px
            animate={{ opacity: 1, y: 0 }} // Anima cada elemento <li> a opacidad 1 y posición original
            transition={{ duration: 0.3, delay: 0.2 }} // Duración de la animación y retraso
          >
            English
          </motion.li>
          <motion.li
            className='py-2 px-5 text-sm cursor-pointer'
            onClick={() => changeLanguage('spanish')}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.3 }}
          >
            Español
          </motion.li>
          <motion.li
            className='py-2 px-5 text-sm cursor-pointer'
            onClick={() => changeLanguage('italian')}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.4 }}
          >
            Italiano
          </motion.li>
        </motion.ul>
      )}
    </div>
  );
}
