import { useMemo, useState } from 'react'
import './App.css'
import Ejercicio01 from './ejercicios/Ejercicio01'
import Ejercicio02 from './ejercicios/Ejercicio02'
import Ejercicio03 from './ejercicios/Ejercicio03'
import Ejercicio04 from './ejercicios/Ejercicio04'
import Ejercicio05 from './ejercicios/Ejercicio05'
import Ejercicio06 from './ejercicios/Ejercicio06'
import Ejercicio07 from './ejercicios/Ejercicio07'
import Ejercicio08 from './ejercicios/Ejercicio08'
import Ejercicio09 from './ejercicios/Ejercicio09'
import Ejercicio10 from './ejercicios/Ejercicio10'
import Ejercicio11 from './ejercicios/Ejercicio11'
import Ejercicio12 from './ejercicios/Ejercicio12'
import Ejercicio13 from './ejercicios/Ejercicio13'
import Ejercicio14 from './ejercicios/Ejercicio14'
import Ejercicio15 from './ejercicios/Ejercicio15'
import Ejercicio18 from './ejercicios/Ejercicio18'
import Ejercicio19 from './ejercicios/Ejercicio19'
import Ejercicio20 from './ejercicios/Ejercicio20'
import Ejercicio21 from './ejercicios/Ejercicio21'
import Ejercicio22 from './ejercicios/Ejercicio22'
import Ejercicio23 from './ejercicios/Ejercicio23'
import Ejercicio24 from './ejercicios/Ejercicio24'
import Ejercicio25 from './ejercicios/Ejercicio25'
import Ejercicio26 from './ejercicios/Ejercicio26'
import Ejercicio27 from './ejercicios/Ejercicio27'
import Ejercicio28 from './ejercicios/Ejercicio28'
import Ejercicio29 from './ejercicios/Ejercicio29'
import Ejercicio30 from './ejercicios/Ejercicio30'
import Ejercicio31 from './ejercicios/Ejercicio31'
import Ejercicio32 from './ejercicios/Ejercicio32'

