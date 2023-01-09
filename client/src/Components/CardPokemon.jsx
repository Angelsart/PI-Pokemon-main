import React from "react";


export default function CardPokemon({ name, types, image }){
    const maping = types.map(e=>e.name)


    return(
       <div>
        <h3>{name}</h3>
        <h5>{maping.join(', ')}</h5>
        <img src={image} alt="imagen" className="img" width="200px" height="250px"/>
       </div> 
    );
}

//type.join(',  ')
//<h2 className='info-h2'>🔹{genres.join(',  ')}</h2>
//genres: apiRes.data.genres?.map(e => e.name)
//types:"tuvariable".data.types?.map(e=>e.name)


// dbGames = await Videogame.findAll({
//     include: {
//       model: Genre,
//       attributes: ['name'],
//       through: { attributes: [] },
//     },
//   });