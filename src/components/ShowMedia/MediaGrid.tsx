import { useEffect, useState } from 'react'
import { MediaData } from '../../definitions'
import { Link } from 'react-router-dom'
import Spinner from '../Spinner'

type Props = { type: string; isHome?: boolean; name?: string }

const MediaGrid = ({ type, isHome = false }: Props) => {
  const [mediaData, setMediaData] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchMedia = async () => {
      try {
        const apiURL = isHome ? `/api/${type}?_limit=8` : `/api/${type}`
        const res = await fetch(apiURL)
        const data = await res.json()
        setMediaData(data)
      } catch (error) {
        console.log('Error fetching data', error)
      } finally {
        setIsLoading(false)
      }
    }
    fetchMedia()
  }, [])

  const media = mediaData.map((media: MediaData) => {
    return (
      <Link to={`/${type}/${media.id}`} key={media.id} className="m-2">
        <img
          src={media.imageURL}
          alt={media.name}
          className="h-[400px] object-cover"
        />
      </Link>
    )
  })

  return (
    <>
      {isLoading ? (
        <Spinner loading={isLoading} />
      ) : (
        <section className="grid grid-cols-1 grid-rows-2 gap-2 items-center sm:grid-cols-2 sm:grid-row-2 md:grid-cols-3 lg:grid-cols-4">
          {media}
        </section>
      )}
    </>
  )
}

export default MediaGrid
