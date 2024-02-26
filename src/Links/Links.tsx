import { sidebarLinks } from '@/components/constant/navbar'
import { useTranslations } from 'next-intl'
import Link from 'next/link'

const Links = () => {
  const t = useTranslations("navbar")

  return (
    <nav className='hidden xl:block sm:hidden'>
      <ul className='flex justify-center items-center gap-5'>
        {sidebarLinks.map(({ title, route }) => (
          <li key={title}>
            <Link href={`${route}`}>{t(title)}</Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Links