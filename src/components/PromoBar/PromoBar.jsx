import './PromoBar.scss'

export default function PromoBar() {
  return (
    <div className="promo" role="region" aria-label="Promoción">
      <div className="promo__container">
        <strong>¡Aprovechá! · ¡BIENVENIDO!</strong>
        <span> Usá el código <b>PROMOLANZAMIENTO</b> en tu primera compra y obtené un 15% de descuento a partir de $25.000</span>
      </div>
    </div>
  )
}