import { useState } from 'react'

function Ejercicio02() {
  const [sueldo, setSueldo] = useState('')
  const [resultado, setResultado] = useState(null)
  const [error, setError] = useState('')

  const calcularDescuento = () => {
    setError('')
    setResultado(null)

    if (sueldo.trim() === '') {
      setError('Introduce el sueldo del trabajador.')
      return
    }

    const sueldoBruto = Number(sueldo)

    if (!Number.isFinite(sueldoBruto)) {
      setError('Introduce un valor numérico válido.')
      return
    }

    if (sueldoBruto < 0) {
      setError('El sueldo no puede ser negativo.')
      return
    }

    let descuento = 0

    if (sueldoBruto <= 1000) {
      descuento = sueldoBruto * 0.10
    } else if (sueldoBruto <= 2000) {
      descuento = (1000 * 0.10) + (sueldoBruto - 1000) * 0.05
    } else {
      descuento =
        (1000 * 0.10) +
        (1000 * 0.05) +
        (sueldoBruto - 2000) * 0.03
    }

    const sueldoNeto = sueldoBruto - descuento

    setResultado({
      sueldoBruto,
      descuento,
      sueldoNeto,
    })
  }

  const formatoMoneda = (cantidad) =>
    cantidad.toLocaleString('es-DO', {
      style: 'currency',
      currency: 'DOP',
    })

  return (
    <div className="calculator-panel">
      <div className="calculator-heading">
        <span className="section-kicker">CÁLCULO DE SUELDO NETO</span>
        <h2>Salario y descuentos</h2>
        <p>
          Introduce el sueldo bruto para calcular el descuento
          correspondiente y el salario neto del trabajador.
        </p>
      </div>

      <div className="calculator-form">
        <div className="form-group">
          <label htmlFor="sueldo">Sueldo bruto (RD$)</label>
          <input
            id="sueldo"
            type="number"
            min="0"
            step="0.01"
            placeholder="Ej. 2500"
            value={sueldo}
            onChange={(e) => setSueldo(e.target.value)}
          />
        </div>

        {error && <p className="error-message">{error}</p>}

        <div className="calculator-actions">
          <button className="hero-button" onClick={calcularDescuento}>
            Calcular sueldo →
          </button>

          <button
            className="clear-button"
            onClick={() => {
              setSueldo('')
              setResultado(null)
              setError('')
            }}
          >
            Limpiar
          </button>
        </div>
      </div>

      {resultado && (
        <div className="salary-result">
          <span className="section-kicker">RESULTADO DEL CÁLCULO</span>

          <div className="total-salary">
            <span>Sueldo neto</span>
            <strong>{formatoMoneda(resultado.sueldoNeto)}</strong>
          </div>

          <div className="result-details">
            <div>
              <span>Sueldo bruto</span>
              <strong>{formatoMoneda(resultado.sueldoBruto)}</strong>
            </div>

            <div>
              <span>Descuento total</span>
              <strong>{formatoMoneda(resultado.descuento)}</strong>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Ejercicio02