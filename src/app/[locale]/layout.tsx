import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import BentoContainer from '@/components/BentoContainer'

import { NextIntlClientProvider } from 'next-intl'
import { notFound } from 'next/navigation'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Lorenzo Muñoz | Portfolio',
  description: 'Web Developer Portfolio',
}

const locales = ['en', 'es', 'it'];

export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: any;
}) {
  if (!locales.includes(locale as any)) notFound();
  let messages;
  try {
    messages = (await import(`../../../messages/${locale}.json`)).default
  } catch (error) {
    notFound()
  }

  return (
    <html lang={locale}>
      <body className={`${inter.className} relative h-[5000px]`}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <div className='flex flex-col min-h-screen max-w-4xl mx-auto'>
            <Header />
            <div className='flex-grow mt-20'>{children}</div>
            <BentoContainer />
            <Footer />
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
