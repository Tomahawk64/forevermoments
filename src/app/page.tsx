import Hero from '@/components/Hero'
import Portfolio from '@/components/Portfolio'
import Films from '@/components/Films'
import Services from '@/components/Services'
import ForeverMemories from '@/components/ForeverMemories'
import OurStory from '@/components/OurStory'
import WhyChooseUs from '@/components/WhyChooseUs'
import Process from '@/components/Process'
import Testimonials from '@/components/Testimonials'
import Instagram from '@/components/Instagram'
import Contact from '@/components/Contact'
import CursorEffects from '@/components/CursorEffects'

export default function Home() {
  return (
    <>
      <CursorEffects />
      <Hero />
      <Portfolio />
      <Films />
      <WhyChooseUs />
      <Services />
      <ForeverMemories />
      <OurStory />
      <Process />
      <Testimonials />
      <Instagram />
      <Contact />
    </>
  )
}
