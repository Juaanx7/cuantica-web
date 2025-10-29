import './Hero.scss'
import heroBg from '../../assets/images/hero-desktop.jpg'
import heroIllustration from '../../assets/logos/logo-cuantica.svg'

export default function Hero() {
  return (
    <section className="hero" id="home">
      <img className="hero__bg" src={heroBg} alt="Fondo Cuántica" />
      <div className="hero__overlay" />

      <div className="hero__content">
        <img
          src={heroIllustration}
          alt="Ilustración Cuántica"
          className="hero__illustration"
        />

        <h1 className="hero__title">MOMENTOS PARA CONECTAR</h1>
        <p className="hero__subtitle">
          Explorá nuestros universos de café de especialidad, <br />
          cervezas artesanales y cultivo consciente.
        </p>

        <a href="#universos" className="hero__cta">
          DESCUBRIR LOS UNIVERSOS
        </a>
      </div>
    </section>
  )
}
