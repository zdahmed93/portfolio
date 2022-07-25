import React from 'react'
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPhoneFill } from 'react-icons/bs';
import { FaMapMarkerAlt } from 'react-icons/fa';




const contactInformations = {
  email: 'ahmed@devmastery.tech',
  phone: '+216 50 122 128',
  address: {
    street: 'Route Afrane Km 2',
    city: 'Sfax',
    postalCode: '3089',
    country: 'Tunisie'
  }
}

function Contact() {
  return (
    <div className='container mt-5' >
      <div>
        <AiOutlineMail size={20} />
        <span style={{marginLeft: 6}}> {contactInformations.email} </span>
      </div>
      <div className='mt-3'>
        <BsFillPhoneFill size={20} />
        <span style={{marginLeft: 6}}> {contactInformations.phone} </span>
      </div>
      <div className='mt-3'>
        <FaMapMarkerAlt size={20} />
        <span style={{marginLeft: 6}}> {contactInformations.address.street}, {contactInformations.address.city},  {contactInformations.address.postalCode}, {contactInformations.address.country}</span>
      </div>
    </div>
  )
}

export default Contact