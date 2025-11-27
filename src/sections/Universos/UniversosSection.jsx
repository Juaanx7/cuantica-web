import { useMemo, useState } from 'react'
import './UniversosSection.scss'
import cerveza1 from '../../assets/images/cervezas/cerveza-cuantica.jpg'
import cafe1 from '../../assets/images/cafes/cafe1.jpg'
import miel1 from '../../assets/images/miel/miel1.png'

// Arrays de productos por categoría
const DATA = {
  cervezas: [
    { id:'c1', title:'Cuantica - Pilsen lata 473ml', price: 6000, img: cerveza1, url:'https://tiendanube.com/cuantica/pilsen' },
    { id:'c2', title:'Cuantica - IPA 473ml',         price: 6500, img: cerveza1, url:'https://tiendanube.com/cuantica/ipa' },
    { id:'c3', title:'Cuantica - APA 473ml',         price: 6300, img: cerveza1, url:'https://tiendanube.com/cuantica/apa' },
    { id:'c4', title:'Cuantica - Stout 473ml',       price: 6800, img: cerveza1, url:'https://tiendanube.com/cuantica/stout' },
    { id:'c5', title:'Cuantica - Lager 473ml',       price: 5900, img: cerveza1, url:'https://tiendanube.com/cuantica/lager' },
  ],
  cafe: [
    { id:'f1', title:'Café de especialidad 250g',    price: 8900, img: cafe1, url:'https://tiendanube.com/cuantica/cafe' },
    { id:'f2', title:'Café de especialidad 500g',    price: 15900, img: cafe1, url:'https://tiendanube.com/cuantica/cafe' },
    { id:'f3', title:'Café de especialidad 1kg',     price: 29900, img: cafe1, url:'https://tiendanube.com/cuantica/cafe' },
    { id:'f4', title:'Café en cápsulas 10u',         price: 7200, img: cafe1, url:'https://tiendanube.com/cuantica/cafe' },
    { id:'f5', title:'Café en cápsulas 20u',         price: 14000, img: cafe1, url:'https://tiendanube.com/cuantica/cafe' },
  ],
  miel: [
    { id:'m1', title:'Miel con terpenos 300g',       price: 7500, img: miel1, url:'https://tiendanube.com/cuantica/miel' },
    { id:'m2', title:'Miel con terpenos 500g',       price: 12000, img: miel1, url:'https://tiendanube.com/cuantica/miel' },
    { id:'m3', title:'Miel con terpenos 1kg',        price: 22000, img: miel1, url:'https://tiendanube.com/cuantica/miel' },
    { id:'m4', title:'Miel con terpenos 250g',       price: 6500, img: miel1, url:'https://tiendanube.com/cuantica/miel' },
    { id:'m5', title:'Miel con terpenos 750g',       price: 16000, img: miel1, url:'https://tiendanube.com/cuantica/miel' },
  ]
}

export default function UniversosSection() {
  const [activeUniverse, setActiveUniverse] = useState('all')

  // Lista de ítems que se muestran según el universo activo
  const items = useMemo(() => {
    if (activeUniverse === 'all') {
      return [
        ...DATA.cervezas,
        ...DATA.cafe,
        ...DATA.miel,
      ]
    }
    
    return DATA[activeUniverse] ?? []
  }, [activeUniverse])

  const go = (dir) => () => {
    const track = document.querySelector('.u-track')
    if (!track) return
    const card = track.querySelector(':scope > .u-card')
    if (!card) return
    const gap = parseFloat(getComputedStyle(track).gap || 16)
    const step = (card.getBoundingClientRect().width + gap) * 1 
    track.scrollBy({ left: dir * step, behavior: 'smooth' })
  }

  return (
    <section id="universos" className="universos">
      <div className="u-container">
        <div className="u-header">
          <h2 className="u-title">NUESTROS UNIVERSOS</h2>

          <div className="u-tabs" role="tablist" aria-label="Categorías">
            <button
              className={`u-tab ${activeUniverse === 'cervezas' ? 'active' : ''}`}
              onClick={() => setActiveUniverse('cervezas')}
            >
              CERVEZAS
            </button>
            <button
              className={`u-tab ${activeUniverse === 'cafe' ? 'active' : ''}`}
              onClick={() => setActiveUniverse('cafe')}
            >
              CAFÉ
            </button>
            <button
              className={`u-tab ${activeUniverse === 'miel' ? 'active' : ''}`}
              onClick={() => setActiveUniverse('miel')}
            >
              MIEL CON TERPENOS
            </button>
          </div>
        </div>

        <div className="u-carousel">
          <div className="u-track" tabIndex={0}>
            {items.map(p => (
              <article key={p.id} className="u-card">
                <div className="u-media">
                  <img src={p.img} alt={p.title} loading="lazy" />
                </div>
                <div className="u-body">
                  <h3 className="u-name">{p.title}</h3>
                  <div className="u-price">
                    ${p.price.toLocaleString('es-AR')},00
                  </div>
                  <a
                    className="u-buy"
                    href={p.url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Comprar
                  </a>
                </div>
              </article>
            ))}
          </div>

          {/* Flechas abajo centradas */}
          <div className="u-arrows">
            <button className="u-nav" aria-label="Anterior" onClick={go(-1)}>‹</button>
            <button className="u-nav" aria-label="Siguiente" onClick={go(1)}>›</button>
          </div>
        </div>
      </div>
    </section>
  )
}