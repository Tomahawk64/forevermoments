import Hero from '@/components/Hero'
import Portfolio from '@/components/Portfolio'
import Films from '@/components/Films'
import PreWedding from '@/components/PreWedding'
import FamilyMoments from '@/components/FamilyMoments'
import Services from '@/components/Services'
import OurStory from '@/components/OurStory'
import WhyChooseUs from '@/components/WhyChooseUs'
import Process from '@/components/Process'
import Testimonials from '@/components/Testimonials'
import Contact from '@/components/Contact'
import CursorEffects from '@/components/CursorEffects'

export default function Home() {
  return (
    <>
      <CursorEffects />
      <Hero />
      <Portfolio />
      <Films />
      <PreWedding />
      <FamilyMoments />
      <WhyChooseUs />
      <Services />
      <OurStory />
      <Process />
      <Testimonials />
      <Contact />
    </>
  )
}
