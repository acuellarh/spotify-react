import React, {useContext} from "react"
import { ArtistsContext } from "../context/ArtistsContext"
import { Artists } from "./Artists"

export const Search =  () => {
  
  const {setSearchKey, searchArtists, artists} = useContext(ArtistsContext)

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col mt-4 mb-4">
                       
            <form className="d-flex justify-content-center" onSubmit={searchArtists}> 
                <input             
                  type="search" 
                  placeholder="Search" 
                  aria-label="Search"
                  onChange={e => setSearchKey(e.target.value)}
                />        
              <button
                className="btn btn-outline-success"
                type="submit">
                  Search
              </button>
            </form>
          </div>       
        </div>  

        <section className="row justify-content-sm-center row-cols-auto">

          {artists.map(({images, name, followers, id}) => 

          <Artists
          key={id}
          images={images}
          name={name}
          followers={followers}
          id={id}                               
          />  

          )}
        </section>
      </div>
    </>
  )
}


