import { useState } from 'react'

function Ejercicio28() {
  const [numero, setNumero] = useState('')
  const [resultado, setResultado] = useState(null)
  const [error, setError] = useState('')

  const calcular = (e) => {
    e.preventDefault()
    setError('')
    setResultado(null)

    if (numero.trim() === '') {
      setError('Debes ingresar un número entero.')
      return
    }

    const limite = Number(numero)

    if (!Number.isSafeInteger(limite)) {
      setError('Ingresa un número entero válido.')
      return
    }

    if (limite < 8) {
      setError('Error: el número ingresado es menor a 8.')
      return
    }

    let suma = 0
    const serie = []

    for (let x = 8; x <= limite; x++) {
      suma += x
      serie.push(x)
    }

    setResultado({
      limite,
      suma,
      cantidad: serie.length,
      serie,
    })
  }

  const limpiar = () => {
    setNumero('')
    setResultado(null)
    setError('')
  }

  return (
    <section className="calculator-panel">
      <div className="calculator-heading">
        <span className="section-kicker">MATEMÁTICAS · SUMA DE ENTEROS</span>
        <h2>Suma de números enteros desde 8</h2>
        <p>
          Calcula la suma de los números enteros consecutivos
          desde el 8 hasta el número que introduzcas.
        </p>
      </div>

      <form className="calculator-form" onSubmit={calcular}>
        <div className="form-group">
          <label htmlFor="numero28">Número final de la serie</label>
          <input
            id="numero28"
            type="number"
            step="1"
            placeholder="Ejemplo: 12"
            value={numero}
            onChange={(e) => setNumero(e.target.value)}
          />
          <small>
            El número debe ser un entero igual o mayor que 8.
          </small>
        </div>

        {error && (
          <p className="error-message" role="alert">
            {error}
          </p>
        )}

        <div className="calculator-actions">
          <button type="submit" className="hero-button">
            Calcular suma
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
          <span className="section-kicker">RESULTADO DEL CÁLCULO</span>
          <h3>La suma de la serie es:</h3>

          <p className="total-salary">
            {resultado.suma.toLocaleString('es-DO')}
          </p>

          <div className="series-result">
            <p>
              Número inicial: <strong>8</strong>
            </p>
            <p>
              Número final: <strong>{resultado.limite}</strong>
            </p>
            <p>
              Cantidad de números: <strong>{resultado.cantidad}</strong>
            </p>
            <p>
              Serie: <strong>{resultado.serie.join(' + ')}</strong>
            </p>
          </div>
        </div>
      )}
    </section>
  )
}

export default Ejercicio28