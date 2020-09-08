import api from './api/api-client'
import {
  matchId,
  transformPlanetResponse,
  transformShipResponse,
  transformPersonResponse,
} from './utills/transform-response'
import locale from './locales/locale-en.json'

export {
  api,
  locale,
  matchId,
  transformPlanetResponse,
  transformShipResponse,
  transformPersonResponse,
}
