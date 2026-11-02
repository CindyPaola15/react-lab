import { useState } from 'react'

function Ejercicio27() {
  const [consumos, setConsumos] = useState('')
  const [resultado, setResultado] = useState(null)
  const [error, setError] = useState('')

  const formatoMoneda = (cantidad) =>
    new Intl.NumberFormat('es-DO', {
      style: 'currency',
      currency: 'DOP',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(cantidad)

  const calcular = (e) => {
    e.preventDefault()

    const valores = consumos
      .trim()
      .split(/[\s,;]+/)
      .filter(Boolean)

    if (valores.length !== 130) {
      setError(`Debes ingresar exactamente 130 consumos. Has ingresado ${valores.length}.`)
      setResultado(null)
      return
    }

    const numeros = valores.map(Number)

    if (numeros.some((numero) => !Number.isFinite(numero) || numero < 0)) {
      setError('Todos los consumos deben ser números válidos y no negativos.')
      setResultado(null)
      return
    }

    let totalBruto = 0
    let totalDescuentos = 0
    let totalFinal = 0
    let consumosConDescuento = 0

    const detalles = numeros.map((consumo, indice) => {
      const descuento = consumo > 130 ? consumo * 0.15 : 0
      const pagoFinal = consumo - descuento

      totalBruto += consumo
      totalDescuentos += descuento
      totalFinal += pagoFinal

      if (descuento > 0) {
        consumosConDescuento++
      }

      return {
        numero: indice + 1,
        consumo,
        descuento,
        pagoFinal,
      }
    })

    setResultado({
      cantidad: numeros.length,
      totalBruto,
      totalDescuentos,
      totalFinal,
      consumosConDescuento,
      detalles,
    })

    setError('')
  }

  const limpiar = () => {
    setConsumos('')
    setResultado(null)
    setError('')
  }

  return (
    <section className="calculator-panel">
      <div className="calculator-heading">
        <span className="section-kicker">Ejercicio 27</span>
        <h2>Pagos de restaurante</h2>
        <p>
          Registra 130 consumos y aplica un descuento del 15 %
          a cada consumo que supere los RD$130.
        </p>
      </div>

      <form className="calculator-form" onSubmit={calcular}>
        <div className="form-group">
          <label htmlFor="consumos">Lista de los 130 consumos</label>
          <textarea
            id="consumos"
            rows="8"
            value={consumos}
            onChange={(e) => setConsumos(e.target.value)}
            placeholder="Ejemplo: 100, 150, 200, 80...&#10;Ingresa aquí los 130 valores."
          />
          <small>
            Puedes separarlos con espacios, comas, punto y coma
            o saltos de línea.
          </small>
        </div>

        {error && <p className="error-message">{error}</p>}

        <div className="calculator-actions">
          <button type="submit" className="hero-button">
            Calcular pagos
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
          <span className="section-kicker">Resumen de los consumos</span>

          <h3 className="total-salary">
            Total a pagar: {formatoMoneda(resultado.totalFinal)}
          </h3>

          <div className="series-result">
            <p>
              <strong>Consumos registrados:</strong> {resultado.cantidad}
            </p>
            <p>
              <strong>Total antes de descuentos:</strong>{' '}
              {formatoMoneda(resultado.totalBruto)}
            </p>
            <p>
              <strong>Total de descuentos:</strong>{' '}
              {formatoMoneda(resultado.totalDescuentos)}
            </p>
            <p>
              <strong>Consumos con descuento:</strong>{' '}
              {resultado.consumosConDescuento}
            </p>
            <p>
              <strong>Consumos sin descuento:</strong>{' '}
              {resultado.cantidad - resultado.consumosConDescuento}
            </p>
          </div>

          <details>
            <summary>Ver detalle de los 130 consumos</summary>

            <div className="series-result">
              {resultado.detalles.map((item) => (
                <p key={item.numero}>
                  <strong>Consumo {item.numero}:</strong>{' '}
                  {formatoMoneda(item.consumo)}
                  {' · Descuento: '}
                  {formatoMoneda(item.descuento)}
                  {' · Pago: '}
                  {formatoMoneda(item.pagoFinal)}
                </p>
              ))}
            </div>
          </details>
        </div>
      )}
    </section>
  )
}

export default Ejercicio27