import { useState } from 'react'

function Ejercicio20() {
  const [coefA, setCoefA] = useState('')
  const [coefB, setCoefB] = useState('')
  const [coefC, setCoefC] = useState('')
  const [resultado, setResultado] = useState(null)
  const [error, setError] = useState('')

  const formatear = (numero, decimales = 4) => {
    const valor = Number(numero.toFixed(decimales))
    return valor.toString()
  }

  const calcularSoluciones = (e) => {
    e.preventDefault()
    setError('')
    setResultado(null)

    if (coefA.trim() === '' || coefB.trim() === '' || coefC.trim() === '') {
      setError('Completa los tres coeficientes para continuar.')
      return
    }

    const a = Number(coefA)
    const b = Number(coefB)
    const c = Number(coefC)

    if (![a, b, c].every(Number.isFinite)) {
      setError('Ingresa valores numéricos válidos.')
      return
    }

    if (a === 0) {
      setError("El coeficiente 'a' debe ser diferente de cero. De lo contrario, no es una ecuación cuadrática.")
      return
    }

    const discriminante = b ** 2 - 4 * a * c

    if (discriminante > 0) {
      const x1 = (-b + Math.sqrt(discriminante)) / (2 * a)
      const x2 = (-b - Math.sqrt(discriminante)) / (2 * a)

      setResultado({
        tipo: 'Dos soluciones reales diferentes',
        discriminante,
        soluciones: [
          { nombre: 'x₁', valor: formatear(x1) },
          { nombre: 'x₂', valor: formatear(x2) },
        ],
      })
    } else if (discriminante === 0) {
      const x = -b / (2 * a)

      setResultado({
        tipo: 'Una solución real doble',
        discriminante,
        soluciones: [
          { nombre: 'x', valor: formatear(x) },
        ],
      })
    } else {
      const parteReal = -b / (2 * a)
      const parteImaginaria = Math.sqrt(-discriminante) / (2 * a)

      const imaginariaPositiva = Math.abs(parteImaginaria)

      setResultado({
        tipo: 'Dos soluciones complejas conjugadas',
        discriminante,
        soluciones: [
          {
            nombre: 'x₁',
            valor: `${formatear(parteReal)} + ${formatear(imaginariaPositiva)}i`,
          },
          {
            nombre: 'x₂',
            valor: `${formatear(parteReal)} - ${formatear(imaginariaPositiva)}i`,
          },
        ],
      })
    }
  }

  const limpiar = () => {
    setCoefA('')
    setCoefB('')
    setCoefC('')
    setResultado(null)
    setError('')
  }

  return (
    <div className="calculator-panel">
      <div className="calculator-heading">
        <span className="section-kicker">ECUACIONES MATEMÁTICAS</span>

        <h2>Soluciones de la ecuación cuadrática</h2>

        <p>
          Ingresa los coeficientes de la ecuación ax² + bx + c = 0
          para calcular sus soluciones reales o imaginarias.
        </p>
      </div>

      <form className="calculator-form" onSubmit={calcularSoluciones}>
        <div className="form-group">
          <label htmlFor="coef-a">Coeficiente a</label>
          <input
            id="coef-a"
            type="number"
            step="any"
            placeholder="Ejemplo: 1"
            value={coefA}
            onChange={(e) => {
              setCoefA(e.target.value)
              setError('')
              setResultado(null)
            }}
          />
        </div>

        <div className="form-group">
          <label htmlFor="coef-b">Coeficiente b</label>
          <input
            id="coef-b"
            type="number"
            step="any"
            placeholder="Ejemplo: -3"
            value={coefB}
            onChange={(e) => {
              setCoefB(e.target.value)
              setError('')
              setResultado(null)
            }}
          />
        </div>

        <div className="form-group">
          <label htmlFor="coef-c">Coeficiente c</label>
          <input
            id="coef-c"
            type="number"
            step="any"
            placeholder="Ejemplo: 2"
            value={coefC}
            onChange={(e) => {
              setCoefC(e.target.value)
              setError('')
              setResultado(null)
            }}
          />
        </div>

        <div className="calculator-actions">
          <button className="hero-button" type="submit">
            Calcular soluciones →
          </button>

          <button className="clear-button" type="button" onClick={limpiar}>
            Limpiar
          </button>
        </div>
      </form>

      {error && <p className="error-message">{error}</p>}

      {resultado && (
        <div className="salary-result">
          <span className="section-kicker">RESULTADO DEL CÁLCULO</span>

          <div className="series-result">
            <p>
              Discriminante: <strong>{formatear(resultado.discriminante)}</strong>
            </p>

            <p>
              Tipo de solución: <strong>{resultado.tipo}</strong>
            </p>
          </div>

          <div className="total-salary">
            <span>Soluciones obtenidas</span>

            {resultado.soluciones.map((solucion) => (
              <p key={solucion.nombre}>
                <strong>
                  {solucion.nombre} = {solucion.valor}
                </strong>
              </p>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default Ejercicio20