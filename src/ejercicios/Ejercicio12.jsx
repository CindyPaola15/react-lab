import { useState } from 'react'

function Ejercicio12() {
  const [entrada, setEntrada] = useState('')
  const [resultado, setResultado] = useState(null)
  const [error, setError] = useState('')

  const calcularResultados = () => {
    setError('')
    setResultado(null)

    if (entrada.trim() === '') {
      setError('Introduce los 50 números para realizar el análisis.')
      return
    }

    const valores = entrada
      .trim()
      .split(/[\s,;]+/)
      .filter(Boolean)

    if (valores.length !== 50) {
      setError(`Debes introducir exactamente 50 números. Has introducido ${valores.length}.`)
      return
    }

    const numeros = valores.map(Number)

    if (!numeros.every((valor) => Number.isSafeInteger(valor))) {
      setError('Todos los valores deben ser números enteros válidos.')
      return
    }

    const pares = numeros.filter((valor) => valor % 2 === 0)
    const impares = numeros.filter((valor) => valor % 2 !== 0)
    const positivos = numeros.filter((valor) => valor > 0)
    const negativos = numeros.filter((valor) => valor < 0)
    const ceros = numeros.filter((valor) => valor === 0)

    setResultado({
      pares: pares.length,
      impares: impares.length,
      positivos: positivos.length,
      negativos: negativos.length,
      ceros: ceros.length,
      numeros,
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
        <span className="section-kicker">ANÁLISIS DE NÚMEROS</span>
        <h2>Clasificación de 50 números</h2>
        <p>
          Introduce 50 números enteros separados por espacios,
          comas o saltos de línea. Después, calcula su clasificación.
        </p>
      </div>

      <div className="calculator-form">
        <div className="form-group">
          <label htmlFor="numeros-ejercicio-12">
            Introduce los 50 números
          </label>

          <textarea
            id="numeros-ejercicio-12"
            rows="6"
            placeholder="Ejemplo: 12, -5, 8, 3, -10..."
            value={entrada}
            onChange={(e) => {
              setEntrada(e.target.value)
              setResultado(null)
              setError('')
            }}
          />

          <p style={{ marginTop: '8px', fontSize: '13px' }}>
            Separa cada número con una coma, un espacio o un salto de línea.
          </p>
        </div>
      </div>

      <div className="calculator-actions">
        <button className="hero-button" onClick={calcularResultados}>
          Clasificar números →
        </button>

        <button className="clear-button" onClick={limpiar}>
          Limpiar
        </button>
      </div>

      {error && <p className="error-message">{error}</p>}

      {resultado && (
        <div className="salary-result">
          <span className="section-kicker">RESULTADO DEL ANÁLISIS</span>

          <div className="stats-grid">
            <div className="stat-card">
              <div>
                <strong>{resultado.pares}</strong>
                <span>Números pares</span>
              </div>
            </div>

            <div className="stat-card">
              <div>
                <strong>{resultado.impares}</strong>
                <span>Números impares</span>
              </div>
            </div>

            <div className="stat-card">
              <div>
                <strong>{resultado.positivos}</strong>
                <span>Números positivos</span>
              </div>
            </div>

            <div className="stat-card">
              <div>
                <strong>{resultado.negativos}</strong>
                <span>Números negativos</span>
              </div>
            </div>
          </div>

          <div className="series-result">
            <h3>Resumen del análisis</h3>

            <p>
              Total de números analizados:{' '}
              <strong>{resultado.numeros.length}</strong>
            </p>

            <p>
              Pares + impares:{' '}
              <strong>{resultado.pares + resultado.impares}</strong>
            </p>

            <p>
              Positivos + negativos:{' '}
              <strong>
                {resultado.positivos + resultado.negativos}
              </strong>
            </p>

            <p>
              Números iguales a cero:{' '}
              <strong>{resultado.ceros}</strong>
            </p>
          </div>
        </div>
      )}
    </div>
  )
}

export default Ejercicio12