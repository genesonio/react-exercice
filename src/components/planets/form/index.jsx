import { useState } from 'react'

const InitialState = {
  name: '',
  description: '',
  link: '',
  img_url: ''
}

const Form = (planets) => {
  const [fields, setFields] = useState(InitialState)
  const handleFieldsChange = event => setFields({
    ...fields,
    [event.currentTarget.name]: event.currentTarget.value
  })

  const handleSubmit = event => {
    planets.addPlanet(fields)
    event.preventDefault()
    setFields(InitialState)
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <br />
        <input name="name" id="name" type="text" value={fields.name} onChange={handleFieldsChange} />
        <br />
        <label htmlFor="description">Description</label>
        <br />
        <input name="description" id="description" type="text" value={fields.description} onChange={handleFieldsChange} />
        <br />
        <label htmlFor="link">Link</label>
        <br />
        <input name="link" id="link" type="text" value={fields.link} onChange={handleFieldsChange} />
        <br />
        <label htmlFor="img_url">Image </label>
        <br />
        <input name="img_url" id="img_url" type="text" value={fields.img_url} onChange={handleFieldsChange} />
        <br />
        <input type="submit" />
      </form>
    </>
  )
}

export default Form