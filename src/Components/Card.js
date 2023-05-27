import React from 'react'
/*import image2 from '../assets/java.jpg'
import image3 from '../assets/docker.jpg'*/

export default function Card({id, title, image, instructor}) {
  return (
    <div className='card text-center bg-dark'>
      <div className='card-body text-light'>
        <img src={image} alt=""></img>
        <h4 className='card-title'>{title}</h4>
        <p className='card-text text-secondary'>
          Modulo: {id}
        </p>
        <p className='card-text text-secondary'>
          Instructor: {instructor}
        </p>
        <a href='#!' className='btn btn-outline-secondary rounded-0'>
          Ir al modulo
        </a>
      </div>
    </div>
  )
}
