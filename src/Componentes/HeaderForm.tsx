

export const HeaderForm = () => {
    const fechaActual = new Date()
    const fecha = fechaActual.toDateString()

  return (
    <>
        <h4>Solicitar Dia: </h4>
        <p>{fecha}</p>
        <button>Volver</button>
    </>
  )
}
