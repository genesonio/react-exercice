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
            description="Mercúrio é o menor e mais interno planeta do Sistema Solar, orbitando o Sol a cada 87,969 dias terrestres. A sua órbita tem a maior excentricidade e o seu eixo apresenta a menor inclinação em relação ao plano da órbita dentre todos os planetas do Sistema Solar."
            link="https://pt.wikipedia.org/wiki/Merc%C3%BArio_(planeta)"
            img_url="https://upload.wikimedia.org/wikipedia/commons/d/d9/Mercury_in_color_-_Prockter07-edit1.jpg"
            gray={false}
            clickOnPlanet={clickOnPlanet}
          />
          <Planet
            name="Vênus"
            description="Vénus (português europeu) ou Vênus (português brasileiro) é o segundo planeta do Sistema Solar em ordem de distância a partir do Sol, orbitando-o a cada 224,7 dias."
            link="https://pt.wikipedia.org/wiki/V%C3%A9nus_(planeta)"
            img_url="https://upload.wikimedia.org/wikipedia/commons/8/85/Venus_globe.jpg"
            gray={true}
            clickOnPlanet={clickOnPlanet}
          />
      </ul>
    </>
  )
}

export default Planets