import './style.css'

const GrayImg = (props) => {
  return (
    <img className={props.gray ? 'grayImg' : 'colorImg'} alt='Planet' src={props.img_url} />
  )
}

export default GrayImg