export const Navbar = (
  {token, AUTH_ENDPOINT, CLIENT_ID, REDIRECT_URI, RESPONSE_TYPE, logout}) => {
  return ( 
    <div class="container">
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand">Spotify </a>
          { !token ?  
            <a className="btn btn-outline-success"  href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>Login to Spotify</a>
            :   
            <button className="btn btn-outline-success" onClick={logout}>Logout</button>           
          }   
        </div>
      </nav>
    </div>

  )
}