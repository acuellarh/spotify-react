export const Artists = ({images, name }) => {
  return (
    <div className="my-1">
      <div className="card h-100 text-center" style={{width: "16rem"}}>
        {images.length ? <img className="h-100 w-100" src={images[0].url} alt=""/> : <img className="h-100 w-100"  alt="No available image"/>} 
        <div className="card-body">
          <h5 className="card-title ">{name}</h5>
          <a className="btn btn-primary">Ver más</a>
        </div>
      </div>
    </div>
  )
}