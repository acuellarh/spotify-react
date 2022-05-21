import './App.css';
import {useEffect, useState} from 'react';
import axios from 'axios';
import { Navbar } from './components/Navbar';
import { Search } from './components/Search';
import { Artists } from './components/Artists';
import { Pagination } from './components/Pagination';

const CLIENT_ID = "da41273bb2444d84a74e22c37b8e4554"
const REDIRECT_URI = "http://localhost:3000"
const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
const RESPONSE_TYPE = "token"

function App() {

  const [token, setToken] = useState("") 
  const [searchKey, setSearchKey] = useState("");
  const [artists, setArtists] = useState([]); 
  const [total, setTotal] = useState("");
  const [limit, setLimit] = useState();
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState();
  const [next, setNext] = useState("");
  const [previous, setPrevious] = useState("");


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
    setToken("")
    window.localStorage.removeItem("token")
  }



  const searchArtists = async () => {

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
  

  return (
    <div className="container">

      <Navbar
        token = {token}
        AUTH_ENDPOINT = {AUTH_ENDPOINT}
        CLIENT_ID = {CLIENT_ID}
        REDIRECT_URI = {REDIRECT_URI}
        RESPONSE_TYPE = {RESPONSE_TYPE}
        logout = {logout}
      /> 

      <Search
        setSearchKey={setSearchKey}
        searchArtists={searchArtists}
      />  

      {artists.length>0 ? 
      
        <section className="row justify-content-sm-center row-cols-auto">
            <Pagination
              total={total}            
              limit={limit}
              setPage={setPage}
              page={page}             
              setTotalPages={setTotalPages}
              totalPages={totalPages}
              previous={previous}
              next={next}              
              fetchPaginationArtist={fetchPaginationArtist}
            />
        </section> 
        : 
        <p>Type any artist</p>
      } 

      <section className="row justify-content-sm-center row-cols-auto">
        {artists.map(({id, images, name, followers})=>
          <Artists
            key={id}
            images={images}
            name={name}
            followers={followers}
          />
        )}
      </section>

    </div>
  );
}

export default App;
