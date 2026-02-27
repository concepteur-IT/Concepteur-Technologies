import ContactSection from '@/components/home-components/ContactSection'
import Hero from '@/components/home-components/Hero'
import ProductStack from '@/components/home-components/ProductStack'
import ServicesIntroSection from '@/components/home-components/ServicesIntroSection'
import TestimonialSection from '@/components/home-components/TestimonialSection'
import React from 'react'

const page = () => {
  return (
    <div className='mt-15'>
      <Hero />
      <ServicesIntroSection />
      <ProductStack />
      <TestimonialSection />
      <ContactSection />
    </div>
  )
}

export default page