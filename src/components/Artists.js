export const Artists = ({images, name, followers }) => {
  return (
    <div className="my-1">
      <div className="card h-100 text-center" style={{width: "16rem"}}>
        {images.length ? <img className="h-100 w-100" src={images[0].url} alt=""/> : <img className="h-100 w-100"  alt="No available image"/>} 
        <div className="card-body">
          <h5 className="card-title ">{name}</h5>  
          <p className="card-title ">Follovers: {followers.total}</p>      

          <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#detailsModal">
            More info
          </button>
{/* 
          <!-- Modal --> */}
          <div className="modal fade" id="detailsModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                  ...
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  <button type="button" className="btn btn-primary">Save changes</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}