import { useState } from 'react'

function Ejercicio07() {
  const [cantidad, setCantidad] = useState('')
  const [trabajadores, setTrabajadores] = useState([])
  const [resultado, setResultado] = useState(null)
  const [error, setError] = useState('')

  const prepararTrabajadores = () => {
    setError('')
    setResultado(null)
    setTrabajadores([])

    if (cantidad.trim() === '') {
      setError('Introduce la cantidad de trabajadores.')
      return
    }

    const numero = Number(cantidad)

    if (!Number.isSafeInteger(numero) || numero < 1) {
      setError('Introduce una cantidad entera mayor que cero.')
      return
    }

    if (numero > 100) {
      setError('El máximo permitido es de 100 trabajadores.')
      return
    }

    setTrabajadores(
      Array.from({ length: numero }, () => ({
        horas: '',
        tarifa: '',
      }))
    )
  }

  const actualizarTrabajador = (indice, campo, valor) => {
    setTrabajadores((actuales) =>
      actuales.map((trabajador, i) =>
        i === indice
          ? { ...trabajador, [campo]: valor }
          : trabajador
      )
    )
  }

  const calcularSuma = () => {
    setError('')
    setResultado(null)

    for (let i = 0; i < trabajadores.length; i++) {
      const { horas, tarifa } = trabajadores[i]

      if (horas.trim() === '' || tarifa.trim() === '') {
        setError(`Completa las horas y la tarifa del trabajador ${i + 1}.`)
        return
      }

      if (
        !Number.isFinite(Number(horas)) ||
        !Number.isFinite(Number(tarifa)) ||
        Number(horas) < 0 ||
        Number(tarifa) < 0
      ) {
        setError(`Los datos del trabajador ${i + 1} deben ser números válidos y no negativos.`)
        return
      }
    }

    let suma = 0

    const detalle = trabajadores.map((trabajador, i) => {
      const salario = Number(trabajador.horas) * Number(trabajador.tarifa)

      suma += salario

      return {
        numero: i + 1,
        horas: Number(trabajador.horas),
        tarifa: Number(trabajador.tarifa),
        salario,
      }
    })

    setResultado({ suma, detalle })
  }

  const limpiar = () => {
    setCantidad('')
    setTrabajadores([])
    setResultado(null)
    setError('')
  }

  const formatoDinero = (valor) =>
    valor.toLocaleString('es-DO', {
      style: 'currency',
      currency: 'DOP',
      minimumFractionDigits: 2,
    })

  return (
    <div className="calculator-panel">
      <div className="calculator-heading">
        <span className="section-kicker">CÁLCULO DE NÓMINA</span>
        <h2>Suma de los salarios de los trabajadores</h2>
        <p>
          Introduce la cantidad de trabajadores, sus horas trabajadas
          y la tarifa por hora para calcular la suma de todos sus salarios.
        </p>
      </div>

      <div className="calculator-form">
        <div className="form-group">
          <label htmlFor="cantidad-trabajadores">
            Cantidad de trabajadores
          </label>
          <input
            id="cantidad-trabajadores"
            type="number"
            min="1"
            max="100"
            step="1"
            placeholder="Ej. 3"
            value={cantidad}
            onChange={(e) => {
              setCantidad(e.target.value)
              setTrabajadores([])
              setResultado(null)
              setError('')
            }}
          />
        </div>

        <div className="calculator-actions">
          <button className="hero-button" onClick={prepararTrabajadores}>
            Preparar trabajadores →
          </button>

          <button className="clear-button" onClick={limpiar}>
            Limpiar
          </button>
        </div>
      </div>

      {trabajadores.length > 0 && (
        <div className="workers-list">
          <h3>Datos de los trabajadores</h3>

          {trabajadores.map((trabajador, indice) => (
            <div
              className="worker-card"
              key={indice}
              style={{
                padding: '16px',
                marginTop: '14px',
                borderRadius: '10px',
                border: '1px solid rgba(120, 140, 170, 0.25)',
              }}
            >
              <h4>Trabajador {indice + 1}</h4>

              <div className="calculator-form">
                <div className="form-group">
                  <label htmlFor={`horas-${indice}`}>
                    Horas trabajadas
                  </label>
                  <input
                    id={`horas-${indice}`}
                    type="number"
                    min="0"
                    step="any"
                    placeholder="Ej. 40"
                    value={trabajador.horas}
                    onChange={(e) =>
                      actualizarTrabajador(indice, 'horas', e.target.value)
                    }
                  />
                </div>

                <div className="form-group">
                  <label htmlFor={`tarifa-${indice}`}>
                    Tarifa por hora (RD$)
                  </label>
                  <input
                    id={`tarifa-${indice}`}
                    type="number"
                    min="0"
                    step="any"
                    placeholder="Ej. 150"
                    value={trabajador.tarifa}
                    onChange={(e) =>
                      actualizarTrabajador(indice, 'tarifa', e.target.value)
                    }
                  />
                </div>
              </div>
            </div>
          ))}

          <div className="calculator-actions">
            <button className="hero-button" onClick={calcularSuma}>
              Calcular suma de salarios →
            </button>
          </div>
        </div>
      )}

      {error && <p className="error-message">{error}</p>}

      {resultado && (
        <div className="salary-result">
          <span className="section-kicker">RESULTADO DEL CÁLCULO</span>

          <div className="total-salary">
            <span>Suma total de los salarios</span>
            <strong>{formatoDinero(resultado.suma)}</strong>
          </div>

          <div className="series-result">
            <h3>Detalle de los salarios</h3>

            {resultado.detalle.map((trabajador) => (
              <div
                key={trabajador.numero}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  flexWrap: 'wrap',
                  gap: '10px',
                  padding: '12px',
                  marginTop: '10px',
                  borderRadius: '8px',
                  background: 'rgba(100, 140, 200, 0.08)',
                }}
              >
                <div>
                  <strong>Trabajador {trabajador.numero}</strong>
                  <p style={{ margin: '5px 0 0' }}>
                    {trabajador.horas} horas × {formatoDinero(trabajador.tarifa)}
                  </p>
                </div>

                <strong>{formatoDinero(trabajador.salario)}</strong>
              </div>
            ))}

            <p style={{ marginTop: '18px' }}>
              La suma de los salarios de los {resultado.detalle.length}{' '}
              trabajadores es <strong>{formatoDinero(resultado.suma)}</strong>.
            </p>
          </div>
        </div>
      )}
    </div>
  )
}

export default Ejercicio07