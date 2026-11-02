import { useState } from 'react'

function Ejercicio29() {
  const [egreso, setEgreso] = useState('')
  const [egresos, setEgresos] = useState([])
  const [resultado, setResultado] = useState(null)
  const [error, setError] = useState('')

  const formatoMoneda = (cantidad) =>
    cantidad.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })

  const registrarEgreso = (e) => {
    e.preventDefault()
    setError('')

    if (egreso.trim() === '') {
      setError('Debes ingresar un egreso.')
      return
    }

    const cantidad = Number(egreso)

    if (!Number.isFinite(cantidad)) {
      setError('Ingresa un valor numérico válido.')
      return
    }

    if (cantidad === -1) {
      const totalEgresos = egresos.reduce(
        (total, valor) => total + valor,
        0
      )

      setResultado({
        cantidad: egresos.length,
        totalEgresos: Number(totalEgresos.toFixed(2)),
        restante: Number((3.71 - totalEgresos).toFixed(2)),
        egresos,
      })

      setEgreso('')
      return
    }

    if (cantidad < 0) {
      setError(
        'El egreso debe ser positivo o igual a cero. Usa -1 para finalizar.'
      )
      return
    }

    setEgresos((anteriores) => [...anteriores, cantidad])
    setEgreso('')
  }

  const limpiar = () => {
    setEgreso('')
    setEgresos([])
    setResultado(null)
    setError('')
  }

  const listaEgresos = resultado ? resultado.egresos : egresos

  return (
    <section className="calculator-panel">
      <div className="calculator-heading">
        <span className="section-kicker">
          FINANZAS · CONTROL DE CAJA
        </span>

        <h2>Control de egresos de la compañía</h2>

        <p>
          Registra los egresos de la compañía Barner y calcula
          cuánto dinero queda en caja, partiendo de $3.71.
        </p>
      </div>

      <form className="calculator-form" onSubmit={registrarEgreso}>
        <div className="form-group">
          <label htmlFor="egreso29">Egreso de la compañía</label>

          <input
            id="egreso29"
            type="number"
            step="any"
            placeholder="Ejemplo: 0.50 o -1 para finalizar"
            value={egreso}
            onChange={(e) => setEgreso(e.target.value)}
            disabled={Boolean(resultado)}
          />

          <small>
            Introduce cada egreso. Escribe -1 para finalizar el registro.
          </small>
        </div>

        {error && (
          <p className="error-message" role="alert">
            {error}
          </p>
        )}

        <div className="calculator-actions">
          <button
            type="submit"
            className="hero-button"
            disabled={Boolean(resultado)}
          >
            Registrar egreso
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

      <div className="series-result">
        <p>
          <strong>Dinero inicial en caja:</strong>{' '}
          {formatoMoneda(3.71)}
        </p>

        <p>
          <strong>Egresos registrados:</strong>{' '}
          {listaEgresos.length}
        </p>

        {listaEgresos.map((valor, indice) => (
          <p key={indice}>
            <strong>{indice + 1}.° egreso:</strong>{' '}
            {formatoMoneda(valor)}
          </p>
        ))}

        <p>
          <strong>Total acumulado:</strong>{' '}
          {formatoMoneda(
            listaEgresos.reduce((total, valor) => total + valor, 0)
          )}
        </p>
      </div>

      {resultado && (
        <div className="salary-result">
          <span className="section-kicker">
            RESULTADO DEL CÁLCULO
          </span>

          <h3>Resumen de los egresos:</h3>

          <p className="total-salary">
            Caja restante: {formatoMoneda(resultado.restante)}
          </p>

          <div className="series-result">
            <p>
              Total de egresos:{' '}
              <strong>{formatoMoneda(resultado.totalEgresos)}</strong>
            </p>

            <p>
              Dinero inicial:{' '}
              <strong>{formatoMoneda(3.71)}</strong>
            </p>

            <p>
              Egresos registrados:{' '}
              <strong>{resultado.cantidad}</strong>
            </p>
          </div>
        </div>
      )}
    </section>
  )
}

export default Ejercicio29