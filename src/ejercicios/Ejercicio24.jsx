import { useState } from 'react';

function Ejercicio24() {
  const [ladoA, setLadoA] = useState('');
  const [ladoB, setLadoB] = useState('');
  const [ladoC, setLadoC] = useState('');
  const [resultado, setResultado] = useState(null);
  const [error, setError] = useState('');

  const calcularArea = (e) => {
    e.preventDefault();
    setError('');
    setResultado(null);

    if (
      ladoA.trim() === '' ||
      ladoB.trim() === '' ||
      ladoC.trim() === ''
    ) {
      setError('Debes ingresar los tres lados del triángulo.');
      return;
    }

    const a = Number(ladoA);
    const b = Number(ladoB);
    const c = Number(ladoC);

    if (
      !Number.isFinite(a) ||
      !Number.isFinite(b) ||
      !Number.isFinite(c)
    ) {
      setError('Ingresa valores numéricos válidos.');
      return;
    }

    if (a <= 0 || b <= 0 || c <= 0) {
      setError('Los lados deben ser mayores que cero.');
      return;
    }

    if (a + b <= c || a + c <= b || b + c <= a) {
      setError(
        'Los lados ingresados no pueden formar un triángulo.'
      );
      return;
    }

    const semiperimetro = (a + b + c) / 2;

    // Fórmula de Herón
    const area = Math.sqrt(
      semiperimetro *
      (semiperimetro - a) *
      (semiperimetro - b) *
      (semiperimetro - c)
    );

    setResultado({
      a,
      b,
      c,
      semiperimetro,
      area: Number(area.toFixed(2)),
    });
  };

  const limpiar = () => {
    setLadoA('');
    setLadoB('');
    setLadoC('');
    setResultado(null);
    setError('');
  };

  return (
    <section className="calculator-panel">
      <div className="calculator-heading">
        <span className="section-kicker">Ejercicio 24</span>
        <h2>Área de un triángulo por sus lados</h2>
        <p>
          Introduce las medidas de los tres lados para calcular
          el área del triángulo mediante la fórmula de Herón.
        </p>
      </div>

      <form className="calculator-form" onSubmit={calcularArea}>
        <div className="form-group">
          <label htmlFor="lado-a-24">Lado A</label>
          <input
            id="lado-a-24"
            type="number"
            min="0"
            step="any"
            value={ladoA}
            onChange={(e) => setLadoA(e.target.value)}
            placeholder="Ingresa el lado A"
          />
        </div>

        <div className="form-group">
          <label htmlFor="lado-b-24">Lado B</label>
          <input
            id="lado-b-24"
            type="number"
            min="0"
            step="any"
            value={ladoB}
            onChange={(e) => setLadoB(e.target.value)}
            placeholder="Ingresa el lado B"
          />
        </div>

        <div className="form-group">
          <label htmlFor="lado-c-24">Lado C</label>
          <input
            id="lado-c-24"
            type="number"
            min="0"
            step="any"
            value={ladoC}
            onChange={(e) => setLadoC(e.target.value)}
            placeholder="Ingresa el lado C"
          />
        </div>

        {error && (
          <p className="error-message" role="alert">
            {error}
          </p>
        )}

        <div className="calculator-actions">
          <button type="submit" className="hero-button">
            Calcular área →
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
          <span className="section-kicker">RESULTADO DEL CÁLCULO</span>

          <div className="total-salary">
            <span>Área del triángulo</span>
            <strong>{resultado.area.toFixed(2)} unidades²</strong>
          </div>

          <div className="series-result">
            <h3>Detalle de los valores</h3>
            <p>Lado A: <strong>{resultado.a}</strong></p>
            <p>Lado B: <strong>{resultado.b}</strong></p>
            <p>Lado C: <strong>{resultado.c}</strong></p>
            <p>
              Semiperímetro:{' '}
              <strong>{resultado.semiperimetro.toFixed(2)}</strong>
            </p>
          </div>
        </div>
      )}
    </section>
  );
}

export default Ejercicio24;