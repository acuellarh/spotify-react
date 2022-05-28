import { Link } from "react-router-dom";


export const Artists = ({images, name, followers, id, fetchArtistAlbums }) => {
  return (
    <div className="my-1">
      <div className="card h-100 text-center" style={{width: "16rem"}}>
        {images.length ? <img className="h-100 w-100" src={images[0].url} alt="artist_picture"/> : <img className="h-100 w-100"  alt="No available_picture"/>} 
        <div className="card-body">
          <h5 className="card-title ">{name}</h5>  
          <p className="card-title ">Follovers: {followers.total}</p>   

          {/* <button type="button" className="btn btn-primary" onClick={() => fetchArtistAlbums(id) }>Albums</button>    */}

          {/* <Link to="/albums" state={id} type="button" className="btn btn-info">Albums</Link> */}

      
    


        </div>
      </div>
    </div>
  )
}