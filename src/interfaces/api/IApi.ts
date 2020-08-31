export interface IApiClient {
  getResource(url: string): Promise<IBaseResponse>
  getAllPeople(): Promise<any>
  getPersonById(id: string): Promise<any>
  getAllPlanet(): Promise<any>
  getPlanetById(id: string): Promise<any>
  getAllShips(): Promise<any>
  getShipById(id: string): Promise<any>
}

interface IBaseResponse {
  count: number
  next: string
  previous: null
  results: []
}
