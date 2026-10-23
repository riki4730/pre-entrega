// importaciones
import './Productos.css'

function Item({ nombre, precio, categoria, imagen }) {
  // ruta de la imagen
  const rutaImagen = new URL(`../../assets/${imagen}`, import.meta.url).href

  return (
    <div className="item">
      <img src={rutaImagen} alt={nombre} />
      <h3>{nombre}</h3>
      <p className="item-categoria">{categoria}</p>
      <p className="item-precio">${precio}</p>
      <button>Ver más</button>
    </div>
  )
}

export default Item
