'use client'

import { StaticImageData } from 'next/image';

import en from '../../../messages/en.json'
import es from '../../../messages/es.json'
import it from '../../../messages/it.json'

import Burger from '@/../../public/burger1.png'
import Admin from '@/../../public/admin1.png'
import Mapfre from '@/../../public/mapfre.png'
import AgeCalculator from '@/../../public/agecalculator.png'
import Apple from '@/../../public/apple1.png'
import Spacex from '@/../../public/spacex.png'
import Calculadora from '@/../../public/calculadora.png'
import Todolist from '@/../../public/todolist.png'
import Pptss from '@/../../public/pptss.png'


type Description = {
  es: string;
  en: string;
  it: string;
};

export interface PortfolioItem {
  id: number;
  image: StaticImageData;
  title: string;
  github: string;
  description: Description;
}


export const Data: PortfolioItem[] = [
  {
    id: 1,
    image: Mapfre,
    title: 'Private login Mapfre',
    description: {
      en: en.projects['1'].description, 
      es: es.projects['1'].description, 
      it: it.projects['1'].description,
    },
    github: 'https://github.com/lorenzo-mm/portal-mapfre',
    // demo: 'https://github.com/lorenzo-mm/TechNews.'
  },
  {
    id: 2,
    image: Admin,
    title: 'Dashboard Administator',
    description: {
      en: en.projects['2'].description, 
      es: es.projects['2'].description, 
      it: it.projects['2'].description,
    },
    github: 'https://github.com/lorenzo-mm/Dashboard-Admin-with-React',
    // demo: 'https://lorenzo-mm.github.io/Dashboard-Admin-with-React/'
  },
  {
    id: 3,
    image: Burger,
    title: 'Burger Website',
    description: {
      en: en.projects['3'].description, 
      es: es.projects['3'].description, 
      it: it.projects['3'].description,
    },
    github: 'https://github.com/lorenzo-mm/Burger-Website',
    // demo: 'https://lorenzo-mm.github.io/Burger-Website/'
  },
  {
    id: 4,
    image: AgeCalculator,
    title: 'Age Calculator',
    description: {
      en: en.projects['4'].description, 
      es: es.projects['4'].description, 
      it: it.projects['4'].description,
    },
    github: 'https://github.com/lorenzo-mm/age-calculator-main',
    // demo: 'https://lorenzo-mm.github.io/age-calculator-main/'
  }
]
