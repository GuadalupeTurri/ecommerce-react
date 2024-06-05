import "./Checkout.css"

const Formulario = ({datosForm,handleChangeInput,handleSubmitForm}) => {
  return (
    
    <form className="form" onSubmit={handleSubmitForm}>
    <div className="form-group">
      <label className="label" htmlFor="nombre">Nombre:</label>
      <input className="input" type="text" id="nombre" name="nombre" value={datosForm.nombre} onChange={handleChangeInput} />
    </div>

    <div className="form-group">
      <label className="label" htmlFor="telefono">Teléfono:</label>
      <input className="input" type="text" id="telefono" name="telefono" value={datosForm.telefono} onChange={handleChangeInput} />
    </div>

    <div className="form-group">
      <label className="label" htmlFor="email">Email:</label>
      <input className="input" type="email" id="email" name="email" value={datosForm.email} onChange={handleChangeInput} />
    </div>

    <button className="submit-button" type="submit">Enviar</button>
  </form>
);
  
}

export default Formulario