import { useState } from 'react'

function Ejercicio26() {
  const [radio, setRadio] = useState('')
  const [resultado, setResultado] = useState(null)
  const [error, setError] = useState('')

  const calcular = (e) => {
    e.preventDefault()

    if (radio.trim() === '') {
      setError('Ingresa el radio para realizar los cálculos.')
      setResultado(null)
      return
    }

    const valorRadio = Number(radio)

    if (!Number.isFinite(valorRadio) || valorRadio <= 0) {
      setError('El radio debe ser un número mayor que cero.')
      setResultado(null)
      return
    }

    const pi = 3.14

    const longitud = 2 * pi * valorRadio
    const area = pi * Math.pow(valorRadio, 2)
    const volumen = (4 / 3) * pi * Math.pow(valorRadio, 3)

    setResultado({
      radio: valorRadio,
      longitud: longitud.toFixed(2),
      area: area.toFixed(2),
      volumen: volumen.toFixed(2),
    })

    setError('')
  }

  const limpiar = () => {
    setRadio('')
    setResultado(null)
    setError('')
  }

  return (
    <section className="calculator-panel">
      <div className="calculator-heading">
        <span className="section-kicker">Ejercicio 26</span>
        <h2>Círculo y esfera</h2>
        <p>
          Calcula la longitud de la circunferencia, el área del círculo
          y el volumen de la esfera a partir de un radio.
        </p>
      </div>

      <form className="calculator-form" onSubmit={calcular}>
        <div className="form-group">
          <label htmlFor="radio">Radio</label>
          <input
            id="radio"
            type="number"
            min="0"
            step="any"
            value={radio}
            onChange={(e) => setRadio(e.target.value)}
            placeholder="Ingresa el radio"
          />
        </div>

        {error && <p className="error-message">{error}</p>}

        <div className="calculator-actions">
          <button type="submit" className="hero-button">
            Calcular
          </button>

          <button
            type="button"
            className="clear-button"
            onClick={limpiar}
          >
            Limpiar
          </button>
        </div>
      </form>

      {resultado && (
        <div className="salary-result">
          <span className="section-kicker">Resultados</span>
          <h3 className="total-salary">
            Cálculos para un radio de {resultado.radio}
          </h3>

          <div className="series-result">
            <p>
              <strong>Longitud de la circunferencia:</strong>{' '}
              {resultado.longitud}
            </p>
            <p>
              <strong>Área del círculo:</strong> {resultado.area}
            </p>
            <p>
              <strong>Volumen de la esfera:</strong> {resultado.volumen}
            </p>
            <p>
              <strong>Valor de π utilizado:</strong> 3.14
            </p>
          </div>
        </div>
      )}
    </section>
  )
}

export default Ejercicio26