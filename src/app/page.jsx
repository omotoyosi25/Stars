import React from 'react'
import Stars from './components/Stars'

export const data = [
  {
    "name": "Taylor Swift",
    "id": "taylor_swift",
    "nationality": "American",
    "profession": "Singer-songwriter",
    "net_worth": "$400 million",
    "date_of_birth": "December 13, 1989",
    "description": "Taylor Swift is a Grammy-winning singer-songwriter known for her narrative songwriting and country-to-pop evolution.",
    "image": "/taylor_swift.webp"
  },
  {
    "name": "Cristiano Ronaldo",
    "id": "ronaldo",
    "nationality": "Portuguese",
    "profession": "Professional Footballer",
    "net_worth": "$500 million",
    "date_of_birth": "February 5, 1985",
    "description": "Cristiano Ronaldo is one of the greatest footballers of all time, known for his incredible skill and goal-scoring ability.",
    "image": "/ronaldo.jpg"
  },
  {
    "name": "Yanni",
    "id": "yanni",
    "nationality": "Greek",
    "profession": "Musician",
    "net_worth": "$50 million",
    "date_of_birth": "November 14, 1954",
    "description": "Yanni is a Greek musician known for his captivating instrumental compositions that blend various genres.",
    "image": "/yanni.webp"
  },
  {
    "name": "Mason Greenwood",
    "id": "mason_greenwood",
    "nationality": "English",
    "profession": "Professional Footballer",
    "net_worth": "N/A",
    "date_of_birth": "October 1, 2001",
    "description": "Mason Greenwood is a rising English football talent, making his mark as a forward for Manchester United.",
    "image": "/mason_greenwood.jpeg"
  },
  {
    "name": "Didier Drogba",
    "id": "drogba",
    "nationality": "Ivorian",
    "profession": "Retired Footballer",
    "net_worth": "$90 million",
    "date_of_birth": "March 11, 1978",
    "description": "Didier Drogba is a legendary Ivorian footballer who was a force to be reckoned with on and off the field.",
    "image": "/drogba.jpg"
  },
  {
    "name": "Fela Kuti",
    "id": "fela",
    "nationality": "Nigerian",
    "profession": "Musician",
    "net_worth": "N/A",
    "date_of_birth": "October 15, 1938",
    "description": "Fela Kuti was a Nigerian musician and political activist known for pioneering Afrobeat music.",
    "image": "/fela.jpg"
  },
  {
    "name": "John Cena",
    "id": "john_cena",
    "nationality": "American",
    "profession": "Wrestler, Actor",
    "net_worth": "$60 million",
    "date_of_birth": "April 23, 1977",
    "description": "John Cena is a wrestling icon who transitioned to Hollywood, known for his charismatic presence in and out of the ring.",
    "image": "/cena.avif"
  },
  {
    "name": "Beyoncé",
    "id": "beyonce",
    "nationality": "American",
    "profession": "Singer, Actress",
    "net_worth": "$500 million",
    "date_of_birth": "September 4, 1981",
    "description": "Beyoncé is a global superstar, celebrated for her powerful vocals, dynamic performances, and social impact.",
    "image": "/beyonce.avif"
  },
  
]


export default function page() {
  return (
    <main>
      <Stars star={data}/>
    </main>
  )
}
