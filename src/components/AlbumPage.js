import { useContext } from "react";
import { Link } from "react-router-dom";
import { ArtistsContext } from "../context/ArtistsContext";

const AlbumPage = () => {

  const {albums} = useContext(ArtistsContext)

  return (
    <>
      <div className="container">
        <div className="row justify-content-sm-center">
          <Link to="/" type="button" className="btn btn-info my-3" >Go back</Link>
        </div>
        <section className="row justify-content-sm-center row-cols-auto">
          { albums.length>0 ?
            albums.map(({id,images, name, total_tracks, external_urls})=> 

              <div key={id} className="my-1">
                <div className="card h-100 text-center" style={{width: "16rem"}}>
                  {images.length ? <img className="h-100 w-100" src={images[0].url} alt="artist_picture"/> : <img className="h-100 w-100"  alt="No available_picture"/>} 
                  <div className="card-body">
                    <h5 className="card-title ">{name}</h5>  
                    <p className="card-title ">Tracks: {total_tracks}</p>  
                    <a href={external_urls.spotify} target="_blank" rel="noreferrer" className="btn btn-info">Open in Spotify</a>          
                  </div>
                </div>
              </div>            
            )
            :
            <h3 className="mt-4">This Artist doesn't have albums in Spotify!!</h3>
          }
        </section>
      </div>
    </>  
  )
}

export default AlbumPage;