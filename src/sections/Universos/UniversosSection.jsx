import { useMemo, useState } from 'react'
import './UniversosSection.scss'

// MOCK: reemplazá con datos reales/Tienda Nube
const DATA = {
  cervezas: [
    { id:'c1', title:'Cuantica - Pilsen lata 473ml', price: 6000, img:'/assets/images/prod-pilsen.jpg', url:'https://tiendanube.com/cuantica/pilsen' },
    { id:'c2', title:'Cuantica - IPA 473ml',         price: 6500, img:'/assets/images/prod-ipa.jpg',    url:'https://tiendanube.com/cuantica/ipa' },
    { id:'c3', title:'Cuantica - APA 473ml',         price: 6300, img:'/assets/images/prod-apa.jpg',    url:'https://tiendanube.com/cuantica/apa' },
    { id:'c4', title:'Cuantica - Stout 473ml',       price: 6800, img:'/assets/images/prod-stout.jpg',  url:'https://tiendanube.com/cuantica/stout' },
    { id:'c5', title:'Cuantica - Lager 473ml',       price: 5900, img:'/assets/images/prod-lager.jpg',  url:'https://tiendanube.com/cuantica/lager' },
  ],
  cafe: [
    { id:'f1', title:'Café de especialidad 250g',    price: 8900, img:'/assets/images/prod-cafe.jpg',   url:'https://tiendanube.com/cuantica/cafe' },
  ],
  miel: [
    { id:'m1', title:'Miel con terpenos 300g',       price: 7500, img:'/assets/images/prod-miel.jpg',   url:'https://tiendanube.com/cuantica/miel' },
  ]
}

export default function UniversosSection(){
  const [tab, setTab] = useState('cervezas')
  const items = useMemo(() => DATA[tab] ?? [], [tab])

  const go = (dir) => () => {
    const track = document.querySelector('.u-track')
    if(!track) return
    const card = track.querySelector(':scope > .u-card')
    if(!card) return
    const gap = parseFloat(getComputedStyle(track).gap || 16)
    const step = (card.getBoundingClientRect().width + gap) * 2 // desplaza de a 2
    track.scrollBy({ left: dir * step, behavior:'smooth' })
  }

  return (
    <section id="universos" className="universos">
      <div className="u-container">
        <h2 className="u-title">NUESTROS UNIVERSOS</h2>

        <div className="u-tabs" role="tablist" aria-label="Categorías">
          <button className={`u-tab ${tab==='cervezas'?'active':''}`} onClick={()=>setTab('cervezas')}>CERVEZAS</button>
          <button className={`u-tab ${tab==='cafe'?'active':''}`}      onClick={()=>setTab('cafe')}>CAFE</button>
          <button className={`u-tab ${tab==='miel'?'active':''}`}      onClick={()=>setTab('miel')}>MIEL CON TERPENOS</button>
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
                  <div className="u-price">${p.price.toLocaleString('es-AR')},00</div>
                  <a className="u-buy" href={p.url} target="_blank" rel="noreferrer">Comprar</a>
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