import { useState } from 'react'

function Ejercicio03() {
  const [monto, setMonto] = useState('')
  const [resultado, setResultado] = useState(null)
  const [error, setError] = useState('')

  const calcularDescuento = () => {
    setError('')
    setResultado(null)

    if (monto.trim() === '') {
      setError('Introduce el monto.')
      return
    }

    const cantidad = Number(monto)

    if (!Number.isFinite(cantidad) || cantidad < 0) {
      setError('Introduce un monto válido.')
      return
    }

    if (cantidad === 0) {
      setError('El monto debe ser mayor que cero.')
      return
    }

    const porcentaje = cantidad > 100 ? 0.10 : 0.02
    const descuento = cantidad * porcentaje
    const montoFinal = cantidad - descuento

    setResultado({
      cantidad,
      porcentaje,
      descuento,
      montoFinal,
    })
  }

  const formatoMoneda = (valor) =>
    valor.toLocaleString('es-DO', {
      style: 'currency',
      currency: 'DOP',
    })

  return (
    <div className="calculator-panel">
      <div className="calculator-heading">
        <span className="section-kicker">CÁLCULO DE DESCUENTOS</span>
        <h2>Descuento según el monto</h2>
        <p>
          Introduce un monto para calcular el descuento
          correspondiente y conocer el total a pagar.
        </p>
      </div>

      <div className="calculator-form">
        <div className="form-group">
          <label htmlFor="monto">Monto (RD$)</label>
          <input
            id="monto"
            type="number"
            min="0"
            step="0.01"
            placeholder="Ej. 1500"
            value={monto}
            onChange={(e) => setMonto(e.target.value)}
          />
        </div>

        {error && <p className="error-message">{error}</p>}

        <div className="calculator-actions">
          <button className="hero-button" onClick={calcularDescuento}>
            Calcular descuento →
          </button>

          <button
            className="clear-button"
            onClick={() => {
              setMonto('')
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
            <span>Total a pagar</span>
            <strong>{formatoMoneda(resultado.montoFinal)}</strong>
          </div>

          <div className="result-details">
            <div>
              <span>Monto original</span>
              <strong>{formatoMoneda(resultado.cantidad)}</strong>
            </div>

            <div>
              <span>Porcentaje aplicado</span>
              <strong>{resultado.porcentaje * 100}%</strong>
            </div>

            <div>
              <span>Descuento</span>
              <strong>{formatoMoneda(resultado.descuento)}</strong>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Ejercicio03