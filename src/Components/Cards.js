import React from 'react'
import Card from './Card'
import image1 from '../assets/react-native.jpg'
import image2 from '../assets/java.jpg'
import image3 from '../assets/docker.jpg'

const cards = [
  {
    id:1,
    title: 'Curso de React',
    image: image1,
    instructor: "Benito Samuel López Razo"
  },
  {
    id:2,
    title: 'Curso de Java',
    image: image2,
    instructor: "Angela Ríos Luna"
  },
  {
    id:3,
    title: 'Curso de Docker',
    image: image3,
    instructor: "Valentin Jimenez Jarquin"
  }
]

export default function Cards() {
  console.log(cards)
  return (
    <div className='container d-flex justify-content-center align-items-center h-100'>
      <div className='row'>
        {
          cards.map(c =>(
            <div className='col-md-4' key={cards.id}>
              <Card
                key={c.id}
                id={c.id}
                title={c.title}
                image={c.image}
                instructor={c.instructor}
              />
            </div>
          ))
        }
      </div>
    </div>
  )
}
