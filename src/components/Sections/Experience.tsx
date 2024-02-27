import { formatDateExperience } from '@/lib/utils'
import { useTranslations } from 'next-intl'
import { useFormatter } from 'next-intl'
import { ExperiencesConstants } from '@/components/constant/experience.constants'

const Experience = () => {
  const format = useFormatter();
  const t = useTranslations("experience");
  const newexperience = [
    {
      id: t('seometric.id'),
      achievements: t('seometric.achievements').split('|'),
    },
    {
      id: t('aini28.id'),
      achievements: t('aini28.achievements').split('|'),
    },
  ];

  const updatedExperiences = ExperiencesConstants.map((item) => {
    const matchingNewexperience = newexperience.find((nw) => nw.id === item.experience.id);
    if (matchingNewexperience) {
      return {
        experience: {
          ...item.experience,
          achievements: matchingNewexperience.achievements,
        },
      };
    }
    return item
  })

  return (
    <section id='experiences' className='flex flex-col mt-28 rounded-xl gap-5'>
      <header className='flex flex-col gap-3'>
        <h2 className='text-2xl font-semibold'>{t('title')}</h2>
        <p className='font-light text-gray-400'>{t('paragraph')}</p>
      </header>
      <div className='relative mt-8'>
        <main className='flex flex-col gap-y-10 sm:ml-10 lg:ml-36'>
          {updatedExperiences.map(({ experience }) => (
            <section key={experience.id} className='flex flex-col relative'>
              <aside className='absolute top-1 left-[4.5rem] hidden h-full print:!left-4 print:!block md:block xl:left-6 2xl:left-4 '>
                <h3 className='absolute top-0 right-full pr-6 text-right text-xs font-medium leading-[16px] text-gray-400 print:!pr-8 print:!text-sm print:!text-gray-600 xl:pr-8'>
                  <div className='spacing-1'>
                    <div className='whitespace-nowrap capitalize'>
                      {formatDateExperience({
                        formatDate: experience.dateStart,
                        format,
                      })}
                      <span className='hidden print:!inline xl:inline'> -</span>
                    </div>
                    <div className='whitespace-nowrap capitalize'>
                      {formatDateExperience({
                        formatDate: experience.dateEnd,
                        format,
                      })}
                    </div>
                  </div>
                </h3>
                <div className='absolute left-0 top-0 flex h-4 w-4 -translate-x-1/2 items-center justify-center rounded-full bg-gray-200 d:bg-gray-400'>
                  <div className='h-2 w-2 rounded-full bg-gray-400 d:bg-gray-700'></div>
                </div>
                <i className='absolute left-0 top-6 h-[calc(100%-2px)] w-0.5 -translate-x-1/2 bg-gray-200 d:bg-gray-800'></i>
              </aside>
              <main className='ml-0 spacing-1 print:!ml-12 md:ml-24 xl:ml-14 2xl:ml-12'>
                <span className='text-3xl font-bold'>{experience.experience}</span>
                <div className='purple_gradient font-bold text-xl'>
                  <span>{experience.company}</span>
                  <span className='ml-2'>• {experience.typeExperience}</span>
                </div>

                <ul className='list-outside list-disc pl-4 text-gray-500'>
                  {experience.achievements?.map((entry) => (
                    <li key={entry} className='font-light text-gray-400 pl-3'>
                      {entry}
                    </li>
                  ))}
                </ul>
              </main>
            </section>
          ))}
        </main>
      </div>
    </section>
  )
}

export default Experience
