export const transformPlanetResponse = (res: any) => {
  const id = res.url.match(/\/(\d+?)\//)[1]
  return {
    description: [
      res.name,
      'Climate : ' + res.climate,
      'Diameter : ' + res.diameter,
      'Created : ' + res.created,
      'Orbital period : ' + res.orbital_period,
      'Population : ' + res.population,
      'Rotation period : ' + res.rotation_period,
      'Surface water : ' + res.surface_water,
      'Terrain : ' + res.terrain,
    ],
    img: `https://starwars-visualguide.com/assets/img/planets/${id}.jpg`,
  }
}

export const transformShipResponse = (res: any) => {
  const id = res.url.match(/\/(\d+?)\//)[1]
  return {
    description: [
      res.name,
      'MGLT : ' + res.MGLT,
      'Cargo capacity : ' + res.cargo_capacity,
      'Model : ' + res.model,
      'Passengers : ' + res.passengers,
      'Starship class : ' + res.starship_class,
      'Consumables : ' + res.consumables,
      'Cost in credits : ' + res.cost_in_credits,
      'Crew : ' + res.crew,
      'Hyperdrive rating : ' + res.hyperdrive_rating,
      'Length : ' + res.length,
      'Manufacturer : ' + res.manufacturer,
      'Max atmospheres speed : ' + res.max_atmosphering_speed,
    ],
    img: `https://starwars-visualguide.com/assets/img/starships/${id}.jpg`,
  }
}

export const transformPersonResponse = (res: any) => {
  const id = res.url.match(/\/(\d+?)\//)[1]

  console.log('!!!! ', res)

  return {
    description: [
      res.name,
      'Birth year : ' + res.birth_year,
      'Eye color : ' + res.eye_color,
      'Gender : ' + res.gender,
      'Hair color : ' + res.hair_color,
      'Height : ' + res.height,
    ],
    img: `https://starwars-visualguide.com/assets/img/characters/${id}.jpg`,
  }
}
