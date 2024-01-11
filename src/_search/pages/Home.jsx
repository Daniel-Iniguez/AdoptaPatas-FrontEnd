import React from 'react'
import HeroSection from '../../components/main/HeroSection'
import SearchSection from '../../components/main/SearchSection'
import InfoSectionLayout from '../../components/main/InfoSectionLayout'
import PetCardsSection from '../../components/main/PetCardsSection'
import IconSection from '../../components/main/IconSection'
import UserReviewSection from '../../components/main/UserReviewSection'
import HomeFAQSection from '../../components/main/HomeFAQSection'
import AboutSection from '../../components/main/AboutSection'
import SearchBarHome from '../../components/main/SearchBarHome'

function Home() {
  return (
    <main className='pb-11 w-[100%] flex flex-col items-center justify-center'>
      <HeroSection />

      <SearchBarHome />

      <InfoSectionLayout />

      <PetCardsSection />

      <IconSection />

      <UserReviewSection />

      <HomeFAQSection />

      <AboutSection />
    </main>
  )
}

export default Home