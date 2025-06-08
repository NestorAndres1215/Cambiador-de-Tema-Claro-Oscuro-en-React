import React, { useState } from 'react';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`app ${darkMode ? 'dark' : ''}`}>
      <div className="background-animation">
        <div className="floating-shape shape-1"></div>
        <div className="floating-shape shape-2"></div>
        <div className="floating-shape shape-3"></div>
      </div>
      
      <div className="card">
        <div className="icon-container">
          <span className="theme-icon">
            {darkMode ? '🌙' : '☀️'}
          </span>
        </div>
        
        <h1 className="title">
          {darkMode ? 'Modo Oscuro' : 'Modo Claro'}
        </h1>
        
        <p className="subtitle">
          {darkMode
            ? 'Estás usando el tema oscuro. Ideal para ambientes con poca luz y ayuda a reducir la fatiga visual durante largas sesiones.'
            : 'Estás usando el tema claro. Perfecto para ambientes bien iluminados y una apariencia más brillante y energética.'}
        </p>
        
        <button className="theme-btn" onClick={toggleTheme}>
          Cambiar a {darkMode ? 'Claro ☀️' : 'Oscuro 🌙'}
        </button>
        
        <div className="features">
          <div className="feature">
            <div className="feature-icon">👁️</div>
            <div className="feature-title">Confort Visual</div>
            <div className="feature-desc">Diseñado para reducir la fatiga ocular</div>
          </div>
          <div className="feature">
            <div className="feature-icon">🎨</div>
            <div className="feature-title">Diseño Moderno</div>
            <div className="feature-desc">Interfaz elegante y contemporánea</div>
          </div>
          <div className="feature">
            <div className="feature-icon">⚡</div>
            <div className="feature-title">Transiciones Suaves</div>
            <div className="feature-desc">Cambios fluidos entre temas</div>
          </div>
          <div className="feature">
            <div className="feature-icon">📱</div>
            <div className="feature-title">Responsive</div>
            <div className="feature-desc">Adaptable a cualquier dispositivo</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;