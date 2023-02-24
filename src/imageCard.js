import React, {useState} from 'react';


export default function ImageCard(img) {
  const photo = img.img.webformatURL;
  const user = img.img.user;
  const downloads = img.img.downloads;
  const [t1, t2, t3] = img.img.tags.split(',');
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if(modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }


  return (
    <div>
      <div className="col-lg-2">
        <div  className="card" style={{ width: '25rem' }}>
        
          <>
      <button onClick={toggleModal} className="btn-modal">
      <img src={photo} className="card-img-top" alt="data" />
      </button>

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            
          <div className="card-body">
            
            <img src={photo} className="card-img-top" alt="data" />
            <p className="card-text">User : {user}</p>
            <p className="card-text">Downloads : {downloads}</p>
            <span className="badge bg-secondary">{t1}</span> &nbsp;
            <span className="badge bg-secondary">{t2}</span> &nbsp;
            <span className="badge bg-secondary">{t3}</span> 
           
          
          </div> 
            <button className="close-modal" onClick={toggleModal}>
              X
            </button>
          </div>
        </div>
      )}
       
    </>
          </div>
        
      </div>
    </div>
  );
}