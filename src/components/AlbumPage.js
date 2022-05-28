import { useLocation, Link } from "react-router-dom";

const AlbumPage = (props) => {

  const location = useLocation()
  const state = location.state
  console.log(state)


  return (
    <>
        {console.log(`Estado dentro de return de Album Page ${state}`)}
        <Link to="/" type="button" className="btn btn-info">Go back</Link>
    </>
  )
}

export default AlbumPage;