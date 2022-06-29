import Planet from "./planet/main"
import Form from "./form/main"
import { useEffect, useState } from "react"


async function getPlanets() {
  let response = await fetch('http://localhost:3000/api/planets.json')
  let data = await response.json()
  return data
}

const Planets = () => {
  const [planets, setPlanets] = useState([])

  useEffect(() => {
    getPlanets().then(data => {
      setPlanets(data['planets'])
    })
  }, [])
  
  const addPlanet = (new_planet) => {
    setPlanets([...planets, new_planet])
  }

  return (
    <>
      <h3>Planet List</h3>
      <hr />
      <Form addPlanet={addPlanet} />
      <hr />
      <ul>
        {planets.map((planet, index) =>
          <li key={index}>
            <Planet
              name={planet.name}
              description={planet.description}
              img_url={planet.img_url}
              link={planet.link}
              id={planet.id}
            />
          </li>
        )}
      </ul>
    </>
  )
}

export default Planets