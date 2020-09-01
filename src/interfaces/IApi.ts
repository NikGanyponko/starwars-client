export interface IApiClient {
  getResource(url: string): Promise<Response>
  getAllPeople(): Promise<Response>
  getPersonById(id: string): Promise<Response>
  getAllPlanets(): Promise<Response>
  getPlanetById(id: string): Promise<Response>
  getAllShips(): Promise<Response>
  getShipById(id: string): Promise<Response>
}

interface IBaseResponse extends Response {
  count: number
  next: string
  previous: null
  results: []
}

interface IAllPersonResponse {
  count: number
  next: string
  previous: null
  results: IPersonResponse[]
}

export interface IPersonResponse {
  name: string
  height: string
  mass: string
  hair_color: string
  skin_color: string
  eye_color: string
  birth_year: string
  gender: string
  homeworld: string
  films: string[]
  species: string[]
  vehicles: string[]
  starships: string[]
  created: string
  edited: string
  url: string
}

export interface IAllPlanetsResponse {
  count: number
  next: string
  previous: null
  results: IPlanetResponse[]
}

export interface IPlanetResponse {
  name: string
  rotation_period: string
  orbital_period: string
  diameter: string
  climate: string
  gravity: string
  terrain: string
  surface_water: string
  population: string
  residents: string[]
  films: string[]
  created: string
  edited: string
  url: string
}

interface IAllShipResponse {
  count: number
  next: string
  previous: null
  results: IShipResponse[]
}

export interface IShipResponse {
  name: string
  model: string
  manufacturer: string
  cost_in_credits: string
  length: string
  max_atmosphering_speed: string
  crew: string
  passengers: string
  cargo_capacity: string
  consumables: string
  hyperdrive_rating: string
  MGLT: string
  starship_class: string
  pilots: string[]
  films: string[]
  created: string
  edited: string
  url: string
}
