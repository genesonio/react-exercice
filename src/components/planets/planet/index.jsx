import DescriptionWithLink from "../../shared/DescriptionWithLink/main"
import GrayImg from "../../shared/GrayImg/main"
import Form from '../../planet/form'
import { useEffect, useState } from "react"

async function getSatellites(planetId) {
  const response = await fetch(`http://localhost:3000/api/${planetId}.json`)
  const data = await response.json()
  return data
}

const Planet = (planet) => {
  const [satellites, setSatellites] = useState([])

  useEffect(() => {
    getSatellites(planet.id).then(data => {
      setSatellites(data['satellites'])
    })
    
  }, [planet.id])

  const addSatellites = (new_satellite) => {
    setSatellites([...satellites, new_satellite])
  }

  return (
    <>
      <h4>{planet.name}</h4>
      <DescriptionWithLink link={planet.link} description={planet.description} />
      <GrayImg img_url={planet.img_url} gray={planet.gray} />
      <h5>Satellites</h5>
      <hr />
      <Form addSatellites={addSatellites} />
      <hr />
        <ul>
        {satellites.map((satellite, index) =>
          <li key={index}>
            {satellite.name}
          </li>
        )}
        </ul>
      <hr />
    </>
  )
}


export default Planet