import React, { useContext} from "react"
import { ArtistsContext } from "../context/ArtistsContext"

export const Navbar = () => {

  const {token, AUTH_ENDPOINT, CLIENT_ID, REDIRECT_URI, RESPONSE_TYPE, logout, albums, setAlbums} = useContext(ArtistsContext)
    
  return ( 
   
      <nav className="navbar navbar-light bg-light">
        <div className="container ">
          <a className="navbar-brand">Spotify </a>
          { !token ?  
            <a className="btn btn-outline-success"  href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>Login to Spotify</a>
            :   
            <button className="btn btn-outline-success" onClick={logout}>Logout</button>           
          } 
        </div>
      </nav>  

  )
}