const ejercicios = [
  { numero: 1, nombre: 'Salario con horas extras', categoria: 'Finanzas', icono: '💰', descripcion: 'Calcula el salario de un trabajador incluyendo sus horas extras.' },
  { numero: 2, nombre: 'Descuento de sueldo y sueldo neto', categoria: 'Finanzas', icono: '💵', descripcion: 'Determina los descuentos aplicados y el salario neto.' },
  { numero: 3, nombre: 'Descuento según el monto', categoria: 'Finanzas', icono: '🏷️', descripcion: 'Calcula el descuento correspondiente según el importe.' },
  { numero: 4, nombre: 'Segundos restantes para completar un minuto', categoria: 'Matemáticas', icono: '⏱️', descripcion: 'Calcula los minutos completos y los segundos que faltan para completar el siguiente minuto.' },
  { numero: 5, nombre: 'Conversión de minutos a días, horas y minutos', categoria: 'Matemáticas', icono: '🕒', descripcion: 'Transforma una cantidad de minutos en unidades de tiempo.' },
  { numero: 6, nombre: 'Suma de los primeros N números naturales', categoria: 'Matemáticas', icono: '➕', descripcion: 'Obtén la suma de una secuencia de números naturales.' },
  { numero: 7, nombre: 'Suma de salarios de los trabajadores', categoria: 'Finanzas', icono: '👥', descripcion: 'Calcula el total de los salarios registrados.' },
  { numero: 8, nombre: 'Cálculo del salario de un trabajador', categoria: 'Finanzas', icono: '🧾', descripcion: 'Determina el salario de un empleado a partir de sus datos.' },
  { numero: 9, nombre: 'Conteo y promedio de notas', categoria: 'Matemáticas', icono: '📊', descripcion: 'Clasifica las calificaciones y calcula sus promedios.' },
  { numero: 10, nombre: 'Suma de los dígitos de un número', categoria: 'Matemáticas', icono: '🔢', descripcion: 'Descompone un número y suma sus dígitos.' },
  { numero: 11, nombre: 'Factura con IVA y descuento', categoria: 'Finanzas', icono: '🛒', descripcion: 'Calcula el IVA y el descuento de una factura.' },
  { numero: 12, nombre: 'Clasificación de 50 números', categoria: 'Lógica', icono: '🔍', descripcion: 'Clasifica números según sus características.' },
  { numero: 13, nombre: 'Cálculo del factorial', categoria: 'Matemáticas', icono: '❗', descripcion: 'Calcula el factorial de un número.' },
  { numero: 14, nombre: 'Media de 100 números', categoria: 'Matemáticas', icono: '📈', descripcion: 'Calcula la media aritmética de un conjunto de valores.' },
  { numero: 15, nombre: 'Suma y producto de números pares', categoria: 'Matemáticas', icono: '✖️', descripcion: 'Opera con los números pares del intervalo indicado.' },
  { numero: 18, nombre: 'Primera vocal ingresada', categoria: 'Lógica', icono: '🔤', descripcion: 'Identifica la primera vocal introducida.' },
  { numero: 19, nombre: 'Identificar la parte fraccionaria', categoria: 'Matemáticas', icono: '½', descripcion: 'Identifica la parte fraccionaria de un número.' },
  { numero: 20, nombre: 'Soluciones de una ecuación cuadrática', categoria: 'Matemáticas', icono: '📐', descripcion: 'Resuelve una ecuación de segundo grado.' },
  { numero: 21, nombre: 'Operaciones básicas durante 10 procesos', categoria: 'Lógica', icono: '🧮', descripcion: 'Realiza operaciones aritméticas con varios pares de valores.' },
  { numero: 22, nombre: 'Cubo y raíz cuadrada hasta ingresar cero', categoria: 'Matemáticas', icono: '∛', descripcion: 'Calcula potencias y raíces mediante un ciclo.' },
  { numero: 23, nombre: 'Operaciones hasta que el primer número sea cero', categoria: 'Lógica', icono: '🔄', descripcion: 'Ejecuta operaciones hasta cumplir una condición de salida.' },
  { numero: 24, nombre: 'Área de un triángulo por sus lados', categoria: 'Geometría', icono: '🔺', descripcion: 'Calcula el área de un triángulo a partir de sus lados.' },
  { numero: 25, nombre: 'Hipotenusa por el teorema de Pitágoras', categoria: 'Geometría', icono: '📏', descripcion: 'Calcula la hipotenusa de un triángulo rectángulo.' },
  { numero: 26, nombre: 'Longitud, área y volumen según el radio', categoria: 'Geometría', icono: '🌐', descripcion: 'Calcula medidas de circunferencia, círculo y esfera.' },
  { numero: 27, nombre: 'Total de 130 consumos de restaurante', categoria: 'Finanzas', icono: '🍽️', descripcion: 'Calcula el importe total de los consumos registrados.' },
  { numero: 28, nombre: 'Suma de enteros desde 8 hasta N', categoria: 'Matemáticas', icono: '➗', descripcion: 'Suma los números enteros desde el valor indicado.' },
  { numero: 29, nombre: 'Control de egresos y saldo de caja', categoria: 'Finanzas', icono: '🏦', descripcion: 'Registra movimientos y calcula el saldo disponible.' },
  { numero: 30, nombre: 'Promedio de dos notas y resultado', categoria: 'Matemáticas', icono: '🎓', descripcion: 'Calcula el promedio y determina el resultado académico.' },
  { numero: 31, nombre: 'Clasificación de personas por deporte', categoria: 'Lógica', icono: '🏅', descripcion: 'Organiza los participantes según el deporte elegido.' },
  { numero: 32, nombre: 'Validación de cinco claves', categoria: 'Lógica', icono: '🔐', descripcion: 'Comprueba las claves necesarias para permitir el acceso.' },
]

