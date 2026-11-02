import { useState } from 'react'

function Ejercicio15() {
  const [resultado, setResultado] = useState(null)

  const calcular = () => {
    let suma = 0
    let producto = 1n
    let cantidad = 0

    for (let numero = 20; numero <= 400; numero += 2) {
      suma += numero
      producto *= BigInt(numero)
      cantidad++
    }

    setResultado({
      suma,
      producto: producto.toString(),
      cantidad,
    })
  }

  const limpiar = () => {
    setResultado(null)
  }

  return (
    <div className="calculator-panel">
      <div className="calculator-heading">
        <span className="section-kicker">OPERACIONES MATEMÁTICAS</span>

        <h2>Suma y producto de números pares</h2>

        <p>
          Calcula la suma y el producto de los números pares
          comprendidos entre 20 y 400, ambos inclusive.
        </p>
      </div>

      <div className="calculator-form">
        <div className="form-group">
          <label>Rango de números</label>
          <p>
            Desde <strong>20</strong> hasta <strong>400</strong>,
            avanzando de 2 en 2.
          </p>
        </div>
      </div>

      <div className="calculator-actions">
        <button className="hero-button" onClick={calcular}>
          Calcular resultados →
        </button>

        <button className="clear-button" onClick={limpiar}>
          Limpiar
        </button>
      </div>

      {resultado && (
        <div className="salary-result">
          <span className="section-kicker">RESULTADO DEL CÁLCULO</span>

          <div className="total-salary">
            <span>Suma total</span>
            <strong>{resultado.suma.toLocaleString('es-DO')}</strong>
          </div>

          <div className="series-result">
            <h3>Detalle de la operación</h3>

            <p>
              Cantidad de números pares:{' '}
              <strong>{resultado.cantidad}</strong>
            </p>

            <p>
              Rango utilizado: <strong>20 a 400</strong>
            </p>

            <p>
              Suma total:{' '}
              <strong>{resultado.suma.toLocaleString('es-DO')}</strong>
            </p>

            <details style={{ marginTop: '16px' }}>
              <summary style={{ cursor: 'pointer', fontWeight: '600' }}>
                Ver producto completo
              </summary>

              <p
                style={{
                  marginTop: '12px',
                  overflowWrap: 'anywhere',
                  wordBreak: 'break-word',
                  lineHeight: '1.6',
                  fontSize: '13px',
                }}
              >
                {resultado.producto}
              </p>
            </details>
          </div>
        </div>
      )}

      <p style={{ marginTop: '20px', fontSize: '13px' }}>
        Nota: se utiliza el rango de 20 a 400 indicado en el enunciado,
        aunque el código C# proporcionado termina en 30.
      </p>
    </div>
  )
}

export default Ejercicio15