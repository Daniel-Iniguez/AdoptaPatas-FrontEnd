import React from 'react'

function HomeUserCard({ image, name, review }) {
  return (
    <div class="w-full  lg:max-w-[22.5rem] rounded-xl bg-[#F3F3F3] shadow-md">
      <div class="flex flex-row lg:flex-col items-start pb-6">
        <div class="pt-6 px-6">
          <div class="h-[100px] w-[100px] overflow-hidden rounded-[50%] bg-cover bg-center shadow-lg">
            <img class="h-[100%] w-[100%] rounded-[50%] object-cover object-center" src={image} alt="" />
          </div>
        </div>
        <div class="mt-1 flex flex-col p-6 md:mt-1">
          <h5 class="mb-4 text-xl font-medium text-[#393838]">{name}</h5>
          <p class="text-left text-[0.78rem] md:text-[0.92rem] font-['Open_Sans_Semi'] text-[#514f4f]">{review}</p>
        </div>
      </div>
    </div>
  )
}

export default HomeUserCard