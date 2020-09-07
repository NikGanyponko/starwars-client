import { IPlanetResponse, IPersonResponse, IShipResponse } from './IApi'
export interface IFeatsSlice {
  listData: (IPlanetResponse | IPersonResponse | IShipResponse)[]
  contentData: IContentData
}

export interface IListData {
  listData: (IPlanetResponse | IPersonResponse | IShipResponse)[]
}

export interface IContentData {
  img: string
  description: string[]
}
