import './App.css';
import {useEffect, useState} from 'react';
import axios from 'axios';


const CLIENT_ID = "da41273bb2444d84a74e22c37b8e4554"
const REDIRECT_URI = "http://localhost:3000"
const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
const RESPONSE_TYPE = "token"



function App() {

  const [token, setToken] = useState("")
  const [searchKey, setSearchKey] = useState("");
  const [artists, setArtists] = useState([]);

  useEffect(() => {
    const hash = window.location.hash
    //#access_token=BQD-4Qy25wHCNdE2GRfGKwVPY5OOfxLVyVbR08w5KsFT84svfYbn_cyU_UGba9QfcKVMaaEMo6moyTYdYJHtEuN38ixoppCoV8DGDTNd9gpUFlo3W6LDB_TcXbmuYvZOUFQJKWQsf_PJv5F8W8CaJXa3FIJDUgM&token_type=Bearer&expires_in=3600
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

    setArtists(data.artists.items)
}

  return (
    <div className="">
    
      <header className="">
        { !token ?  
          <a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>Login to Spotify</a>
          :
          <button onClick={logout}> Logout </button>           
        }
      </header>

        <form onSubmit={searchArtists}>
          <input type="text" onChange={e => setSearchKey(e.target.value)}/>
          <button type={"submit"}>Search</button>
        </form>       
   

    </div>
  );
}

export default App;
