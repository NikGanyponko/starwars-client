export interface IListProps {
  listData: IListItem[]
}

export interface IListItem {
  id: string
  title: string
  onItemClick?(): void
}
