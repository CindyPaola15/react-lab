import { useState } from 'react'

function Ejercicio25() {
  const [catetoA, setCatetoA] = useState('')
  const [catetoB, setCatetoB] = useState('')
  const [resultado, setResultado] = useState(null)
  const [error, setError] = useState('')

  const calcularHipotenusa = (e) => {
    e.preventDefault()
    setError('')
    setResultado(null)

    if (catetoA.trim() === '' || catetoB.trim() === '') {
      setError('Debes ingresar los dos catetos.')
      return
    }

    const a = Number(catetoA)
    const b = Number(catetoB)

    if (!Number.isFinite(a) || !Number.isFinite(b)) {
      setError('Ingresa valores numéricos válidos.')
      return
    }

    if (a <= 0 || b <= 0) {
      setError('Los catetos deben ser mayores que cero.')
      return
    }

    const hipotenusa = Math.sqrt(a ** 2 + b ** 2)

    setResultado({
      catetoA: a,
      catetoB: b,
      hipotenusa: Number(hipotenusa.toFixed(2)),
    })
  }

  const limpiar = () => {
    setCatetoA('')
    setCatetoB('')
    setResultado(null)
    setError('')
  }

  return (
    <section className="calculator-panel">
      <div className="calculator-heading">
        <span className="section-kicker">GEOMETRÍA · TEOREMA DE PITÁGORAS</span>
        <h2>Cálculo de la hipotenusa</h2>
        <p>
          Ingresa las medidas de los dos catetos para obtener la longitud
          de la hipotenusa.
        </p>
      </div>

      <form className="calculator-form" onSubmit={calcularHipotenusa}>
        <div className="form-group">
          <label htmlFor="catetoA">Primer cateto (a)</label>
          <input
            id="catetoA"
            type="number"
            step="any"
            min="0"
            placeholder="Ej. 3"
            value={catetoA}
            onChange={(e) => setCatetoA(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="catetoB">Segundo cateto (b)</label>
          <input
            id="catetoB"
            type="number"
            step="any"
            min="0"
            placeholder="Ej. 4"
            value={catetoB}
            onChange={(e) => setCatetoB(e.target.value)}
          />
        </div>

        {error && (
          <p className="error-message" role="alert">
            {error}
          </p>
        )}

        <div className="calculator-actions">
          <button type="submit" className="hero-button">
            Calcular hipotenusa
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
          <h3>La hipotenusa es:</h3>

          <p className="total-salary">
            {resultado.hipotenusa.toFixed(2)} unidades
          </p>

          <div className="series-result">
            <p>Primer cateto: <strong>{resultado.catetoA}</strong></p>
            <p>Segundo cateto: <strong>{resultado.catetoB}</strong></p>
            <p>
              Hipotenusa:
              <strong> {resultado.hipotenusa.toFixed(2)}</strong>
            </p>
          </div>
        </div>
      )}
    </section>
  )
}

export default Ejercicio25