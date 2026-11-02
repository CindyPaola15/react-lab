import { useState } from 'react'

function Ejercicio30() {
  const [nota1, setNota1] = useState('')
  const [nota2, setNota2] = useState('')
  const [resultado, setResultado] = useState(null)
  const [error, setError] = useState('')

  const calcularPromedio = (e) => {
    e.preventDefault()
    setError('')
    setResultado(null)

    if (nota1.trim() === '' || nota2.trim() === '') {
      setError('Debes ingresar las dos notas.')
      return
    }

    const primeraNota = Number(nota1)
    const segundaNota = Number(nota2)

    if (
      !Number.isFinite(primeraNota) ||
      !Number.isFinite(segundaNota)
    ) {
      setError('Ingresa valores numéricos válidos.')
      return
    }

    if (
      primeraNota < 0 ||
      primeraNota > 20 ||
      segundaNota < 0 ||
      segundaNota > 20
    ) {
      setError(
        'Error: las notas deben encontrarse en la escala vigesimal (0-20).'
      )
      return
    }

    const promedio = (primeraNota + segundaNota) / 2

    setResultado({
      nota1: primeraNota,
      nota2: segundaNota,
      promedio,
      estado: promedio >= 10.5 ? 'Aprobado' : 'Desaprobado',
    })
  }

  const limpiar = () => {
    setNota1('')
    setNota2('')
    setResultado(null)
    setError('')
  }

  return (
    <section className="calculator-panel">
      <div className="calculator-heading">
        <span className="section-kicker">
          EDUCACIÓN · PROMEDIO ACADÉMICO
        </span>

        <h2>Promedio de dos notas</h2>

        <p>
          Ingresa las dos calificaciones para calcular el promedio
          y determinar si el estudiante está aprobado o desaprobado.
        </p>
      </div>

      <form className="calculator-form" onSubmit={calcularPromedio}>
        <div className="form-group">
          <label htmlFor="nota1">Primera nota</label>
          <input
            id="nota1"
            type="number"
            min="0"
            max="20"
            step="any"
            placeholder="Ej. 15"
            value={nota1}
            onChange={(e) => setNota1(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="nota2">Segunda nota</label>
          <input
            id="nota2"
            type="number"
            min="0"
            max="20"
            step="any"
            placeholder="Ej. 18"
            value={nota2}
            onChange={(e) => setNota2(e.target.value)}
          />
        </div>

        {error && (
          <p className="error-message" role="alert">
            {error}
          </p>
        )}

        <div className="calculator-actions">
          <button type="submit" className="hero-button">
            Calcular promedio
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
          <span className="section-kicker">
            RESULTADO DEL CÁLCULO
          </span>

          <h3>Estado académico:</h3>

          <p className="total-salary">
            {resultado.estado}
          </p>

          <div className="series-result">
            <p>
              Primera nota:{' '}
              <strong>{resultado.nota1}</strong>
            </p>

            <p>
              Segunda nota:{' '}
              <strong>{resultado.nota2}</strong>
            </p>

            <p>
              Promedio obtenido:{' '}
              <strong>{resultado.promedio.toFixed(2)}</strong>
            </p>

            <p>
              Calificación mínima para aprobar:{' '}
              <strong>10.50</strong>
            </p>
          </div>
        </div>
      )}
    </section>
  )
}

export default Ejercicio30