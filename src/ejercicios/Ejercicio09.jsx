import { useState } from 'react'

function Ejercicio09() {
  const [nota, setNota] = useState('')
  const [notas, setNotas] = useState([])
  const [resultado, setResultado] = useState(null)
  const [error, setError] = useState('')

  const agregarNota = () => {
    setError('')
    setResultado(null)

    if (nota.trim() === '') {
      setError('Introduce una nota antes de agregarla.')
      return
    }

    const valor = Number(nota)

    if (!Number.isInteger(valor) || valor < 0 || valor > 20) {
      setError('La nota debe ser un número entero entre 0 y 20.')
      return
    }

    setNotas((actuales) => [...actuales, valor])
    setNota('')
  }

  const calcularResultados = () => {
    setError('')

    if (notas.length === 0) {
      setError('Debes ingresar al menos una nota.')
      return
    }

    const desaprobadas = notas.filter((valor) => valor <= 10.5)
    const aprobadas = notas.filter((valor) => valor > 10.5)

    const sumaTotal = notas.reduce((total, valor) => total + valor, 0)
    const sumaAprobadas = aprobadas.reduce((total, valor) => total + valor, 0)
    const sumaDesaprobadas = desaprobadas.reduce((total, valor) => total + valor, 0)

    const promedio = sumaTotal / notas.length
    const promedioAprobadas =
      aprobadas.length > 0 ? sumaAprobadas / aprobadas.length : null
    const promedioDesaprobadas =
      desaprobadas.length > 0 ? sumaDesaprobadas / desaprobadas.length : null

    setResultado({
      cantidadAprobadas: aprobadas.length,
      cantidadDesaprobadas: desaprobadas.length,
      promedio: Number(promedio.toFixed(1)),
      promedioAprobadas:
        promedioAprobadas === null ? null : Number(promedioAprobadas.toFixed(1)),
      promedioDesaprobadas:
        promedioDesaprobadas === null
          ? null
          : Number(promedioDesaprobadas.toFixed(1)),
    })
  }

  const limpiar = () => {
    setNota('')
    setNotas([])
    setResultado(null)
    setError('')
  }

  return (
    <div className="calculator-panel">
      <div className="calculator-heading">
        <span className="section-kicker">EVALUACIÓN ACADÉMICA</span>
        <h2>Conteo y promedio de notas</h2>
        <p>
          Registra las calificaciones de un estudiante para identificar
          las aprobadas, las desaprobadas y calcular sus promedios.
        </p>
      </div>

      <div className="calculator-form">
        <div className="form-group">
          <label htmlFor="nota-ejercicio-09">Introduce una nota (0 a 20)</label>
          <input
            id="nota-ejercicio-09"
            type="number"
            min="0"
            max="20"
            step="1"
            placeholder="Ej. 15"
            value={nota}
            onChange={(e) => {
              setNota(e.target.value)
              setError('')
              setResultado(null)
            }}
            onKeyDown={(e) => {
              if (e.key === 'Enter') agregarNota()
            }}
          />
        </div>
      </div>

      <div className="calculator-actions">
        <button className="hero-button" onClick={agregarNota}>
          Agregar nota +
        </button>

        <button
          className="clear-button"
          onClick={calcularResultados}
          disabled={notas.length === 0}
        >
          Calcular resultados →
        </button>

        <button className="clear-button" onClick={limpiar}>
          Limpiar
        </button>
      </div>

      {error && <p className="error-message">{error}</p>}

      {notas.length > 0 && (
        <div className="series-result">
          <h3>Notas registradas</h3>
          <p>Total de notas: <strong>{notas.length}</strong></p>

          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '10px',
            marginTop: '14px',
          }}>
            {notas.map((valor, indice) => (
              <span
                key={indice}
                style={{
                  padding: '9px 14px',
                  borderRadius: '8px',
                  background: valor > 10.5
                    ? 'rgba(34, 160, 100, 0.12)'
                    : 'rgba(220, 80, 80, 0.12)',
                  fontWeight: '600',
                }}
              >
                {valor}
              </span>
            ))}
          </div>
        </div>
      )}

      {resultado && (
        <div className="salary-result">
          <span className="section-kicker">RESULTADO DEL ANÁLISIS</span>

          <div className="stats-grid">
            <div className="stat-card">
              <div>
                <strong>{resultado.cantidadDesaprobadas}</strong>
                <span>Desaprobadas</span>
              </div>
            </div>

            <div className="stat-card">
              <div>
                <strong>{resultado.cantidadAprobadas}</strong>
                <span>Aprobadas</span>
              </div>
            </div>
          </div>

          <div className="series-result">
            <h3>Promedios obtenidos</h3>

            <p>
              Promedio general:{' '}
              <strong>{resultado.promedio.toFixed(1)}</strong>
            </p>

            <p>
              Promedio de aprobadas:{' '}
              <strong>
                {resultado.promedioAprobadas === null
                  ? 'No hay notas aprobadas'
                  : resultado.promedioAprobadas.toFixed(1)}
              </strong>
            </p>

            <p>
              Promedio de desaprobadas:{' '}
              <strong>
                {resultado.promedioDesaprobadas === null
                  ? 'No hay notas desaprobadas'
                  : resultado.promedioDesaprobadas.toFixed(1)}
              </strong>
            </p>
          </div>
        </div>
      )}
    </div>
  )
}

export default Ejercicio09