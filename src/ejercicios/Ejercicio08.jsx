import { useState } from 'react'

function Ejercicio08() {
  const [horas, setHoras] = useState('')
  const [tarifa, setTarifa] = useState('')
  const [resultado, setResultado] = useState(null)
  const [error, setError] = useState('')

  const formatoDinero = (valor) =>
    valor.toLocaleString('es-DO', {
      style: 'currency',
      currency: 'DOP',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })

  const calcularSalario = () => {
    setError('')
    setResultado(null)

    if (horas.trim() === '' || tarifa.trim() === '') {
      setError('Completa las horas trabajadas y la tarifa por hora.')
      return
    }

    const horasNumero = Number(horas)
    const tarifaNumero = Number(tarifa)

    if (!Number.isFinite(horasNumero) || !Number.isFinite(tarifaNumero)) {
      setError('Introduce valores numéricos válidos.')
      return
    }

    if (horasNumero < 0 || tarifaNumero < 0) {
      setError('Las horas y la tarifa no pueden ser negativas.')
      return
    }

    const salario = horasNumero * tarifaNumero

    setResultado({
      horas: horasNumero,
      tarifa: tarifaNumero,
      salario,
    })
  }

  const limpiar = () => {
    setHoras('')
    setTarifa('')
    setResultado(null)
    setError('')
  }

  return (
    <div className="calculator-panel">
      <div className="calculator-heading">
        <span className="section-kicker">CÁLCULO DE NÓMINA</span>
        <h2>Salario de un trabajador</h2>
        <p>
          Introduce las horas trabajadas y la tarifa por hora
          para calcular el salario correspondiente.
        </p>
      </div>

      <div className="calculator-form">
        <div className="form-group">
          <label htmlFor="horas-trabajadas-08">
            Horas trabajadas
          </label>
          <input
            id="horas-trabajadas-08"
            type="number"
            min="0"
            step="any"
            placeholder="Ej. 40"
            value={horas}
            onChange={(e) => {
              setHoras(e.target.value)
              setResultado(null)
              setError('')
            }}
          />
        </div>

        <div className="form-group">
          <label htmlFor="tarifa-trabajador-08">
            Tarifa por hora (RD$)
          </label>
          <input
            id="tarifa-trabajador-08"
            type="number"
            min="0"
            step="any"
            placeholder="Ej. 150"
            value={tarifa}
            onChange={(e) => {
              setTarifa(e.target.value)
              setResultado(null)
              setError('')
            }}
          />
        </div>
      </div>

      <div className="calculator-actions">
        <button className="hero-button" onClick={calcularSalario}>
          Calcular salario →
        </button>

        <button className="clear-button" onClick={limpiar}>
          Limpiar
        </button>
      </div>

      {error && <p className="error-message">{error}</p>}

      {resultado !== null && (
        <div className="salary-result">
          <span className="section-kicker">RESULTADO DEL CÁLCULO</span>

          <div className="total-salary">
            <span>Salario del trabajador</span>
            <strong>{formatoDinero(resultado.salario)}</strong>
          </div>

          <div className="series-result">
            <h3>Detalle del cálculo</h3>

            <p>
              Horas trabajadas: <strong>{resultado.horas}</strong>
            </p>

            <p>
              Tarifa por hora:{' '}
              <strong>{formatoDinero(resultado.tarifa)}</strong>
            </p>

            <p>
              Salario calculado:{' '}
              <strong>{formatoDinero(resultado.salario)}</strong>
            </p>
          </div>
        </div>
      )}
    </div>
  )
}

export default Ejercicio08