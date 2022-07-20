import React from 'react';
import './Contact.css'
const Contact = ({title,description,phone,price,location,openSpots,coverImg,name , email}) => {

  return (
    <div className="card">
      <img src={coverImg} className="card-img-top img" alt={`mr ${name}`}/>
        <div className="card-body">
          <h5 className="card-title text-center"> {title}</h5>
          <div className='my-2'>
            <span><i className="fas fa-phone"></i>{phone}</span>
          </div>
          <div className='my-2'>
            <span><i className='fas fa-envelope'></i>{email}</span>
          </div>
          <p className="card-text">{description}</p>
        </div>
    </div>
  );
};

export default Contact;