const categorias = ['Todas', 'Matemáticas', 'Finanzas', 'Geometría', 'Lógica']

function App() {
  const [busqueda, setBusqueda] = useState('')
  const [categoria, setCategoria] = useState('Todas')
  const [seleccionado, setSeleccionado] = useState(null)
  const [pagina, setPagina] = useState('inicio')
  const [temaOscuro, setTemaOscuro] = useState(false)

  const ejerciciosFiltrados = useMemo(() => {
    return ejercicios.filter((ejercicio) => {
      const coincideTexto = `${ejercicio.numero} ${ejercicio.nombre} ${ejercicio.descripcion}`
        .toLowerCase()
        .includes(busqueda.toLowerCase())

      const coincideCategoria =
        categoria === 'Todas' || ejercicio.categoria === categoria

      return coincideTexto && coincideCategoria
    })
  }, [busqueda, categoria])

  const abrirEjercicio = (ejercicio) => {
    setSeleccionado(ejercicio)
    setPagina('ejercicio')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const volverInicio = () => {
    setSeleccionado(null)
    setPagina('inicio')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className={`app-shell ${temaOscuro ? 'dark-theme' : 'light-theme'}`}>
      <aside className="sidebar">
        <button className="brand" onClick={volverInicio}>
          <span className="brand-icon">R</span>
          <span>
            <strong>REACT LAB</strong>
            <small>Learning & Development</small>
          </span>
        </button>

        <div className="sidebar-section">
          <span className="sidebar-label">MENÚ PRINCIPAL</span>

          <button
            className={`nav-link ${pagina === 'inicio' ? 'selected' : ''}`}
            onClick={volverInicio}
          >
            <span>⌂</span> Inicio
          </button>

          <button
            className={`nav-link ${pagina === 'inicio' ? '' : 'selected'}`}
            onClick={() => {
              setPagina('inicio')
              setCategoria('Todas')
              setSeleccionado(null)
            }}
          >
            <span>▦</span> Aplicaciones
            <span className="nav-count">30</span>
          </button>
        </div>

        <div className="sidebar-section category-menu">
          <span className="sidebar-label">CATEGORÍAS</span>

          {categorias.map((item) => (
            <button
              key={item}
              className={`nav-link ${categoria === item && pagina === 'inicio' ? 'selected' : ''}`}
              onClick={() => {
                setCategoria(item)
                setPagina('inicio')
                setSeleccionado(null)
              }}
            >
              <span>
                {item === 'Todas' ? '✦' :
                  item === 'Matemáticas' ? '∑' :
                    item === 'Finanzas' ? '$' :
                      item === 'Geometría' ? '△' : '⌘'}
              </span>
              {item}
            </button>
          ))}
        </div>

        <div className="sidebar-bottom">
          <div className="sidebar-note">
            <span>💡</span>
            <strong>Aprender haciendo</strong>
            <p>Explora, experimenta y desarrolla tus habilidades.</p>
          </div>

          <button
            className="theme-button"
            onClick={() => setTemaOscuro(!temaOscuro)}
          >
            <span>{temaOscuro ? '☀️' : '🌙'}</span>
            {temaOscuro ? 'Modo claro' : 'Modo oscuro'}
          </button>
        </div>
      </aside>

      <main className="workspace">
        <header className="topbar">
          <div className="breadcrumb">
            <span>React Lab</span>
            <span className="breadcrumb-separator">/</span>
            {pagina === 'inicio' ? 'Panel principal' : 'Aplicación'}
          </div>

          <div className="topbar-status">
            <span className="status-dot"></span>
            Plataforma educativa
          </div>
        </header>

        {pagina === 'inicio' ? (
          <>
            <section className="hero">
              <div className="hero-content">
                <span className="hero-tag">
                  <span className="status-dot"></span>
                  LABORATORIO DE PROGRAMACIÓN
                </span>

                <h1>
                  Explora. Calcula.
                  <span> Aprende.</span>
                </h1>

                <p>
                  Descubre una colección de herramientas interactivas que
                  transforman la lógica de programación en experiencias prácticas.
                </p>

                <button
                  className="hero-button"
                  onClick={() => {
                    document.getElementById('explorar')?.scrollIntoView({
                      behavior: 'smooth',
                    })
                  }}
                >
                  Explorar aplicaciones <span>→</span>
                </button>
              </div>

              <div className="hero-art">
                <div className="orbit orbit-one"></div>
                <div className="orbit orbit-two"></div>
                <div className="hero-symbol">⌘</div>
                <span className="floating-symbol symbol-one">∑</span>
                <span className="floating-symbol symbol-two">{'{ }'}</span>
                <span className="floating-symbol symbol-three">01</span>
              </div>
            </section>

            <section className="stats-grid">
              <div className="stat-card">
                <span className="stat-icon blue">▦</span>
                <div>
                  <strong>30</strong>
                  <span>Aplicaciones</span>
                </div>
              </div>

              <div className="stat-card">
                <span className="stat-icon purple">∑</span>
                <div>
                  <strong>4</strong>
                  <span>Categorías</span>
                </div>
              </div>

              <div className="stat-card">
                <span className="stat-icon green">✓</span>
                <div>
                  <strong>React</strong>
                  <span>Tecnología principal</span>
                </div>
              </div>
            </section>

            <section className="applications-section" id="explorar">
              <div className="section-heading">
                <div>
                  <span className="section-kicker">CENTRO DE APLICACIONES</span>
                  <h2>Explora los ejercicios</h2>
                  <p>Selecciona una aplicación para comenzar a trabajar.</p>
                </div>

                <span className="result-counter">
                  {ejerciciosFiltrados.length} resultados
                </span>
              </div>

              <div className="filter-bar">
                <div className="search-box">
                  <span>⌕</span>
                  <input
                    type="search"
                    placeholder="Buscar por nombre o número..."
                    value={busqueda}
                    onChange={(e) => setBusqueda(e.target.value)}
                  />
                  {busqueda && (
                    <button onClick={() => setBusqueda('')}>×</button>
                  )}
                </div>

                <select
                  value={categoria}
                  onChange={(e) => setCategoria(e.target.value)}
                  aria-label="Filtrar por categoría"
                >
                  {categorias.map((item) => (
                    <option key={item} value={item}>{item}</option>
                  ))}
                </select>
              </div>

              <div className="category-chips">
                {categorias.map((item) => (
                  <button
                    key={item}
                    className={categoria === item ? 'chip active-chip' : 'chip'}
                    onClick={() => setCategoria(item)}
                  >
                    {item}
                  </button>
                ))}
              </div>

              {ejerciciosFiltrados.length > 0 ? (
                <div className="exercise-grid">
                  {ejerciciosFiltrados.map((ejercicio) => (
                    <article className="exercise-card" key={ejercicio.numero}>
                      <div className="card-top">
                        <span className="card-icon">{ejercicio.icono}</span>
                        <span className="card-number">
                          {String(ejercicio.numero).padStart(2, '0')}
                        </span>
                      </div>

                      <span className="card-category">{ejercicio.categoria}</span>
                      <h3>{ejercicio.nombre}</h3>
                      <p>{ejercicio.descripcion}</p>

                      <button
                        className="card-action"
                        onClick={() => abrirEjercicio(ejercicio)}
                      >
                        Abrir aplicación <span>→</span>
                      </button>
                    </article>
                  ))}
                </div>
              ) : (
                <div className="empty-state">
                  <span>⌕</span>
                  <h3>No encontramos resultados</h3>
                  <p>Prueba con otro nombre, número o categoría.</p>
                  <button
                    className="hero-button"
                    onClick={() => {
                      setBusqueda('')
                      setCategoria('Todas')
                    }}
                  >
                    Limpiar filtros
                  </button>
                </div>
              )}
            </section>
          </>
        ) : (
          <section className="exercise-detail">
            <button className="back-button" onClick={volverInicio}>
              ← Volver a las aplicaciones
            </button>

            <div className="detail-heading">
              <span className="card-icon detail-icon">
                {seleccionado?.icono}
              </span>
              <div>
                <span className="section-kicker">
                  EJERCICIO {String(seleccionado?.numero).padStart(2, '0')}
                </span>
                <h1>{seleccionado?.nombre}</h1>
                <p>{seleccionado?.descripcion}</p>
              </div>
            </div>

            {seleccionado?.numero === 1 ? (
              <Ejercicio01 />
            ) : seleccionado?.numero === 2 ? (
              <Ejercicio02 />
            ) : seleccionado?.numero === 3 ? (
              <Ejercicio03 />
            ) : seleccionado?.numero === 4 ? (
              <Ejercicio04 />
            ) : seleccionado?.numero === 5 ? (
              <Ejercicio05 />
            ) : seleccionado?.numero === 6 ? (
              <Ejercicio06 />
            ) : seleccionado?.numero === 7 ? (
              <Ejercicio07 />
            ) : seleccionado?.numero === 8 ? (
              <Ejercicio08 />
            ) : seleccionado?.numero === 9 ? (
              <Ejercicio09 />
            ) : seleccionado?.numero === 10 ? (
              <Ejercicio10 />
            ) : seleccionado?.numero === 11 ? (
              <Ejercicio11 />
            ) : seleccionado?.numero === 12 ? (
              <Ejercicio12 />
            ) : seleccionado?.numero === 13 ? (
              <Ejercicio13 />
            ) : seleccionado?.numero === 14 ? (
              <Ejercicio14 />
            ) : seleccionado?.numero === 15 ? (
              <Ejercicio15 />
            ) : seleccionado?.numero === 18 ? (
              <Ejercicio18 />
            ) : seleccionado?.numero === 19 ? (
              <Ejercicio19 />
            ) : seleccionado?.numero === 20 ? (
              <Ejercicio20 />
            ) : seleccionado?.numero === 21 ? (
              <Ejercicio21 />
            ) : seleccionado?.numero === 22 ? (
              <Ejercicio22 />
            ) : seleccionado?.numero === 23 ? (
              <Ejercicio23 />
            ) : seleccionado?.numero === 24 ? (
              <Ejercicio24 />
            ) : seleccionado?.numero === 25 ? (
              <Ejercicio25 />
            ) : seleccionado?.numero === 26 ? (
              <Ejercicio26 />
            ) : seleccionado?.numero === 27 ? (
              <Ejercicio27 />
            ) : seleccionado?.numero === 28 ? (
              <Ejercicio28 />
            ) : seleccionado?.numero === 29 ? (
              <Ejercicio29 />
            ) : seleccionado?.numero === 30 ? (
              <Ejercicio30 />
            ) : seleccionado?.numero === 31 ? (
              <Ejercicio31 />
            ) : seleccionado?.numero === 32 ? (
              <Ejercicio32 />
            ) : (
              <div className="coming-panel">
                <span className="coming-icon">⚙️</span>
                <h2>Área de trabajo</h2>
                <p>
                  Aquí construiremos el formulario, los cálculos y la presentación
                  de resultados de esta aplicación.
                </p>
                <span className="coming-label">MÓDULO EN CONSTRUCCIÓN</span>
              </div>
            )}
          </section>
        )}

        <footer className="app-footer">
          <span>REACT LAB · Desarrollo de tecnologías web</span>
          <span>Construido con React</span>
        </footer>
      </main>
    </div>
  )
}

export default App