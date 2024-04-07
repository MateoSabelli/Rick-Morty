import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const 
Personajes = () => {

    /* Creamos un Hook para la Api */
    const [character, setcharacter] = useState([])
    /* Realizamos un fetch para leer la Api */
    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/character')
            .then(response => response.json())
            .then(data => setcharacter(data.results))
            .catch(error => console.error(error))
    }, []) 

    /* Creamos un Hook para la busqueda por nombre */
    const [search, setSearch] = useState('')
    
    /* Creamos un Hook para la busqueda por especie */
    const [species, setSpecies] = useState('')
    

  return (
    <main className='flex flex-col justify-center items-center w-[100%]'>
        <div className='flex flex-row items-center gap-10'>
            <input type="text" placeholder="Buscar..." className='h-10 rounded-xl border-white border-[1px] px-5' value={search} onChange={(e) => setSearch(e.target.value)} />
            
            <select name="speciesOptions" id="Search-species" className='h-10 rounded-md ' value={species} onChange={(e) => setSpecies(e.target.value)} >
                <option value="">Todos</option>
                <option value="Human">Human 🙅‍♂️</option>
                <option value="Alien">Alien👽</option>
            </select>
        </div>
        
        <div className='grid grid-cols-2 gap-8 pt-20 italic text-base'>
            {
                character
                .filter(character => species === "" ? true : character.species === species)
                .filter(character => character.name.includes(search.toLowerCase()))
                .map(character => (
                    <div key={character.id} className='grid grid-cols-2 p-8 relative border-[#474747] rounded-xl text-base shadow-xl shadow-white/20 '>
                        <img src={character.image} alt={character.name} className='rounded-2xl' />
                        <div className='flex flex-col justify-center items-start pl-14 gap-4 border-0'>
                            <p>{character.name}</p>
                            <p>{character.species}</p>
                            <p className={character.status === 'Alive' ? 'bg-green-700 rounded-xl px-3 font-medium text-base' : 
                                        character.status === "Dead" ? 'bg-red-500 rounded-xl px-3 font-medium text-base ' : 
                                        'bg-yellow-500 rounded-xl px-3 font-medium text-base'}>{character.status}</p>
                            <p>{character.location.name}</p>
                            <Link to={`/PersonajeDetail/${character.id}`} className='px-4 bg-gray-200 text-black rounded-xl hover:scale-110 '>Saber mas.</Link>
                        </div>
                    </div>
                ))
            }
        </div>
    </main>

  )
}

export default Personajes