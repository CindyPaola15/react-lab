import { useState } from 'react'

function Ejercicio19() {
  const [numero, setNumero] = useState('')
  const [resultado, setResultado] = useState(null)
  const [error, setError] = useState('')

  const comprobarNumero = (e) => {
    e.preventDefault()
    setError('')
    setResultado(null)

    if (numero.trim() === '') {
      setError('Ingresa un número para realizar la comprobación.')
      return
    }

    const valor = Number(numero)

    if (!Number.isFinite(valor)) {
      setError('Ingresa un número válido.')
      return
    }

    const parteTruncada = Math.trunc(valor)
    const tieneFraccion = valor !== parteTruncada

    setResultado({
      numero: valor,
      parteTruncada,
      tieneFraccion,
    })
  }

  const limpiar = () => {
    setNumero('')
    setResultado(null)
    setError('')
  }

  return (
    <div className="calculator-panel">
      <div className="calculator-heading">
        <span className="section-kicker">OPERACIONES CON NÚMEROS</span>

        <h2>Parte fraccionaria de un número</h2>

        <p>
          Introduce un número para determinar si tiene o no una parte
          fraccionaria.
        </p>
      </div>

      <form className="calculator-form" onSubmit={comprobarNumero}>
        <div className="form-group">
          <label htmlFor="numero-ejercicio-19">Ingresa un número</label>

          <input
            id="numero-ejercicio-19"
            type="number"
            step="any"
            placeholder="Ejemplo: 25.75"
            value={numero}
            onChange={(e) => {
              setNumero(e.target.value)
              setError('')
              setResultado(null)
            }}
          />
        </div>

        <div className="calculator-actions">
          <button className="hero-button" type="submit">
            Comprobar número →
          </button>

          <button className="clear-button" type="button" onClick={limpiar}>
            Limpiar
          </button>
        </div>
      </form>

      {error && <p className="error-message">{error}</p>}

      {resultado && (
        <div className="salary-result">
          <span className="section-kicker">RESULTADO DE LA COMPROBACIÓN</span>

          <div className="series-result">
            <p>
              Número ingresado: <strong>{resultado.numero}</strong>
            </p>

            <p>
              Número truncado: <strong>{resultado.parteTruncada}</strong>
            </p>
          </div>

          <div className="total-salary">
            <span>El número</span>
            <strong>
              {resultado.tieneFraccion
                ? 'Sí tiene parte fraccionaria'
                : 'No tiene parte fraccionaria'}
            </strong>
          </div>
        </div>
      )}
    </div>
  )
}

export default Ejercicio19