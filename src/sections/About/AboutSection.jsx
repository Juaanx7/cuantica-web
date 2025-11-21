import { useEffect, useRef, useState } from 'react'
import './AboutSection.scss'

// IMPORTS DE IMÁGENES
import slide1 from '../../assets/images/about/about-1.jpg'
import slide2 from '../../assets/images/about/about-2.jpg'
import slide3 from '../../assets/images/about/about-3.jpg'
import slide4 from '../../assets/images/about/about-4.jpg'
import slide5 from '../../assets/images/about/about-5.jpg'

const Fallback = slide1

const SLIDES = [
  {
    id: 'a1',
    title: 'Nuestra historia: La energía que nos une',
    text:
      'Toda gran historia tiene una chispa. La nuestra nació de una charla entre familia, con la idea de una cerveza artesanal y el sueño de crear algo propio. En esa búsqueda, encontramos un nombre que se convirtió en nuestra filosofía: CUÁNTICA. Una palabra que para nosotros significa unión, amistad, conexión, amor y, sobre todo, la valentía de ser auténticos.',
    img: slide1 || Fallback,
  },
  {
    id: 'a2',
    title: 'Los comienzos: Cuando el universo te pone a prueba',
    text:
      'Empezar nunca es fácil. Nuestro primer impulso nos llevó a un formato de bar que duró solo una temporada. En el camino, un envío entero de nuestras primeras latas se perdió, un golpe que casi nos deja en la lona y nos hizo dudar de todo. Pero fue en ese momento de incertidumbre donde encontramos nuestra verdadera identidad. Entendimos que nuestro sueño no era ser un bar más, sino crear un punto de encuentro, un lugar de despacho donde la gente viniera a buscar algo especial para compartir.',
    img: slide2 || Fallback,
  },
  {
    id: 'a3',
    title: 'Nuestro primer hogar: Dos heladeras y un sueño gigante',
    text:
      'Con esa idea clara, encontramos un pequeño local en una galería que, en ese entonces, estaba casi vacía. La ubicación era mágica, a metros del río y la plaza. Empezamos con dos heladeras prestadas, muy poca mercadería y el corazón lleno de ganas. Ese fue nuestro hogar durante tres años. Tres años de probar cervezas de todo el país, de luchar con la logística, de conocer proveedores y, lo más importante, de ver cómo los clientes se convertían en amigos y los amigos en familia. Cada alegría nos impulsó y cada golpe nos forjó para ser mejores.',
    img: slide3 || Fallback,
  },
  {
    id: 'a4',
    title: 'Crecer es compartir: Se suman nuevos universos',
    text:
      'A los seis meses, sentimos que la energía de CUÁNTICA pedía más. Decidimos sumar otra de nuestras grandes pasiones: el cultivo de cannabis. Así nació nuestro Grow Shop. Empezamos de cero, con lo mínimo indispensable, y al igual que con la cerveza, la prueba y el error nos convirtieron en un referente con onda y calidad en la zona.',
    img: slide4 || Fallback,
  },
  {
    id: 'a5',
    title: 'Crecer es compartir: Se suman nuevos universos',
    text:
      'El tiempo pasó y en marzo de 2024, surgió la oportunidad de mudarnos a un local más grande, con vistas a la calle, en la misma galería que nos vio nacer. No lo dudamos. Fue una apuesta fuerte que nos obligó a reinventarnos, a potenciar nuestra identidad y a renovar nuestro logo por el que hoy nos representa. Pero la energía cuántica no se detiene. Antes del invierno de 2025, transformamos un viejo depósito en un nuevo espacio para dar la bienvenida a otro mundo que nos apasiona: el café de especialidad. Un universo fantástico lleno de aromas, fragancias y sabores que nos abrió la puerta a nuevas experiencias y nuevos amigos.',
    img: slide5 || Fallback,
  },
]

export default function AboutSection() {
  const [index, setIndex] = useState(0)
  const trackRef = useRef(null)
  const touchStartX = useRef(null)
  const touchDiff = useRef(0)

  const total = SLIDES.length
  const prev = () => setIndex(i => (i - 1 + total) % total)
  const next = () => setIndex(i => (i + 1) % total)
  const goTo = i => setIndex(i)

  // Accesibilidad: teclado ← →
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  // Swipe en mobile
  const onTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX
    touchDiff.current = 0
  }
  const onTouchMove = (e) => {
    if (touchStartX.current == null) return
    touchDiff.current = e.touches[0].clientX - touchStartX.current
  }
  const onTouchEnd = () => {
    const threshold = 50
    if (touchDiff.current > threshold) prev()
    else if (touchDiff.current < -threshold) next()
    touchStartX.current = null
    touchDiff.current = 0
  }

  return (
    <section id="about" className="about">
        <div className="a-container">
        <div className="a-header">
            <h2 className="a-title">Quiénes somos</h2>
        </div>
        </div>

        {/* 👇 full-bleed */}
        <div className="a-carousel a-carousel--fullbleed">
        <div
            className="a-track"
            style={{ transform: `translateX(-${index * 100}%)` }}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
        >
            {SLIDES.map(s => (
                <article className="a-slide" key={s.id}>
                    {/* Título del slide por encima de las columnas */}
                    <div className="a-slide-header">
                    <h3 className="a-subtitle">{s.title}</h3>
                    </div>

                    {/* Dos columnas: imagen + texto */}
                    <div className="a-slide-inner">
                    <div className="a-media">
                        <img src={s.img} alt={s.title} loading="lazy" />
                    </div>

                    <div className="a-body">
                        <p className="a-text">{s.text}</p>
                    </div>
                    </div>
                </article>
            ))}

        </div>

        <button className="a-arrow a-arrow--left" onClick={prev} aria-label="Anterior">‹</button>
        <button className="a-arrow a-arrow--right" onClick={next} aria-label="Siguiente">›</button>

        <div className="a-dots" role="tablist" aria-label="Slides de quiénes somos">
            {SLIDES.map((s, i) => (
            <button
                key={s.id}
                className={`a-dot ${i === index ? 'active' : ''}`}
                aria-selected={i === index}
                onClick={() => goTo(i)}
                aria-label={`Ir al slide ${i + 1}`}
            />
            ))}
        </div>
        </div>
    </section>
    )
}