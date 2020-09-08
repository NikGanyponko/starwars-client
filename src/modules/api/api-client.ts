import { IApiClient } from '../../interfaces/IApi'

class ApiClient implements IApiClient {
  async getResource(url: string) {
    const res = await fetch(`https://swapi.dev/api${url}`)
    return res
  }

  getAllPeople() {
    return this.getResource('/people/')
  }

  getPersonById(id: string) {
    return this.getResource(`/people/${id}/`)
  }

  getAllPlanets() {
    return this.getResource('/planets/')
  }

  getPlanetById(id: string) {
    return this.getResource(`/planets/${id}/`)
  }

  getAllShips() {
    return this.getResource('/starships/')
  }

  getShipById(id: string) {
    return this.getResource(`/starships/${id}/`)
  }
}

export default new ApiClient()
