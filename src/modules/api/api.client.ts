import { IApiClient } from "../../interfaces/api/IApi"

class ApiClient implements IApiClient {
  async getResource(url: string) {
    const _apiUrl = "https://swapi.dev/api"
    const res = await fetch(`${_apiUrl}${url}`)

    if (!res.ok) {
      throw new Error(`Could not fetch ${url} , received ${res.status}`)
    }
    return res.json()
  }

  getAllPeople() {
    return this.getResource("/people/")
  }

  getPersonById(id: string) {
    return this.getResource(`/people/${id}/`)
  }

  getAllPlanet() {
    return this.getResource("/planets/")
  }

  getPlanetById(id: string) {
    return this.getResource(`/planets/${id}/`)
  }

  getAllShips() {
    return this.getResource("/starships/")
  }

  getShipById(id: string) {
    return this.getResource(`/starships/${id}/`)
  }
}

export default ApiClient
