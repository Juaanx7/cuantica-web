import { useState } from 'react'
import './FAQSection.scss'

const FAQ = [
  {
    group: 'Envíos y Pagos',
    items: [
      {
        q: '¿A qué partes de Argentina envían?',
        a: '¡Llegamos a todos los rincones del país! Usamos ........ para que tu pedido llegue seguro a la puerta de tu casa.',
      },
      {
        q: '¿Cuánto cuesta el envío y cuánto tarda?',
        a: 'El costo y el tiempo dependen de tu ubicación. Podés calcularlo fácilmente antes de finalizar la compra, ingresando tu código postal en el carrito. ¡Y recordá que en compras superiores a $(Monto) el envío es gratis!',
      },
      {
        q: '¿Cómo es el empaquetado? ¿Es discreto?',
        a: 'Tu privacidad es nuestra prioridad. Todos los pedidos se envían en cajas genéricas, sin logos ni ninguna referencia al contenido. Queremos que tu experiencia sea cómoda y 100% segura.',
      },
      {
        q: '¿Qué métodos de pago aceptan?',
        a: 'Podés pagar como te quede más cómodo. Aceptamos todas las tarjetas de crédito y débito a través de Mercado Pago, transferencia bancaria (con un X% de descuento) y otros medios.',
      },
      {
        q: 'Compré, ¿y ahora qué? ¿Cómo sigo mi pedido?',
        a: '¡Gracias por tu compra! Una vez que despachemos tu pedido, te va a llegar un mail con el código de seguimiento para que puedas ver dónde está tu paquete en cada momento.',
      },
    ],
  },
  {
    group: 'Sobre el Universo del Cultivo y Parafarmelia',
    items: [
      { q: '¿Vender estos productos es legal?', a: '¡Totalmente! Todos nuestros productos (insumos de cultivo, parafernalia, etc.) son 100% legales en Argentina. Fomentamos el autocultivo responsable dentro del marco de la ley REPROCANN.' },
      { q: 'Soy principiante, ¿qué necesito para empezar a cultivar?', a: '¡Bienvenido/a a este universo! Para arrancar, te recomendamos nuestro "Kit de Iniciación al Cultivo", que tiene todo lo básico. Si tenés dudas más específicas, no dudes en escribirnos a nuestro WhatsApp, ¡nos encanta ayudar!' },
      { q: '¿Qué garantía tienen los vaporizadores u otros artículos electrónicos?', a: 'Todos nuestros productos electrónicos cuentan con la garantía oficial del fabricante. Si tenés algún problema, contactanos y te ayudamos a gestionarla.' },
    ],
  },
  {
    group: 'Sobre el Universo del Café y Cerveza',
    items: [
      { q: '¿Venden el café en grano o molido?', a: '¡Como vos prefieras! Podés elegir cada café en grano para conservar su frescura, o podemos molerlo en el momento según el método que uses (espresso, filtrada, etc.). Simplemente seleccionalo en la página del producto.' },
      { q: '¿Cómo me aseguro que las cervezas lleguen bien y no se rompan?', a: 'Respuesta sugerida: ¡Cuidamos nuestras birras como si fueran de oro! Usamos embalajes especiales súper resistentes para protegerlas durante el viaje y que lleguen a tu casa listas para enfriar y disfrutar.' },
      { q: 'No conozco mucho de cerveza artesanal, ¿cuál me recomiendan?', a: '¡Qué bueno que te animes a explorar! En la descripción de cada cerveza te contamos sobre su sabor y estilo. Si buscás algo suave para empezar, una Honey o una Golden son ideales. Si te animás a algo más intenso, una IPA es un viaje de ida.' },
    ],
  },
  {
    group: 'Sobre CUÁNTICA y el Local Físico',
    items: [
      { q: '¿Tienen un local físico? ¿Puedo retirar mi compra ahí?', a: '¡Claro que sí! Nuestro corazón está en San Marcos Sierra, Córdoba. Podés elegir la opción "Retirar en el local" al finalizar tu compra y pasar a buscar tu pedido sin costo. ¡Nos encantaría conocerte! La dirección es [Tu Dirección].' },
      { q: '¿Los precios de la web son los mismos que en el local?', a: 'Generalmente sí. A veces, podemos tener promos exclusivas online o descuentos especiales en el local, ¡así que te conviene seguirnos en Instagram para no perderte nada!' },
    ],
  },
]

export default function FAQSection() {
  const [openId, setOpenId] = useState(null)

  const toggle = (id) => {
    setOpenId((prev) => {
      const next = prev === id ? null : id
      if (next) {
        requestAnimationFrame(() => {
          const el = document.getElementById(next)
          if (!el) return
          el.scrollIntoView({
            behavior: 'smooth',
            block: 'center',
          })
        })
      }

      return next
    })
  }


  return (
    <section id="preguntasfrecuentes" className="faq">
      <div className="faq-container">
        <h2 className="faq-title">FAQs</h2>

        {FAQ.map((block, bi) => (
          <div className="faq-block" key={block.group}>
            <h3 className="faq-subtitle">{block.group}</h3>

            <div className="faq-accordion">
              {block.items.map((item, ii) => {
                const id = `faq-${bi}-${ii}`
                const isOpen = openId === id

                return (
                  <div id={id} className={`faq-item ${isOpen ? 'is-open' : ''}`} key={id}>
                    <button
                      className="faq-q"
                      onClick={() => toggle(id)}
                      aria-expanded={isOpen}
                      aria-controls={`${id}-panel`}
                      type="button"
                    >
                      <span className="faq-q-text">{item.q}</span>
                      <span className="faq-q-icon" aria-hidden="true">
                        {isOpen ? '−' : '+'}
                      </span>
                    </button>

                    <div
                      id={`${id}-panel`}
                      className="faq-a"
                      role="region"
                      aria-label={`Respuesta: ${item.q}`}
                    >
                      <p>{item.a}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}