import DescriptionWithLink from "../../shared/DescriptionWithLink/main"
import GrayImg from "../../shared/GrayImg/main"


const Planet = (props) => {
  const satNames = ['sat1', 'sat2', 'sat3', 'sat4']
  const satellites = satNames.map((satName) => {
    return <li>{satName}</li>
  })

  return (
    <li onClick={() => props.clickOnPlanet(props.name)}>
      <h4>{props.name}</h4>
      <DescriptionWithLink link={props.link} description={props.description} />
      <GrayImg img_url={props.img_url} gray={props.gray} />
      <ul>
        {satellites}
      </ul>
      <br />
    </li>
  )
}

export default Planet