// importaciones
import './Equipo.css'
import persona1 from '../../assets/persona1.jpg'
import persona2 from '../../assets/persona2.jpg'
import persona3 from '../../assets/persona3.jpg'

function Equipo() {
  return (
    <div className="equipo">
      <h3>Nuestro equipo</h3>

      <div className="equipo-tarjetas">
        {/* tarjeta 1 */}
        <div className="tarjeta">
          <img src={persona1} alt="Foto de Martina" />
          <h4>Martina</h4>
          <p>Diseño</p>
        </div>

        {/* tarjeta 2 */}
        <div className="tarjeta">
          <img src={persona2} alt="Foto de Lucas" />
          <h4>Lucas</h4>
          <p>Ventas</p>
        </div>

        {/* tarjeta 3 */}
        <div className="tarjeta">
          <img src={persona3} alt="Foto de Sofía" />
          <h4>Sofía</h4>
          <p>Atención al cliente</p>
        </div>
      </div>
    </div>
  )
}

export default Equipo
