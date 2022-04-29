import './App.css';
import {useEffect, useState} from 'react';


const CLIENT_ID = "da41273bb2444d84a74e22c37b8e4554"
const REDIRECT_URI = "http://localhost:3000"
const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
const RESPONSE_TYPE = "token"




function App() {

  const [token, setToken] = useState("");

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



  return (
    <div className="App">
      <header className="App-header">
      <a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>Login to Spotify</a>
      </header>
    </div>
  );
}

export default App;
