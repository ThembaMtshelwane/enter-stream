import ContentLayout from '../layouts/ContentLayout'
import Header from '../components/Header'
import { Link, useLoaderData, useParams } from 'react-router-dom'
import { MediaData } from '../definitions'
import { useNavigate } from 'react-router-dom'

type Params = {
  id: string
  type: string
}

type Props = {
  deleteMedia: (id: string, type: string) => void
}

const SingleMediaPage = ({ deleteMedia }: Props) => {
  const media = useLoaderData() as MediaData
  const { type } = useParams()
  const navigate = useNavigate()
  const onDeleteClick = (id: string, type: string) => {
    const confirm = window.confirm(
      `Are you sure you want to delete this ${type} `
    )
    if (!confirm) return

    deleteMedia(id, type)
    if (type === 'movie') {
      return navigate(`/movies`)
    }

    // toast.success(`${type} deleted successfully `);
    return navigate(`/${type}`)
  }
  return (
    <>
      <Header headerStyles="bg-purple-200" heading={media.name} />
      <ContentLayout gridStyles={'grid-cols-1'}>
        <section className="border-2 border-blue-500 h-fit min-h-screen md:h-[150vh] flex  my-4 mx-auto w-full sm:w-[90%] md:w-[80%] lg:w-[80%]">
          <section className="border-2 hit-fit sm:h-screen border-red-700   w-[90%] sm:w-full mx-auto justify-center gap-4 flex flex-col  sm:flex-row my-10">
            <div className="border-2 border-green-600 ">
              <img
                className="h-full w-[380px] mx-auto"
                src={media.imageURL}
                alt=""
              />
            </div>

            <div className=" sm:w-[50%] border-2 border-black flex flex-col  gap-4">
              <h2 className="text-4xl font-bold">{media.name}</h2>
              <p className="text-justify">{media.description}</p>
              <div className="py-3">
                <p>
                  <span className="font-semibold">Country:</span>{' '}
                  <span>{media.country}</span>{' '}
                </p>
                <p>
                  <span className="font-semibold">Genre:</span>{' '}
                  <span> {media.genre}</span>
                </p>
                <p>
                  <span className="font-semibold">Year:</span>{' '}
                  <span>{media.year}</span>{' '}
                </p>
                <p>
                  <span className="font-semibold">Type:</span>{' '}
                  <span className="capitalize"> {media.type}</span>{' '}
                </p>
              </div>
              <div className="flex">
                <Link
                  className="general-button mr-5"
                  to={`/edit/${type}/${media.id}`}
                >
                  Edit
                </Link>
                <button
                  onClick={() => onDeleteClick(media.id, media.type)}
                  className="general-button"
                >
                  Delete
                </button>
              </div>
            </div>
          </section>
        </section>
      </ContentLayout>
    </>
  )
}

const mediaLoader = async ({ params }: { params: Params }) => {
  const res = await fetch(`/api/${params.type}/${params.id}`)
  const data: MediaData = await res.json()
  return data
}

export { SingleMediaPage as default, mediaLoader }
