import { Link } from "react-router-dom"

const NotFoundScreen = () => {
  return (
    <>
      <h1>Página não encontrada!</h1>
      
      <Link to='/'>Voltar a listagem</Link>
    </>
  )
}

export default NotFoundScreen