import DescriptionWithLink from "../../shared/DescriptionWithLink/main"
import GrayImg from "../../shared/GrayImg/main"

const Planet = (props) => {
  return (
    <>
      <h4>{props.name}</h4>
      <DescriptionWithLink link={props.link} description={props.description} />
      <GrayImg img_url={props.img_url} />
    </>
  )
}

export default Planet