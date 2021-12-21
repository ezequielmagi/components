import PropTypes from 'prop-types'

const PrimeraApp = ({ saludo , subtitulo }) => {

  return (
    <>
      <h1>{`hola, soy ${saludo}`}</h1>
      <p>{subtitulo}</p>
    </>
  )

}

PrimeraApp.propTypes = {
  saludo: PropTypes.string
}

PrimeraApp.defaultProps = {
  subtitulo: 'soy un subtitl'
}



export default PrimeraApp