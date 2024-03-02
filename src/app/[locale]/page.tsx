import HelloContainer from '@/components/HelloContainer'
import Experience from '@/components/Sections/Experience'
import BentoContainer from '@/components/BentoContainer'

export default function Home() {
  return (
    <div className='grid gap-5'>
      <HelloContainer />
      <Experience />
      <BentoContainer />
    </div>
  )
}
