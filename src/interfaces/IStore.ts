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

export interface IListProps {
  listData: IListItem[]
}

export interface IListItem {
  id: string
  title: string
  onItemClick?(): void
}
