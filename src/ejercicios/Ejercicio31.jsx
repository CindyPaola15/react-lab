import { useState } from 'react'

function Ejercicio31() {
  const totalPersonas = 400

  const [deporte, setDeporte] = useState('')
  const [personas, setPersonas] = useState([])
  const [error, setError] = useState('')
  const [finalizado, setFinalizado] = useState(false)

  const cantidades = {
    futbol: personas.filter((item) => item === 'Fútbol').length,
    voley: personas.filter((item) => item === 'Vóley').length,
    basquet: personas.filter((item) => item === 'Básquet').length,
    ajedrez: personas.filter((item) => item === 'Ajedrez').length
  }

  const registrarDeporte = (e) => {
    e.preventDefault()

    if (!deporte) {
      setError('Selecciona un deporte antes de continuar.')
      return
    }

    if (personas.length >= totalPersonas) {
      setError('Ya se han registrado las 400 personas.')
      return
    }

    const nuevosRegistros = [...personas, deporte]
    setPersonas(nuevosRegistros)
    setDeporte('')
    setError('')

    if (nuevosRegistros.length === totalPersonas) {
      setFinalizado(true)
    }
  }

  const reiniciar = () => {
    setDeporte('')
    setPersonas([])
    setError('')
    setFinalizado(false)
  }

  const progreso = (personas.length / totalPersonas) * 100

  return (
    <div className="calculator-panel">
      <div className="calculator-heading">
        <span className="section-kicker">EJERCICIO 31</span>
        <h2>Clasificación de deportes</h2>
        <p>
          Registra el deporte que practica cada una de las 400 personas
          y consulta la cantidad correspondiente a cada disciplina.
        </p>
      </div>

      <form className="calculator-form" onSubmit={registrarDeporte}>
        <div className="form-group">
          <label htmlFor="deporte">Deporte que practica la persona</label>
          <select
            id="deporte"
            value={deporte}
            onChange={(e) => {
              setDeporte(e.target.value)
              setError('')
            }}
            disabled={finalizado}
          >
            <option value="">Selecciona un deporte</option>
            <option value="Fútbol">Fútbol</option>
            <option value="Vóley">Vóley</option>
            <option value="Básquet">Básquet</option>
            <option value="Ajedrez">Ajedrez</option>
          </select>
        </div>

        {error && <p className="error-message">{error}</p>}

        <div className="calculator-actions">
          <button
            type="submit"
            className="hero-button"
            disabled={finalizado}
          >
            Registrar persona
          </button>

          <button
            type="button"
            className="clear-button"
            onClick={reiniciar}
          >
            Reiniciar
          </button>
        </div>
      </form>

      <div className="salary-result">
        <span className="section-kicker">
          {finalizado ? 'RESULTADO FINAL' : 'PROGRESO DEL REGISTRO'}
        </span>

        <h3>
          {finalizado
            ? 'Clasificación completada'
            : 'Personas registradas'}
        </h3>

        <p className="total-salary">
          {personas.length} / {totalPersonas}
        </p>

        <div className="series-result">
          <p>
            <strong>Progreso:</strong> {progreso.toFixed(1)} %
          </p>
          <p>
            <strong>Fútbol:</strong> {cantidades.futbol}
          </p>
          <p>
            <strong>Vóley:</strong> {cantidades.voley}
          </p>
          <p>
            <strong>Básquet:</strong> {cantidades.basquet}
          </p>
          <p>
            <strong>Ajedrez:</strong> {cantidades.ajedrez}
          </p>
          <p>
            <strong>Pendientes:</strong> {totalPersonas - personas.length}
          </p>
        </div>

        {finalizado && (
          <p>
            Las 400 personas han sido clasificadas correctamente.
          </p>
        )}
      </div>
    </div>
  )
}

export default Ejercicio31