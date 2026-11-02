import { useState } from 'react'

function Ejercicio32() {
  const claves = ['TIENES', 'QUE SER', 'INVITADO', 'PARA', 'INGRESAR']

  const [clave, setClave] = useState('')
  const [indice, setIndice] = useState(0)
  const [resultado, setResultado] = useState('')
  const [error, setError] = useState('')

  const verificarClave = (e) => {
    e.preventDefault()

    if (!clave.trim()) {
      setError('Debes ingresar la clave correspondiente.')
      return
    }

    const claveIngresada = clave.trim().toUpperCase()

    if (claveIngresada !== claves[indice]) {
      setResultado('incorrecto')
      setError('')
      return
    }

    setError('')
    setClave('')

    if (indice === claves.length - 1) {
      setResultado('correcto')
    } else {
      setIndice(indice + 1)
    }
  }

  const reiniciar = () => {
    setClave('')
    setIndice(0)
    setResultado('')
    setError('')
  }

  return (
    <div className="calculator-panel">
      <div className="calculator-heading">
        <span className="section-kicker">EJERCICIO 32</span>
        <h2>Control de acceso a la fiesta</h2>
        <p>
          Ingresa las cinco claves en el orden indicado para comprobar
          si puedes acceder a la fiesta de Braulio.
        </p>
      </div>

      {!resultado ? (
        <form className="calculator-form" onSubmit={verificarClave}>
          <div className="form-group">
            <label htmlFor="clave">
              Ingresa la {indice + 1}ª clave
            </label>

            <input
              id="clave"
              type="text"
              value={clave}
              onChange={(e) => {
                setClave(e.target.value)
                setError('')
              }}
              placeholder="Escribe la clave..."
              autoComplete="off"
            />
          </div>

          {error && <p className="error-message">{error}</p>}

          <div className="calculator-actions">
            <button type="submit" className="hero-button">
              Verificar clave
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
      ) : (
        <div className="calculator-actions">
          <button
            type="button"
            className="clear-button"
            onClick={reiniciar}
          >
            Intentar nuevamente
          </button>
        </div>
      )}

      <div className="salary-result">
        <span className="section-kicker">
          {resultado ? 'RESULTADO DE LA VERIFICACIÓN' : 'CONTROL DE SEGURIDAD'}
        </span>

        <h3>
          {resultado === 'correcto'
            ? 'BIENVENIDO A LA FIESTA'
            : resultado === 'incorrecto'
              ? 'TE EQUIVOCASTE DE FIESTA'
              : 'Verificación de claves'}
        </h3>

        {!resultado && (
          <div className="series-result">
            <p>
              <strong>Claves verificadas:</strong> {indice} de 5
            </p>
            <p>
              <strong>Claves pendientes:</strong> {5 - indice}
            </p>
            <p>
              <strong>Estado:</strong> Esperando clave
            </p>
          </div>
        )}

        {resultado === 'correcto' && (
          <p>
            Las cinco claves son correctas. El acceso está permitido.
          </p>
        )}

        {resultado === 'incorrecto' && (
          <p>
            Una de las claves ingresadas es incorrecta. El acceso ha sido denegado.
          </p>
        )}
      </div>
    </div>
  )
}

export default Ejercicio32