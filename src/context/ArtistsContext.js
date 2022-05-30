import { createContext, useEffect, useState } from 'react';

import axios from 'axios';
import React from 'react';

export const ArtistsContext = createContext()

export const ArtistsContextProvider = ({children}) => {

  const CLIENT_ID = "da41273bb2444d84a74e22c37b8e4554"
  const REDIRECT_URI = "http://localhost:3000"
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
  const RESPONSE_TYPE = "token"

  const [token, setToken] = useState(false) 
  const [searchKey, setSearchKey] = useState("");
  const [artists, setArtists] = useState([]); 
  const [total, setTotal] = useState("");
  const [limit, setLimit] = useState();
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState();
  const [next, setNext] = useState("");
  const [previous, setPrevious] = useState("");
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    const hash = window.location.hash
    let token = window.localStorage.getItem("token")

    if (!token && hash) {
        token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]

        window.location.hash = ""
        window.localStorage.setItem("token", token)
    }

    setToken(token)

  }, [])

  const logout = () => {
    setToken(false)
    window.localStorage.removeItem("token")
  }

  const searchArtists = async (e) => {
    e.preventDefault()
    try {       
        const {data} = await axios.get( "https://api.spotify.com/v1/search" , {
          headers: {
              Authorization: `Bearer ${token}`
          },
          params: {
            q: searchKey,
            type: "artist"                            
          }
        })

        console.log(data)
        setArtists(data.artists.items)  
        setPage(1)
        setLimit(data.artists.limit)
        setTotal(data.artists.total)
        setNext(data.artists.next)
        setPrevious(data.artists.previous)
   
    } catch (error) {
      console.error(error)
    }    
  }

  const fetchPaginationArtist = async (url) => {

    try {       
       
        const {data} = await axios.get( url , {
          headers: {
            Authorization: `Bearer ${token}`
          },
          params: {            
            type: "artist"                            
          }
        })

        console.log(data)
        setArtists(data.artists.items)          
        setNext(data.artists.next)
        setPrevious(data.artists.previous)
   
    } catch (error) {
      console.error(error)
    }
  }

  const fetchArtistAlbums = async (id) => {
    console.log(`Soy el id ${id}`)
    try {
      
      const {data} = await axios.get (`https://api.spotify.com/v1/artists/${id}/albums` , {
        headers: {
          Authorization: `Bearer ${token}`
        }, 
        params: {
          q: searchKey,
          include_groups: "album"   
        }
      })  
      console.log(data)
      setAlbums(data.items)  

    } catch (error) {
      console.error(error)
    }
  }

  const value = {
    CLIENT_ID, 
    REDIRECT_URI, 
    AUTH_ENDPOINT, 
    RESPONSE_TYPE,
    token,
    searchKey,
    artists,
    total,
    limit,
    page,
    totalPages,
    next,
    previous,
    albums,
    setSearchKey,
    setPage,
    setTotalPages,
    logout,
    searchArtists,
    fetchPaginationArtist,
    fetchArtistAlbums,
    setAlbums
  }

  return (
    <ArtistsContext.Provider value={value}>
      {children}
    </ArtistsContext.Provider>
  )

}

export const useArtistsContext = () => React.useContext(ArtistsContext) 