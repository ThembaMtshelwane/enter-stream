import { useEffect, useState } from 'react'
import { MediaData } from '../../definitions'

type Props = { type: string }

const MediaGrid = ({ type }: Props) => {
  const [mediaData, setMediaData] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchMedia = async () => {
      try {
        const res = await fetch(`http://localhost:8080/${type}/`)
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

  console.log(`http://localhost:8080/${type}/`)
  const media = mediaData.map((media: MediaData) => {
    return (
      <section key={media.id} className="h-full border-2 border-red-800">
        {media.name}
      </section>
    )
  })

  return (
    <section className="grid grid-cols-1 grid-rows-2 gap-2 items-center sm:grid-cols-2 sm:grid-row-2 md:grid-cols-3 lg:grid-cols-4">
      {media}
    </section>
  )
}

export default MediaGrid
