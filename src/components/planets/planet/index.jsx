import DescriptionWithLink from "../../shared/DescriptionWithLink/"
import GrayImg from "../../shared/GrayImg"
import { Link } from "react-router-dom"


const Planet = (planet) => {

  return (
    <>
      <Link to={`/planet/${planet.id}`}><h4>{planet.name}</h4></Link>
      <DescriptionWithLink link={planet.link} description={planet.description} />
      <GrayImg img_url={planet.img_url} gray={planet.gray} />
      
    </>
  )
}


export default Planet