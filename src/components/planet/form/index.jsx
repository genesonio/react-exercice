import { useState } from 'react'

const initialState = {
  name: ''
}

const Form = (planet) => {
  const [fields, setFields] = useState(initialState)
  const handleFieldsChange = event => setFields({
    [event.currentTarget.name]: event.currentTarget.value
  })

  const handleSubmit = event => {
    planet.addSatellites(fields)
    event.preventDefault()
    setFields(initialState)
  }
  
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Satellite name: </label>
        <input type="text" id='name' name='name' value={fields.name} onChange={handleFieldsChange} />
        <button type='submit'>Enviar</button>
      </form>
    </>
)}


export default Form