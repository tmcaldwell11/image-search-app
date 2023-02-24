import React from 'react';

export default function ImageCard(img) {
  const photo = img.img.webformatURL;


  return (
    <div>

      <div className="col-lg-3">
        <div className="card" style={{ width: '15rem' }}>
          <img src={photo} className="card-img-top" alt="data" />
          
        </div>
      </div>
    </div>
  );
}