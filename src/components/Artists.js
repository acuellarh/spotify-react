import { Link } from "react-router-dom";


import React, { useContext } from 'react';
import { ArtistsContext } from "../context/ArtistsContext";

export const Artists = () => {

  const {fetchArtistAlbums, artists} = useContext(ArtistsContext)
  
  return (
    <>
      <section className="row justify-content-sm-center row-cols-auto">
        { artists.length>0 ?
          artists.map(({id,images, name, followers})=> 

            <div key={id} className="my-1">
              <div className="card h-100 text-center" style={{width: "16rem"}}>
                {images.length ? <img className="h-100 w-100" src={images[0].url} alt="artist_picture"/> : <img className="h-100 w-100"  alt="No available_picture"/>} 
                <div className="card-body">
                  <h5 className="card-title ">{name}</h5>  
                  <p className="card-title ">Follovers: {followers.total}</p>        
                  <Link to="/albums" type="button" className="btn btn-info" onClick={() => fetchArtistAlbums(id) }>Check albums</Link>        
                </div>
              </div>
            </div>          
          )
          :
          <p></p>
        }
      </section>
    </>   
  ) 


}