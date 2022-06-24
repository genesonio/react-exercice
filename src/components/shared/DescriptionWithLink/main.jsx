const DescriptionWithLink = (props) => {
  return (
    <>
      <p>{props.description}</p>
      <a target="_blank" rel='noreferrer' href={props.link}>{props.link}</a>
      <br/>
    </>
  )
}

export default DescriptionWithLink