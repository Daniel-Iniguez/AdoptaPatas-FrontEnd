import React from 'react'

function ProfileCard() {
  return (
    <div className="w-full max-w-[22.5rem] flex flex-col items-center rounded-xl bg-white">
      <div className="w-full flex flex-col items-start py-4">
        <div className=" w-full lg:px-6 md:px-3 flex lg:flex-row items-center md:flex-col ">
          <div className="h-[90px] w-[90px] overflow-hidden rounded-full bg-cover bg-center">
            <img className="h-[100%] w-[100%] rounded-[50%] object-cover object-center" src="https://img.freepik.com/free-photo/portrait-happy-smiley-man_23-2149022624.jpg?w=1480&t=st=1705451996~exp=1705452596~hmac=419ca553cbb84511e0be340ab1d6c7152e4315a2ed2a03e53175c37fe979923c" alt="" />
          </div>
          <div className="mt-1 flex flex-col p-5 md:mt-1">
            <h5 className="mb-1 text-[1.15rem] font-['Open_Sans_Semi'] text-[#393838]">Izco Guerrero</h5>
            <p className="text-left text-[0.92rem] font-['Open_Sans_Semi'] text-gray-500">Ciudad de México</p>
          </div>
        </div>
      </div>
      <div className='w-[90%] border-solid border-b-[1px] border-gray-400'></div>
      <div className='w-full flex flex-row justify-around items-start pb-6'>
        <div className="w-1/2 mt-1 flex flex-col p-5 items-center md:mt-1">
          <h5 className="mb-1 text-[1.15rem] font-['Open_Sans_Medium'] text-gray-600">Seguidores</h5>
          <p className="text-left text-[0.92rem] font-['Open_Sans_Semi'] text-[#514f4f]">10</p>
        </div>
        <div className="w-1/2 mt-1 flex flex-col p-5 items-center md:mt-1">
          <h5 className="mb-1 text-[1.15rem] font-['Open_Sans_Medium'] text-gray-600">Siguiendo</h5>
          <p className="text-left text-[0.92rem] font-['Open_Sans_Semi'] text-[#514f4f]">20</p>
        </div>
      </div>
    </div>
  )
}

export default ProfileCard