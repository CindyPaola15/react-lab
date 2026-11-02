import { useState } from 'react';

function Ejercicio21() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [procesos, setProcesos] = useState([]);
  const [error, setError] = useState('');

  const calcular = (e) => {
    e.preventDefault();
    setError('');

    if (num1.trim() === '' || num2.trim() === '') {
      setError('Debes ingresar los dos números.');
      return;
    }

    const primero = Number(num1);
    const segundo = Number(num2);

    if (!Number.isFinite(primero) || !Number.isFinite(segundo)) {
      setError('Ingresa valores numéricos válidos.');
      return;
    }

    if (segundo === 0) {
      setError('El segundo número no puede ser cero porque no se puede dividir entre cero.');
      return;
    }

    if (procesos.length >= 10) {
      setError('Ya completaste los 10 procesos.');
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
    setError('');
  };

  const terminado = procesos.length === 10;

  return (
    <section className="calculator-panel">
      <div className="calculator-heading">
        <span className="section-kicker">Ejercicio 21</span>
        <h2>Operaciones matemáticas</h2>
        <p>
          Ingresa dos números y calcula la suma, resta,
          multiplicación y división. Completa los 10 procesos.
        </p>
      </div>

      <div className="series-result">
        <strong>Progreso de los procesos</strong>
        <p>{procesos.length} de 10 procesos completados</p>

        <div
          style={{
            width: '100%',
            height: '9px',
            background: 'var(--border-color, #e2e8f0)',
            borderRadius: '20px',
            overflow: 'hidden',
            marginTop: '12px',
          }}
        >
          <div
            style={{
              width: `${procesos.length * 10}%`,
              height: '100%',
              background: 'var(--primary-color, #3b82f6)',
              borderRadius: '20px',
              transition: 'width 0.3s ease',
            }}
          />
        </div>
      </div>

      {!terminado && (
        <form className="calculator-form" onSubmit={calcular}>
          <div className="form-group">
            <label htmlFor="numero1">Primer número</label>
            <input
              id="numero1"
              type="number"
              step="any"
              value={num1}
              onChange={(e) => setNum1(e.target.value)}
              placeholder="Ingresa el primer número"
            />
          </div>

          <div className="form-group">
            <label htmlFor="numero2">Segundo número</label>
            <input
              id="numero2"
              type="number"
              step="any"
              value={num2}
              onChange={(e) => setNum2(e.target.value)}
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
              Registrar proceso {procesos.length + 1}
            </button>
          </div>
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
                <span>Operaciones realizadas</span>
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
          <h3>¡Proceso finalizado!</h3>
          <p>Has realizado correctamente los 10 procesos.</p>
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

export default Ejercicio21;