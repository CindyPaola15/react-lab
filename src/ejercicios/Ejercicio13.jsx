import { useState } from 'react'

function Ejercicio13() {
  const [numero, setNumero] = useState('')
  const [resultado, setResultado] = useState(null)
  const [error, setError] = useState('')

  const calcularFactorial = () => {
    setError('')
    setResultado(null)

    if (numero.trim() === '') {
      setError('Introduce un número entero.')
      return
    }

    const valor = Number(numero)

    if (!Number.isSafeInteger(valor) || valor < 0) {
      setError('Introduce un número entero no negativo.')
      return
    }

    if (valor > 170) {
      setError('Introduce un número entre 0 y 170 para evitar resultados fuera del rango numérico.')
      return
    }

    let factorial = 1
    const operaciones = []

    for (let i = 1; i <= valor; i++) {
      factorial *= i
      operaciones.push(i)
    }

    setResultado({
      numero: valor,
      factorial,
      operaciones,
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
        <span className="section-kicker">OPERACIONES MATEMÁTICAS</span>
        <h2>Cálculo del factorial</h2>
        <p>
          Introduce un número entero no negativo para calcular
          su factorial mediante una secuencia de multiplicaciones.
        </p>
      </div>

      <div className="calculator-form">
        <div className="form-group">
          <label htmlFor="numero-ejercicio-13">
            Número entero
          </label>
          <input
            id="numero-ejercicio-13"
            type="number"
            min="0"
            max="170"
            step="1"
            placeholder="Ej. 5"
            value={numero}
            onChange={(e) => {
              setNumero(e.target.value)
              setResultado(null)
              setError('')
            }}
            onKeyDown={(e) => {
              if (e.key === 'Enter') calcularFactorial()
            }}
          />
        </div>
      </div>

      <div className="calculator-actions">
        <button className="hero-button" onClick={calcularFactorial}>
          Calcular factorial →
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
            <span>Factorial de {resultado.numero}</span>
            <strong>{resultado.factorial.toLocaleString('es-DO')}</strong>
          </div>

          <div className="series-result">
            <h3>Desarrollo de la operación</h3>

            <p>
              Número ingresado: <strong>{resultado.numero}</strong>
            </p>

            <p>
              Operación:{' '}
              <strong>
                {resultado.numero === 0
                  ? '0! = 1'
                  : `${resultado.numero}! = ${resultado.operaciones.slice().reverse().join(' × ')}`}
              </strong>
            </p>

            <p>
              Resultado:{' '}
              <strong>{resultado.factorial.toLocaleString('es-DO')}</strong>
            </p>
          </div>
        </div>
      )}
    </div>
  )
}

export default Ejercicio13