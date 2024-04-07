import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const PersonajeDetail = () => {
  const { id } = useParams()


  const [character, setCharacter] = useState("")

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then(response => response.json())
      .then(data => setCharacter(data))
      .catch(error => console.error(error))
  }, [id])

  

  const [info, setInfo] = useState([])

  useEffect(() => {
    if (character) {
      Promise.all(character.episode.map(url => 
        fetch(url).then(response => response.json())
      ))
      .then(data => setInfo(data))
      .catch(error => console.error(error))
    }
  }, [character])


  return (
    <div className=' flex justify-center items-center w-full'>
      {character && (
          <div>
              <img src={character.image} alt={character.name} className='h-[300px] rounded-full mx-auto d-block'/>  
            <div className='grid grid-cols-3 items-center justify-center gap-7 text-center pt-14 '>
              {info.map((episode, id) => (
                <div key={id} className=' border-2 rounded-2xl shadow-xl italic'>
                    <h2 className='text-red-500 pb-3'>Episodio {episode.id}</h2>
                    <h2>Nombre: <span className='text-green'>{episode.name}</span></h2>
                    <p>Fecha: {episode.air_date}</p>
                    <p>{episode.episode}</p>
                </div>
                ))}
            </div>
        </div>
      )}
    </div>
  )
}

export default PersonajeDetail