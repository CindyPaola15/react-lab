import { useState } from 'react'

function Ejercicio11() {
  const [precio, setPrecio] = useState('')
  const [cantidad, setCantidad] = useState('')
  const [resultado, setResultado] = useState(null)
  const [error, setError] = useState('')

  const formatoDinero = (valor) =>
    valor.toLocaleString('es-DO', {
      style: 'currency',
      currency: 'DOP',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })

  const calcularFactura = () => {
    setError('')
    setResultado(null)

    if (precio.trim() === '' || cantidad.trim() === '') {
      setError('Completa el precio y la cantidad de artículos.')
      return
    }

    const precioNumero = Number(precio)
    const cantidadNumero = Number(cantidad)

    if (
      !Number.isFinite(precioNumero) ||
      !Number.isFinite(cantidadNumero)
    ) {
      setError('Introduce valores numéricos válidos.')
      return
    }

    if (precioNumero <= 0) {
      setError('El precio debe ser mayor que cero.')
      return
    }

    if (!Number.isSafeInteger(cantidadNumero) || cantidadNumero < 1) {
      setError('La cantidad debe ser un número entero mayor que cero.')
      return
    }

    const precioVenta = precioNumero * cantidadNumero
    const iva = Number((precioVenta * 0.15).toFixed(2))
    const precioBruto = Number((precioVenta + iva).toFixed(2))

    const descuento =
      precioBruto >= 50
        ? Number((precioBruto * 0.05).toFixed(2))
        : 0

    const totalPagar = Number((precioBruto - descuento).toFixed(2))

    setResultado({
      precio: precioNumero,
      cantidad: cantidadNumero,
      precioVenta,
      iva,
      precioBruto,
      descuento,
      totalPagar,
    })
  }

  const limpiar = () => {
    setPrecio('')
    setCantidad('')
    setResultado(null)
    setError('')
  }

  return (
    <div className="calculator-panel">
      <div className="calculator-heading">
        <span className="section-kicker">FACTURACIÓN Y COMPRAS</span>
        <h2>Factura con IVA y descuento</h2>
        <p>
          Calcula el importe de una compra, aplica el IVA del 15 %
          y determina si corresponde un descuento del 5 %.
        </p>
      </div>

      <div className="calculator-form">
        <div className="form-group">
          <label htmlFor="precio-ejercicio-11">
            Precio por artículo (RD$)
          </label>
          <input
            id="precio-ejercicio-11"
            type="number"
            min="0"
            step="0.01"
            placeholder="Ej. 30.00"
            value={precio}
            onChange={(e) => {
              setPrecio(e.target.value)
              setResultado(null)
              setError('')
            }}
          />
        </div>

        <div className="form-group">
          <label htmlFor="cantidad-ejercicio-11">
            Cantidad de artículos
          </label>
          <input
            id="cantidad-ejercicio-11"
            type="number"
            min="1"
            step="1"
            placeholder="Ej. 2"
            value={cantidad}
            onChange={(e) => {
              setCantidad(e.target.value)
              setResultado(null)
              setError('')
            }}
          />
        </div>
      </div>

      <div className="calculator-actions">
        <button className="hero-button" onClick={calcularFactura}>
          Generar factura →
        </button>

        <button className="clear-button" onClick={limpiar}>
          Limpiar
        </button>
      </div>

      {error && <p className="error-message">{error}</p>}

      {resultado && (
        <div className="salary-result">
          <span className="section-kicker">FACTURA GENERADA</span>

          <div className="total-salary">
            <span>Total a pagar</span>
            <strong>{formatoDinero(resultado.totalPagar)}</strong>
          </div>

          <div className="series-result">
            <h3>Detalle de la factura</h3>

            <p>
              Precio por artículo:{' '}
              <strong>{formatoDinero(resultado.precio)}</strong>
            </p>

            <p>
              Cantidad de artículos:{' '}
              <strong>{resultado.cantidad}</strong>
            </p>

            <p>
              Precio de venta:{' '}
              <strong>{formatoDinero(resultado.precioVenta)}</strong>
            </p>

            <p>
              IVA (15 %):{' '}
              <strong>{formatoDinero(resultado.iva)}</strong>
            </p>

            <p>
              Precio bruto:{' '}
              <strong>{formatoDinero(resultado.precioBruto)}</strong>
            </p>

            <p>
              Descuento (5 %):{' '}
              <strong>{formatoDinero(resultado.descuento)}</strong>
            </p>

            <p>
              Total a pagar:{' '}
              <strong>{formatoDinero(resultado.totalPagar)}</strong>
            </p>

            <p>
              {resultado.descuento > 0
                ? 'Se aplicó el descuento del 5 %.'
                : 'No corresponde aplicar el descuento.'}
            </p>
          </div>
        </div>
      )}
    </div>
  )
}

export default Ejercicio11