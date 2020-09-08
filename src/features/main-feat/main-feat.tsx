import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../store/root-reducer'
import { Content, Sider } from '../../components'
import { matchId } from '../../modules'

interface IMainFeat {
  fetchGroup(): void
  fetchItem(id: string): void
}

const MainFeat = ({ fetchGroup, fetchItem }: IMainFeat) => {
  const dispatch = useDispatch()
  const { listData, contentData } = useSelector(
    (state: RootState) => state.feats,
  )

  useEffect(() => {
    dispatch(fetchGroup())
  }, [dispatch, fetchGroup])

  const data = listData.map((item) => {
    const { url } = item
    const id = matchId(url)

    return {
      title: item.name,
      id: id,
      onItemClick: () => dispatch(fetchItem(id)),
    }
  })

  return (
    <>
      <Sider listData={data} />
      <Content img={contentData.img} description={contentData.description} />
    </>
  )
}

export default MainFeat
