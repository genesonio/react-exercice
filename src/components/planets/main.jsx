import Planet from "./planet/main"

const clickOnPlanet = (name) => {
  console.log(`${name}`)
}

const Planets = () => {
  return (
    <>
      <h3>Planet List</h3>
      <ul>
          <Planet
            name="Mercúrio"
            img_url="https://upload.wikimedia.org/wikipedia/commons/d/d9/Mercury_in_color_-_Prockter07-edit1.jpg"
            link="https://pt.wikipedia.org/wiki/Merc%C3%BArio_(planeta)"
            description="Mercúrio é o menor e mais interno planeta do Sistema Solar, orbitando o Sol a cada 87,969 dias terrestres. A sua órbita tem a maior excentricidade e o seu eixo apresenta a menor inclinação em relação ao plano da órbita dentre todos os planetas do Sistema Solar."
            clickOnPlanet={clickOnPlanet}
          />
      </ul>
    </>
  )
}

export default Planets