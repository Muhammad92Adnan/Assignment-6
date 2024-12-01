import Achivements from '@/components/Achivements/Page'
import Courses from '@/components/Courses/Page'
import Explore from '@/components/Explore/Page'
import Footer from '@/components/Footer/Page'
import Header from '@/components/Header/Page'
import Hero from '@/components/HeroSection/Page'
import Page from '@/components/Section/Page'
import Team from '@/components/Team/Page'
import Testimonials from '@/components/Testimonials/Page'
import React from 'react'

const page = () => {
  return (
    <div>
      <Header/>
      <Hero/>
      <Page/>
      <Explore/>
      <Achivements/>
      <Courses/>
      <Team/>
      <Testimonials/>
      <Footer/>
    </div>
  )
}

export default page