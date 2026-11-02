import { useState } from 'react'

function Ejercicio06() {
  const [numero, setNumero] = useState('')
  const [resultado, setResultado] = useState(null)
  const [error, setError] = useState('')

  const calcularSuma = () => {
    setError('')
    setResultado(null)

    if (numero.trim() === '') {
      setError('Introduce el número N para calcular la suma.')
      return
    }

    const n = Number(numero)

    if (!Number.isSafeInteger(n) || n < 1) {
      setError('Introduce un número natural entero mayor que cero.')
      return
    }

    if (n > 10000) {
      setError('Introduce un número máximo de 10,000.')
      return
    }

    let suma = 0
    const serie = []

    for (let x = 1; x <= n; x++) {
      suma += x

      serie.push({
        numero: x,
        valor: x,
        sumaAcumulada: suma,
      })
    }

    setResultado({
      numero: n,
      suma,
      serie,
    })
  }

  const limpiar = () => {
    setNumero('')
    setResultado(null)
    setError('')
  }

  return (
    <div className="calculator-panel">
      <div className="calculator-heading">
        <span className="section-kicker">SERIES NUMÉRICAS</span>
        <h2>Suma de los primeros N números naturales</h2>
        <p>
          Introduce un número natural para generar la serie y calcular
          la suma de todos los valores desde 1 hasta N.
        </p>
      </div>

      <div className="calculator-form">
        <div className="form-group">
          <label htmlFor="numero-natural">Número N</label>
          <input
            id="numero-natural"
            type="number"
            min="1"
            max="10000"
            step="1"
            placeholder="Ej. 5"
            value={numero}
            onChange={(e) => setNumero(e.target.value)}
          />
        </div>

        {error && <p className="error-message">{error}</p>}

        <div className="calculator-actions">
          <button className="hero-button" onClick={calcularSuma}>
            Calcular suma →
          </button>

          <button className="clear-button" onClick={limpiar}>
            Limpiar
          </button>
        </div>
      </div>

      {resultado && (
        <div className="salary-result">
          <span className="section-kicker">RESULTADO DEL CÁLCULO</span>

          <div className="total-salary">
            <span>Suma total de la serie</span>
            <strong>{resultado.suma.toLocaleString('es-DO')}</strong>
          </div>

          <div className="result-details">
            <div>
              <span>Valor de N</span>
              <strong>{resultado.numero}</strong>
            </div>

            <div>
              <span>Cantidad de números</span>
              <strong>{resultado.serie.length}</strong>
            </div>
          </div>

          <div className="series-result">
            <h3>Desarrollo de la serie</h3>

            <div
              className="series-list"
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
                marginTop: '15px',
              }}
            >
              {resultado.serie.map((item) => (
                <div
                  className="series-item"
                  key={item.numero}
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: '12px',
                    flexWrap: 'wrap',
                    padding: '10px 14px',
                    borderRadius: '8px',
                    background: 'rgba(100, 140, 200, 0.08)',
                  }}
                >
                  <span>
                    <strong>n{item.numero}</strong>: {item.valor}
                  </span>

                  <span>
                    Suma acumulada: <strong>{item.sumaAcumulada}</strong>
                  </span>
                </div>
              ))}
            </div>

            <p style={{ marginTop: '18px' }}>
              La suma de los primeros {resultado.numero} números naturales es{' '}
              <strong>{resultado.suma.toLocaleString('es-DO')}</strong>.
            </p>
          </div>
        </div>
      )}
    </div>
  )
}

export default Ejercicio06