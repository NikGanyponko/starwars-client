//TODO fix listData any[]
export interface IFeatsSlice {
  listData: any[]
  contentData: IContentData
}

export interface IListData {
  listData: any[]
}

export interface IContentData {
  img: string
  description: string[]
}
