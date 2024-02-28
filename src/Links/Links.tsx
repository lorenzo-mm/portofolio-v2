import { sidebarLinks } from '@/components/constant/navbar'
import { useTranslations } from 'next-intl'
import Link from 'next/link'

const Links = () => {
  const t = useTranslations("navbar")

  return (
    <nav className='xl:block sm:hidden text-[rgba(255,255,255,0.35)]'>
      <ul className='flex gap-5 h-12'>
        {sidebarLinks.map(({ title, route }) => (
          <li key={title} className='flex items-center h-full hover:bg-gradient-to-t from-blue-100'>
            <Link href={`${route}`}>{t(title)}</Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Links
