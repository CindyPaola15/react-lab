import { useState } from 'react'

function Ejercicio04() {
  const [tiempo, setTiempo] = useState('')
  const [resultado, setResultado] = useState(null)
  const [error, setError] = useState('')

  const calcularTiempo = () => {
    setError('')
    setResultado(null)

    if (tiempo.trim() === '') {
      setError('Introduce el tiempo en segundos.')
      return
    }

    const cantidad = Number(tiempo)

    if (!Number.isSafeInteger(cantidad) || cantidad <= 0) {
      setError('La cantidad de segundos debe ser un número entero positivo.')
      return
    }

    const minutos = Math.floor(cantidad / 60)
    const segundosTranscurridos = cantidad % 60
    const segundosRestantes =
      segundosTranscurridos === 0 ? 0 : 60 - segundosTranscurridos

    setResultado({
      cantidad,
      minutos,
      segundosTranscurridos,
      segundosRestantes,
    })
  }

  const limpiar = () => {
    setTiempo('')
    setResultado(null)
    setError('')
  }

  return (
    <div className="calculator-panel">
      <div className="calculator-heading">
        <span className="section-kicker">CÁLCULO DE TIEMPO</span>
        <h2>Segundos restantes para completar un minuto</h2>
        <p>
          Introduce una cantidad de segundos para conocer los minutos
          transcurridos y cuánto falta para completar el siguiente minuto.
        </p>
      </div>

      <div className="calculator-form">
        <div className="form-group">
          <label htmlFor="tiempo">Tiempo en segundos</label>
          <input
            id="tiempo"
            type="number"
            min="1"
            step="1"
            placeholder="Ej. 125"
            value={tiempo}
            onChange={(e) => setTiempo(e.target.value)}
          />
        </div>

        {error && <p className="error-message">{error}</p>}

        <div className="calculator-actions">
          <button className="hero-button" onClick={calcularTiempo}>
            Calcular tiempo →
          </button>

          <button className="clear-button" onClick={limpiar}>
            Limpiar
          </button>
        </div>
      </div>

      {resultado && (
        <div className="salary-result">
          <span className="section-kicker">RESULTADO DEL CÁLCULO</span>

          <div className="total-salary">
            <span>Segundos restantes</span>
            <strong>{resultado.segundosRestantes} segundos</strong>
          </div>

          <div className="result-details">
            <div>
              <span>Tiempo ingresado</span>
              <strong>{resultado.cantidad} segundos</strong>
            </div>

            <div>
              <span>Minutos completos</span>
              <strong>{resultado.minutos}</strong>
            </div>

            <div>
              <span>Segundos del minuto actual</span>
              <strong>{resultado.segundosTranscurridos}</strong>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Ejercicio04