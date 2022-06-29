const DescriptionWithLink = (props) => {
  if (!props.description) {
    return null
  }

  if (props.link) {
    return (
      <>
        <p>{props.description}</p>
        <a target="_blank" rel='noreferrer' href={props.link}>{props.link}</a>
        <br/>
      </>
    )
  } else {
    return (
      <>
        <p>{props.description}</p>
        <p>Link não encontrado</p>
      </>
    )
  }
  
}

export default DescriptionWithLink