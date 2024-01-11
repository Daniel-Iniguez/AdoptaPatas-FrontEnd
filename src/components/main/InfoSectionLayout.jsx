import React from 'react'
import InfoLeftSection from './InfoLeftSection'
import InfoRightSection from './InfoRightSection'

function InfoSectionLayout() {
  return (
    <section className='w-[100%] flex flex-col items-center justify-center bg-bg-light-green'>
      <InfoLeftSection />

      <InfoRightSection />
    </section>

  )
}

export default InfoSectionLayout