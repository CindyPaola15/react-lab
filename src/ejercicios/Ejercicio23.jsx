import { useState } from 'react';

function Ejercicio23() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [procesos, setProcesos] = useState([]);
  const [terminado, setTerminado] = useState(false);
  const [error, setError] = useState('');

  const calcular = (e) => {
    e.preventDefault();
    setError('');

    if (num1.trim() === '') {
      setError('Debes ingresar el primer número.');
      return;
    }

    const primero = Number(num1);

    if (!Number.isFinite(primero)) {
      setError('Ingresa un primer número válido.');
      return;
    }

    // El primer número igual a cero finaliza el programa.
    if (primero === 0) {
      setTerminado(true);
      setNum1('');
      setNum2('');
      return;
    }

    if (num2.trim() === '') {
      setError('Debes ingresar el segundo número.');
      return;
    }

    const segundo = Number(num2);

    if (!Number.isFinite(segundo)) {
      setError('Ingresa un segundo número válido.');
      return;
    }

    if (segundo === 0) {
      setError('El segundo número no puede ser cero porque no se puede dividir entre cero.');
      return;
    }

    const nuevoProceso = {
      numero: procesos.length + 1,
      num1: primero,
      num2: segundo,
      suma: primero + segundo,
      resta: primero - segundo,
      multiplicacion: primero * segundo,
      division: Number((primero / segundo).toFixed(2)),
    };

    setProcesos((anteriores) => [...anteriores, nuevoProceso]);
    setNum1('');
    setNum2('');
  };

  const reiniciar = () => {
    setNum1('');
    setNum2('');
    setProcesos([]);
    setTerminado(false);
    setError('');
  };

  return (
    <section className="calculator-panel">
      <div className="calculator-heading">
        <span className="section-kicker">Ejercicio 23</span>
        <h2>Operaciones hasta ingresar cero</h2>
        <p>
          Ingresa dos números para calcular su suma, resta,
          multiplicación y división. El proceso finalizará
          cuando el primer número sea igual a cero.
        </p>
      </div>

      {!terminado && (
        <form className="calculator-form" onSubmit={calcular}>
          <div className="form-group">
            <label htmlFor="numero1-ejercicio-23">
              Primer número
            </label>
            <input
              id="numero1-ejercicio-23"
              type="number"
              step="any"
              value={num1}
              onChange={(e) => {
                setNum1(e.target.value);
                setError('');
              }}
              placeholder="Ingresa el primer número"
            />
          </div>

          <div className="form-group">
            <label htmlFor="numero2-ejercicio-23">
              Segundo número
            </label>
            <input
              id="numero2-ejercicio-23"
              type="number"
              step="any"
              value={num2}
              onChange={(e) => {
                setNum2(e.target.value);
                setError('');
              }}
              placeholder="Ingresa el segundo número"
            />
          </div>

          {error && (
            <p className="error-message" role="alert">
              {error}
            </p>
          )}

          <div className="calculator-actions">
            <button type="submit" className="hero-button">
              Registrar operación →
            </button>
          </div>

          <p style={{ fontSize: '13px', marginTop: '10px' }}>
            Para finalizar, introduce 0 en el primer número.
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
                <span>Números ingresados</span>
                <strong>{proceso.num1} y {proceso.num2}</strong>
              </div>

              <div className="series-result">
                <h3>Detalle de las operaciones</h3>

                <p>
                  Suma: <strong>{proceso.suma}</strong>
                </p>

                <p>
                  Resta: <strong>{proceso.resta}</strong>
                </p>

                <p>
                  Multiplicación:{' '}
                  <strong>{proceso.multiplicacion}</strong>
                </p>

                <p>
                  División:{' '}
                  <strong>{proceso.division.toFixed(2)}</strong>
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
            Has terminado correctamente las operaciones.
          </p>

          <div className="total-salary">
            <span>Total de procesos realizados</span>
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

export default Ejercicio23;