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
  const [offset, setOffset] = useState("");
  const [total, setTotal] = useState("");
  const [limit, setLimit] = useState();
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState();


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

  const searchArtists = async (e) => {
    e.preventDefault()
    const {data} = await axios.get("https://api.spotify.com/v1/search", {
        headers: {
            Authorization: `Bearer ${token}`
        },
        params: {
            q: searchKey,
            type: "artist"                         
        }
    })

    console.log(data)
    setPage(1)
    setLimit(data.artists.limit)
    setTotal(data.artists.total)
    setOffset(data.artists.offset)
    setArtists(data.artists.items)
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

      <section className="row justify-content-sm-center row-cols-auto">
          <Pagination
            total={total}
            offset={offset}
            limit={limit}
            setPage={setPage}
            page={page}
            artists={artists}
            setTotalPages={setTotalPages}
            totalPages={totalPages}
          />
      </section> 

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
