import { useContext, useEffect } from "react"
import { ArtistsContext } from "../context/ArtistsContext"

export const Pagination = () => { 

  const {
    total,
    limit,
    setPage,
    page,
    setTotalPages,
    totalPages,
    previous,
    next, 
    fetchPaginationArtist} = useContext(ArtistsContext)

  const onChange = (value) => {
    if(value<0 && page + value <= 0) return
    if(value>0 && page >= totalPages) return
    setPage(page + value)   

    value === 1 ? fetchPaginationArtist(next) : fetchPaginationArtist(previous)
  }
  
  const cuantityPages = () => {    
    let remainder = total % limit  
    let numberPages = parseInt(total / limit )
    remainder===0 ? setTotalPages(numberPages) :  setTotalPages(numberPages + 1) 
  }  
  
  useEffect(() => {
    cuantityPages()        
  }, [total]);

  return (
    <>
      <section className="row justify-content-sm-center row-cols-auto">
        {totalPages ? 
          <>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-left-square" viewBox="0 0 16 16"
                onClick={() => onChange(-1) }
              >
                <path fillRule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm11.5 5.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"/>      
              </svg>
              <p> {page} of {totalPages} </p>  
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right-square" viewBox="0 0 16 16"
              onClick={() => onChange(1) }
              >
                <path fillRule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm4.5 5.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>    
              </svg>
          </>   
          : 
          <p></p>
        } 
      </section> 
   </>   
  )
}