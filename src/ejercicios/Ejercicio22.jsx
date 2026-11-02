import { useState } from 'react';

function Ejercicio22() {
  const [numero, setNumero] = useState('');
  const [procesos, setProcesos] = useState([]);
  const [terminado, setTerminado] = useState(false);
  const [error, setError] = useState('');

  const calcular = (e) => {
    e.preventDefault();
    setError('');

    if (numero.trim() === '') {
      setError('Debes ingresar un número.');
      return;
    }

    const valor = Number(numero);

    if (!Number.isFinite(valor)) {
      setError('Ingresa un número válido.');
      return;
    }

    if (valor === 0) {
      setTerminado(true);
      setNumero('');
      return;
    }

    const nuevoProceso = {
      numero: procesos.length + 1,
      valor,
      cubo: Math.pow(valor, 3),
      raiz: valor >= 0
        ? Number(Math.sqrt(valor).toFixed(2))
        : null,
    };

    setProcesos((anteriores) => [...anteriores, nuevoProceso]);
    setNumero('');
  };

  const reiniciar = () => {
    setNumero('');
    setProcesos([]);
    setTerminado(false);
    setError('');
  };

  return (
    <section className="calculator-panel">
      <div className="calculator-heading">
        <span className="section-kicker">Ejercicio 22</span>
        <h2>Cubo y raíz cuadrada</h2>
        <p>
          Ingresa números para calcular su cubo y su raíz cuadrada.
          El proceso finalizará cuando introduzcas el número cero.
        </p>
      </div>

      {!terminado && (
        <form className="calculator-form" onSubmit={calcular}>
          <div className="form-group">
            <label htmlFor="numero-ejercicio-22">
              Ingresa un número
            </label>

            <input
              id="numero-ejercicio-22"
              type="number"
              step="any"
              value={numero}
              onChange={(e) => {
                setNumero(e.target.value);
                setError('');
              }}
              placeholder="Escribe un número"
            />
          </div>

          {error && (
            <p className="error-message" role="alert">
              {error}
            </p>
          )}

          <div className="calculator-actions">
            <button type="submit" className="hero-button">
              Calcular resultado →
            </button>
          </div>

          <p style={{ fontSize: '13px', marginTop: '10px' }}>
            Introduce 0 cuando quieras finalizar los procesos.
          </p>
        </form>
      )}

      {procesos.length > 0 && (
        <div className="series-result">
          <h3>Resultados de los procesos</h3>

          {procesos.map((proceso) => (
            <div
              key={proceso.numero}
              className="salary-result"
              style={{ marginTop: '16px' }}
            >
              <span className="section-kicker">
                RESULTADO DEL PROCESO Nº {proceso.numero}
              </span>

              <div className="total-salary">
                <span>Número ingresado</span>
                <strong>{proceso.valor}</strong>
              </div>

              <div className="series-result">
                <h3>Detalle de las operaciones</h3>

                <p>
                  Cubo:{' '}
                  <strong>{proceso.cubo.toLocaleString('es-DO')}</strong>
                </p>

                <p>
                  Raíz cuadrada:{' '}
                  <strong>
                    {proceso.raiz !== null
                      ? proceso.raiz.toFixed(2)
                      : 'No tiene raíz cuadrada real'}
                  </strong>
                </p>
              </div>
            </div>
          ))}
        </div>
      )}

      {terminado && (
        <div className="salary-result">
          <span className="section-kicker">PROCESO COMPLETADO</span>
          <h3>¡Proceso finalizado!</h3>
          <p>
            Has terminado correctamente los cálculos.
          </p>
          <div className="total-salary">
            <span>Total de números procesados</span>
            <strong>{procesos.length}</strong>
          </div>
          <strong>Final del proceso.</strong>
        </div>
      )}

      {procesos.length > 0 && (
        <div className="calculator-actions">
          <button
            type="button"
            className="clear-button"
            onClick={reiniciar}
          >
            Reiniciar ejercicio
          </button>
        </div>
      )}
    </section>
  );
}

export default Ejercicio22;