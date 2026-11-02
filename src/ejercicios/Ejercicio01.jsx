import { useState } from 'react'

function Ejercicio01() {
  const [horas, setHoras] = useState('')
  const [tarifa, setTarifa] = useState('')
  const [resultadoSalario, setResultadoSalario] = useState(null)
  const [errorSalario, setErrorSalario] = useState('')

  const calcularSalario = () => {
    setErrorSalario('')
    setResultadoSalario(null)

    if (horas.trim() === '' || tarifa.trim() === '') {
      setErrorSalario('Completa todos los campos.')
      return
    }

    const horasTrabajadas = Number(horas)
    const pagoPorHora = Number(tarifa)

    if (
      !Number.isFinite(horasTrabajadas) ||
      !Number.isFinite(pagoPorHora)
    ) {
      setErrorSalario('Introduce valores numéricos válidos.')
      return
    }

    if (horasTrabajadas < 0) {
      setErrorSalario('Las horas trabajadas no pueden ser negativas.')
      return
    }

    if (pagoPorHora < 0) {
      setErrorSalario('La tarifa por hora no puede ser negativa.')
      return
    }

    if (!Number.isInteger(horasTrabajadas)) {
      setErrorSalario('Las horas trabajadas deben ser un número entero.')
      return
    }

    const horasNormales = Math.min(horasTrabajadas, 40)
    const horasExtras = Math.max(horasTrabajadas - 40, 0)

    const pagoNormal = horasNormales * pagoPorHora
    const pagoExtra = horasExtras * pagoPorHora * 1.5
    const salarioTotal = pagoNormal + pagoExtra

    setResultadoSalario({
      horasNormales,
      horasExtras,
      pagoNormal,
      pagoExtra,
      salarioTotal,
    })
  }

  return (
    <div className="calculator-panel">
      <div className="calculator-heading">
        <span className="section-kicker">CALCULADORA DE SALARIOS</span>
        <h2>Calcula tu salario</h2>
        <p>
          Introduce las horas trabajadas y el pago correspondiente por hora.
        </p>
      </div>

      <div className="calculator-form">
        <div className="form-group">
          <label htmlFor="horas">Horas trabajadas</label>
          <input
            id="horas"
            type="number"
            min="0"
            step="1"
            placeholder="Ej. 45"
            value={horas}
            onChange={(e) => setHoras(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="tarifa">Pago por hora (RD$)</label>
          <input
            id="tarifa"
            type="number"
            min="0"
            step="0.01"
            placeholder="Ej. 150"
            value={tarifa}
            onChange={(e) => setTarifa(e.target.value)}
          />
        </div>

        {errorSalario && (
          <p className="error-message">{errorSalario}</p>
        )}

        <div className="calculator-actions">
          <button className="hero-button" onClick={calcularSalario}>
            Calcular salario →
          </button>

          <button
            className="clear-button"
            onClick={() => {
              setHoras('')
              setTarifa('')
              setResultadoSalario(null)
              setErrorSalario('')
            }}
          >
            Limpiar
          </button>
        </div>
      </div>

      {resultadoSalario && (
        <div className="salary-result">
          <span className="section-kicker">RESULTADO DEL CÁLCULO</span>

          <div className="total-salary">
            <span>Salario total</span>
            <strong>
              {resultadoSalario.salarioTotal.toLocaleString('es-DO', {
                style: 'currency',
                currency: 'DOP',
              })}
            </strong>
          </div>

          <div className="result-details">
            <div>
              <span>Horas normales</span>
              <strong>{resultadoSalario.horasNormales}</strong>
            </div>

            <div>
              <span>Horas extras</span>
              <strong>{resultadoSalario.horasExtras}</strong>
            </div>

            <div>
              <span>Pago normal</span>
              <strong>
                {resultadoSalario.pagoNormal.toLocaleString('es-DO', {
                  style: 'currency',
                  currency: 'DOP',
                })}
              </strong>
            </div>

            <div>
              <span>Pago extra</span>
              <strong>
                {resultadoSalario.pagoExtra.toLocaleString('es-DO', {
                  style: 'currency',
                  currency: 'DOP',
                })}
              </strong>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Ejercicio01