import type { Metadata } from 'next'
import { Archivo } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Header'
import Footer from '@/components/Footer'

import { NextIntlClientProvider } from 'next-intl'
import { notFound } from 'next/navigation'


const inter = Archivo({ subsets: ['latin'] })

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
      <body className={`${inter.className} relative `}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <div className='flex flex-col min-h-screen max-w-[1240px] mx-auto'>
            <Navbar />
            <div className='flex-grow mt-20'>{children}</div>
            <Footer />
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
