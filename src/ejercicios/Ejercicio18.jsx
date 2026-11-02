import { useState } from 'react'

function Ejercicio18() {
  const [caracter, setCaracter] = useState('')
  const [vocal, setVocal] = useState('')
  const [intentos, setIntentos] = useState([])
  const [error, setError] = useState('')

  const comprobarCaracter = () => {
    setError('')

    if (caracter.trim() === '') {
      setError('Introduce un carácter para continuar.')
      return
    }

    if (caracter.length !== 1) {
      setError('Introduce solamente un carácter a la vez.')
      return
    }

    const nuevoCaracter = caracter
    const esVocal = 'aeiou'.includes(nuevoCaracter.toLowerCase())

    setIntentos((anteriores) => [...anteriores, nuevoCaracter])
    setCaracter('')

    if (esVocal) {
      setVocal(nuevoCaracter)
    }
  }

  const limpiar = () => {
    setCaracter('')
    setVocal('')
    setIntentos([])
    setError('')
  }

  return (
    <div className="calculator-panel">
      <div className="calculator-heading">
        <span className="section-kicker">MANEJO DE CARACTERES</span>

        <h2>Primera vocal ingresada</h2>

        <p>
          Introduce caracteres uno por uno. El programa continuará
          solicitándolos hasta encontrar la primera vocal.
        </p>
      </div>

      {!vocal && (
        <>
          <div className="calculator-form">
            <div className="form-group">
              <label htmlFor="caracter-ejercicio-18">
                Ingresa un carácter
              </label>

              <input
                id="caracter-ejercicio-18"
                type="text"
                maxLength="2"
                placeholder="Ejemplo: b"
                value={caracter}
                onChange={(e) => {
                  setCaracter(e.target.value)
                  setError('')
                }}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    comprobarCaracter()
                  }
                }}
              />
            </div>
          </div>

          <div className="calculator-actions">
            <button className="hero-button" onClick={comprobarCaracter}>
              Comprobar carácter →
            </button>

            <button className="clear-button" onClick={limpiar}>
              Limpiar
            </button>
          </div>
        </>
      )}

      {error && <p className="error-message">{error}</p>}

      {intentos.length > 0 && (
        <div className="salary-result">
          <span className="section-kicker">CARACTERES INGRESADOS</span>

          <div className="series-result">
            <p>
              Cantidad de intentos:{' '}
              <strong>{intentos.length}</strong>
            </p>

            <p>
              Caracteres leídos:{' '}
              <strong>{intentos.join(', ')}</strong>
            </p>
          </div>
        </div>
      )}

      {vocal && (
        <div className="salary-result">
          <span className="section-kicker">RESULTADO DEL EJERCICIO</span>

          <div className="total-salary">
            <span>La primera vocal ingresada fue</span>
            <strong>{vocal}</strong>
          </div>

          <div className="calculator-actions">
            <button className="clear-button" onClick={limpiar}>
              Volver a intentar
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Ejercicio18