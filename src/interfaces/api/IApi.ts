interface IApiClient {
  getResource(url: string): Promise<IBaseResponse>
  getAllPeople(): Promise<IAllPersonResponse>
  getPersonById(id: string): Promise<IPersonResponse>
  getAllPlanet(): Promise<IAllPlanetResponse>
  getPlanetById(id: string): Promise<IPlanetResponse>
  getAllShips(): Promise<IAllShipResponse>
  getShipById(id: string): Promise<IShipResponse>
}

interface IBaseResponse {
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

interface IPersonResponse {
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

interface IAllPlanetResponse {
  count: number
  next: string
  previous: null
  results: IPlanetResponse[]
}

interface IPlanetResponse {
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

interface IShipResponse {
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

export type {
  IApiClient,
  IBaseResponse,
  IAllPersonResponse,
  IPersonResponse,
  IAllPlanetResponse,
  IPlanetResponse,
  IAllShipResponse,
  IShipResponse,
}
