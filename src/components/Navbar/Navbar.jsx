import { useEffect, useState } from 'react'
import './Navbar.scss'
import logo from '../../assets/logos/logo-cuantica-texto.svg'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const openSearch = () => console.log('open search')
  const goProfile = () => window.open('https://www.tiendanube.com/tu-tienda/registro', '_blank')

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      {/* TOP BAR */}
      <div className="navbar__top">
        <div className="navbar__side navbar__side--left">
          <button className="icon-btn" aria-label="Buscar" onClick={openSearch}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2"/>
              <path d="M20 20L17 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>
        </div>

        <a href="#home" className="navbar__brand" aria-label="Ir al inicio">
          <img src={logo} alt="Cuántica" />
        </a>

        <div className="navbar__side navbar__side--right">
          <button className="icon-btn" aria-label="Perfil" onClick={goProfile}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="2"/>
              <path d="M4 20c0-4 4-6 8-6s8 2 8 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="navbar__bottom">
        <nav className="navbar__menu">
          <a href="#universos">Universos</a>
          <a href="#home">Inicio</a>
          <a href="#about">Quiénes somos</a>
          <a href="#contacto">Contacto</a>
          <a href="#preguntasfrecuentes">Preguntas frecuentes</a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a>
        </nav>
      </div>
    </header>
  )
}