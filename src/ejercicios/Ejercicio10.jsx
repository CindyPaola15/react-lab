import { useState } from 'react'

function Ejercicio10() {
  const [numero, setNumero] = useState('')
  const [resultado, setResultado] = useState(null)
  const [error, setError] = useState('')

  const calcularSuma = () => {
    setError('')
    setResultado(null)

    if (numero.trim() === '') {
      setError('Introduce un número entero.')
      return
    }

    const valor = Number(numero)

    if (!Number.isSafeInteger(valor)) {
      setError('Introduce un número entero válido.')
      return
    }

    let temporal = Math.abs(valor)
    let suma = 0
    const digitos = []

    do {
      const residuo = temporal % 10
      suma += residuo
      digitos.unshift(residuo)
      temporal = Math.floor(temporal / 10)
    } while (temporal !== 0)

    setResultado({
      numero: valor,
      digitos,
      suma,
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
        <h2>Suma de los dígitos de un número</h2>
        <p>
          Introduce un número entero para separar sus dígitos
          y calcular la suma de todos ellos.
        </p>
      </div>

      <div className="calculator-form">
        <div className="form-group">
          <label htmlFor="numero-ejercicio-10">
            Número entero
          </label>
          <input
            id="numero-ejercicio-10"
            type="number"
            step="1"
            placeholder="Ej. 253"
            value={numero}
            onChange={(e) => {
              setNumero(e.target.value)
              setResultado(null)
              setError('')
            }}
            onKeyDown={(e) => {
              if (e.key === 'Enter') calcularSuma()
            }}
          />
        </div>
      </div>

      <div className="calculator-actions">
        <button className="hero-button" onClick={calcularSuma}>
          Calcular suma →
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
            <span>Suma de los dígitos</span>
            <strong>{resultado.suma}</strong>
          </div>

          <div className="series-result">
            <h3>Descomposición del número</h3>

            <p>
              Número ingresado:{' '}
              <strong>{resultado.numero}</strong>
            </p>

            <p>
              Dígitos:{' '}
              <strong>{resultado.digitos.join(' + ')}</strong>
            </p>

            <p>
              Operación:{' '}
              <strong>
                {resultado.digitos.join(' + ')} = {resultado.suma}
              </strong>
            </p>
          </div>
        </div>
      )}
    </div>
  )
}

export default Ejercicio10