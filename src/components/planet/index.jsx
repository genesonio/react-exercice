import DescriptionWithLink from "../shared/DescriptionWithLink"
import GrayImg from "../shared/GrayImg"
import Form from './form'
import { useEffect, useState } from "react"
import { useParams, Navigate, useNavigate } from 'react-router-dom'


async function getPlanet(planetId) {
  const response = await fetch(`http://localhost:3000/api/${planetId}.json`)
  const data = await response.json()
  return data
}

const Planet = () => {
  const [planet, setPlanet] = useState({})
  const [satellites, setSatellites] = useState([])
  const [redirect, setRedirect] = useState(false)

  let { id } = useParams()

  useEffect(() => {
    getPlanet(id).then(data => {
      setSatellites(data['satellites'])
      setPlanet(data['data'])
    }, error => {
        setRedirect(true)
    })
  }, [id])
  
  const navigate = useNavigate()

  const goToPlanets = () => {
    navigate('/')
  }

  const addSatellites = (new_satellite) => {
    setSatellites([...satellites, new_satellite])
  }

  if (redirect) {
      return <Navigate to='/' />
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
      <button type="button" onClick={goToPlanets}>Voltar a listagem</button>
      <hr />
    </>
  )
}


export default Planet