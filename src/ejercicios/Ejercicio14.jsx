import { useState } from 'react'

function Ejercicio14() {
  const [entrada, setEntrada] = useState('')
  const [resultado, setResultado] = useState(null)
  const [error, setError] = useState('')

  const calcularMedia = () => {
    setError('')
    setResultado(null)

    if (entrada.trim() === '') {
      setError('Introduce los 100 números para calcular la media.')
      return
    }

    const valores = entrada
      .trim()
      .split(/[\s,;]+/)
      .filter(Boolean)

    if (valores.length !== 100) {
      setError(
        `Debes introducir exactamente 100 números. Has introducido ${valores.length}.`
      )
      return
    }

    const numeros = valores.map(Number)

    if (!numeros.every((numero) => Number.isFinite(numero))) {
      setError('Todos los valores deben ser números válidos.')
      return
    }

    const suma = numeros.reduce((total, numero) => total + numero, 0)
    const media = Number((suma / 100).toFixed(2))

    setResultado({
      suma,
      media,
      cantidad: numeros.length,
    })
  }

  const limpiar = () => {
    setEntrada('')
    setResultado(null)
    setError('')
  }

  return (
    <div className="calculator-panel">
      <div className="calculator-heading">
        <span className="section-kicker">ESTADÍSTICA DESCRIPTIVA</span>
        <h2>Media de 100 números</h2>
        <p>
          Introduce exactamente 100 números para calcular su suma
          y obtener la media aritmética redondeada a dos decimales.
        </p>
      </div>

      <div className="calculator-form">
        <div className="form-group">
          <label htmlFor="numeros-ejercicio-14">
            Introduce los 100 números
          </label>

          <textarea
            id="numeros-ejercicio-14"
            rows="8"
            placeholder="Ejemplo: 10, 20, 30, 40..."
            value={entrada}
            onChange={(e) => {
              setEntrada(e.target.value)
              setResultado(null)
              setError('')
            }}
          />

          <p style={{ marginTop: '8px', fontSize: '13px' }}>
            Separa los números con comas, espacios o saltos de línea.
          </p>
        </div>
      </div>

      <div className="calculator-actions">
        <button className="hero-button" onClick={calcularMedia}>
          Calcular media →
        </button>

        <button className="clear-button" onClick={limpiar}>
          Limpiar
        </button>
      </div>

      {error && <p className="error-message">{error}</p>}

      {resultado && (
        <div className="salary-result">
          <span className="section-kicker">RESULTADO DEL CÁLCULO</span>

          <div className="total-salary">
            <span>Media aritmética</span>
            <strong>{resultado.media.toFixed(2)}</strong>
          </div>

          <div className="series-result">
            <h3>Detalle de la operación</h3>

            <p>
              Cantidad de números:{' '}
              <strong>{resultado.cantidad}</strong>
            </p>

            <p>
              Suma total:{' '}
              <strong>
                {resultado.suma.toLocaleString('es-DO', {
                  maximumFractionDigits: 10,
                })}
              </strong>
            </p>

            <p>
              Operación: <strong>Suma total ÷ 100</strong>
            </p>

            <p>
              Media:{' '}
              <strong>{resultado.media.toFixed(2)}</strong>
            </p>
          </div>
        </div>
      )}
    </div>
  )
}

export default Ejercicio14