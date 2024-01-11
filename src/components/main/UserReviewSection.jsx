import React from 'react'
import UserCardContainer from './UserCardContainer'

function UserReviewSection() {

  return (
    <section className='w-[100%] flex flex-col items-center justify-between py-24 gap-20 bg-[#F2D0D2]'>
      <h3 className='font-["Nunito_Black"] text-[3rem] text-main-text-color text-center mx-[20%]'>Lo que los usuarios dicen</h3>
      <UserCardContainer />
    </section>
  )
}

export default UserReviewSection