import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import './pets.css'
import PetCard from './PetCard'

function Pets() {

  const [pets, setPets] = useState([]);

  useEffect(() => {
    const fetchAllPets = async () => {
      try {
        const res = await axios.get("http://localhost:9000/pets");
        setPets(res.data);
        console.log(res)
      } catch (err) {
        console.log(err)
      }
    }
    fetchAllPets();
  }, [])

  const handleDelete = async (id) => {
    try {
      await axios.delete("http://localhost:9000/pets/" + id);
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className='border-solid border-red-500 border-2 px-5 w-[100%] md:w-[100%] grid grid-cols-[repeat(auto-fit,_minmax(15rem,_1fr))] auto-rows-min justify-items-center items-start gap-5'>
      {pets.map((pet) => (
        <PetCard key={pet.id} pet={pet} handleDelete={handleDelete} />
      ))}
      {/* <button>
        <Link to='/add-pet'>
          Add new pet
        </Link>
      </button > */}
    </div>
  )
}

export default Pets