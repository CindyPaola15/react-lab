import { useState } from 'react'

function Ejercicio05() {
  const [tiempo, setTiempo] = useState('')
  const [resultado, setResultado] = useState(null)
  const [error, setError] = useState('')

  const calcularTiempo = () => {
    setError('')
    setResultado(null)

    if (tiempo.trim() === '') {
      setError('Introduce una cantidad de minutos.')
      return
    }

    const cantidad = Number(tiempo)

    if (!Number.isSafeInteger(cantidad) || cantidad < 0) {
      setError('El tiempo debe ser un número entero igual o mayor que cero.')
      return
    }

    const dias = Math.floor(cantidad / 1440)
    const restoDias = cantidad % 1440
    const horas = Math.floor(restoDias / 60)
    const minutos = restoDias % 60

    setResultado({
      cantidad,
      dias,
      horas,
      minutos,
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
        <span className="section-kicker">CONVERSIÓN DE TIEMPO</span>
        <h2>Minutos a días, horas y minutos</h2>
        <p>
          Introduce una cantidad de minutos para conocer su equivalencia
          en días, horas y minutos.
        </p>
      </div>

      <div className="calculator-form">
        <div className="form-group">
          <label htmlFor="tiempo-minutos">Tiempo en minutos</label>
          <input
            id="tiempo-minutos"
            type="number"
            min="0"
            step="1"
            placeholder="Ej. 1500"
            value={tiempo}
            onChange={(e) => setTiempo(e.target.value)}
          />
        </div>

        {error && <p className="error-message">{error}</p>}

        <div className="calculator-actions">
          <button className="hero-button" onClick={calcularTiempo}>
            Convertir tiempo →
          </button>

          <button className="clear-button" onClick={limpiar}>
            Limpiar
          </button>
        </div>
      </div>

      {resultado && (
        <div className="salary-result">
          <span className="section-kicker">RESULTADO DE LA CONVERSIÓN</span>

          <div className="total-salary">
            <span>Equivalencia total</span>
            <strong>
              {resultado.dias} días, {resultado.horas} horas y {resultado.minutos} minutos
            </strong>
          </div>

          <div className="result-details">
            <div>
              <span>Minutos ingresados</span>
              <strong>{resultado.cantidad}</strong>
            </div>

            <div>
              <span>Días</span>
              <strong>{resultado.dias}</strong>
            </div>

            <div>
              <span>Horas</span>
              <strong>{resultado.horas}</strong>
            </div>

            <div>
              <span>Minutos restantes</span>
              <strong>{resultado.minutos}</strong>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Ejercicio05