import './FAQSection.scss'

export default function FAQSection() {
  return (
    <section id="preguntasfrecuentes" className="faq">
      <div className="faq-container">

        <h2 className="faq-title">FAQs</h2>

        {/* === Envíos y Pagos === */}
        <div className="faq-block">
          <h3 className="faq-subtitle">Envíos y Pagos</h3>
          <ol className="faq-list">
            <li>
              <strong>¿A qué partes de Argentina envían?</strong><br/>
              ¡Llegamos a todos los rincones del país! Usamos ........ para que tu pedido llegue seguro a la puerta de tu casa.
            </li>
            <li>
              <strong>¿Cuánto cuesta el envío y cuánto tarda?</strong><br/>
              El costo y el tiempo dependen de tu ubicación. Podés calcularlo fácilmente antes de finalizar la compra, ingresando tu código postal en el carrito. ¡Y recordá que en compras superiores a $(Monto) el envío es gratis!
            </li>
            <li>
              <strong>¿Cómo es el empaquetado? ¿Es discreto?</strong><br/>
              Tu privacidad es nuestra prioridad. Todos los pedidos se envían en cajas genéricas, sin logos ni ninguna referencia al contenido.
            </li>
            <li>
              <strong>¿Qué métodos de pago aceptan?</strong><br/>
              Podés pagar como te quede más cómodo. Aceptamos todas las tarjetas de crédito y débito a través de Mercado Pago, transferencia bancaria (con un X% de descuento) y [Mencionar cualquier otro método que tengas].
            </li>
            <li>
              <strong>Compré, ¿y ahora qué? ¿Cómo sigo mi pedido?</strong><br/>
              ¡Gracias por tu compra! Una vez que despachemos tu pedido, te va a llegar un mail con el código de seguimiento para que puedas ver dónde está tu paquete en cada momento.
            </li>
          </ol>
        </div>

        {/* === Cultivo y Parafarmelia === */}
        <div className="faq-block">
          <h3 className="faq-subtitle">Sobre el Universo del Cultivo y Parafarmelia</h3>
          <ol className="faq-list">
            <li>
              <strong>¿Vender estos productos es legal?</strong><br/>
              ¡Totalmente! Todos nuestros productos (insumos de cultivo, parafernalia, etc.) son 100% legales en Argentina. Fomentamos el autocultivo responsable dentro del marco de la ley REPROCANN.
            </li>
            <li>
              <strong>Soy principiante, ¿qué necesito para empezar a cultivar?</strong><br/>
              ¡Bienvenido/a a este universo! Para arrancar, te recomendamos nuestro "Kit de Iniciación al Cultivo", que tiene todo lo básico. Si tenés dudas más específicas, no dudes en escribirnos a nuestro WhatsApp, ¡nos encanta ayudar!
            </li>
            <li>
              <strong>¿Qué garantía tienen los vaporizadores u otros artículos electrónicos?</strong><br/>
              Todos nuestros productos electrónicos cuentan con la garantía oficial del fabricante. Si tenés algún problema, contactanos y te ayudamos a gestionarla
            </li>
          </ol>
        </div>

        {/* === Café y Cerveza === */}
        <div className="faq-block">
          <h3 className="faq-subtitle">Sobre el Universo del Café y Cerveza</h3>
          <ol className="faq-list">
            <li>
              <strong>¿Venden el café en grano o molido?</strong><br/>
              ¡Como vos prefieras! Podés elegir cada café en grano para conservar su frescura, o podemos molerlo en el momento según el método que uses (espresso, filtrada, etc.). Simplemente seleccionalo en la página del producto.
            </li>
            <li>
              <strong>¿Cómo me aseguro que las cervezas lleguen bien y no se rompan?</strong><br/>
              ¡Cuidamos nuestras birras como si fueran de oro! Usamos embalajes especiales súper resistentes para protegerlas durante el viaje y que lleguen a tu casa listas para enfriar y disfrutar.
            </li>
            <li>
              <strong>No conozco mucho de cerveza artesanal, ¿cuál me recomiendan?</strong><br/>
              ¡Qué bueno que te animes a explorar! En la descripción de cada cerveza te contamos sobre su sabor y estilo. Si buscás algo suave para empezar, una Honey o una Golden son ideales. Si te animás a algo más intenso, una IPA es un viaje de ida.
            </li>
          </ol>
        </div>

        {/* === Cuántica y Local === */}
        <div className="faq-block">
          <h3 className="faq-subtitle">Sobre CUÁNTICA y el Local Físico</h3>
          <ol className="faq-list">
            <li>
              <strong>¿Tienen un local físico? ¿Puedo retirar mi compra ahí?</strong><br/>
              ¡Claro que sí! Nuestro corazón está en San Marcos Sierra, Córdoba. Podés elegir la opción "Retirar en el local" al finalizar tu compra y pasar a buscar tu pedido sin costo. ¡Nos encantaría conocerte! La dirección es [La Dirección].
            </li>
            <li>
              <strong>¿Los precios de la web son los mismos que en el local?</strong><br/>
              Generalmente sí. A veces, podemos tener promos exclusivas online o descuentos especiales en el local, ¡así que te conviene seguirnos en Instagram para no perderte nada!
            </li>
          </ol>
        </div>

      </div>
    </section>
  )
}