import React from 'react';
import './Contact.css'
const componentName = ({img,name,email,phone}) => {
  return (
    <div className="card">
      <img src={img} className="card-img-top img" alt={`mr ${name}`}/>
        <div className="card-body">
          <h5 className="card-title text-center"> {name}</h5>
          <div className='my-2'>
            <span><i className="fas fa-phone"></i> {phone}</span>
          </div>
          <div className='my-2'>
            <span><i className='fas fa-envelope'></i>  {email}</span>
          </div>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
    </div>
  );
};

export default componentName;
