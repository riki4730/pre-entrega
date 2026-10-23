// importaciones
import { useState, useEffect } from 'react'
import Item from './Item'
import './Productos.css'

function ItemListContainer({ titulo }) {
  // estados
  const [productos, setProductos] = useState([])
  const [cargando, setCargando] = useState(true)
  const [error, setError] = useState(false)

  // fetch de productos
  useEffect(() => {
    fetch('/productos.json')
      .then((res) => res.json())
      .then((data) => {
        setProductos(data)
        setCargando(false)
      })
      .catch((err) => {
        console.log('error en el fetch', err)
        setError(true)
        setCargando(false)
      })
  }, [])

  if (cargando) {
    return <p>Cargando productos...</p>
  }

  if (error) {
    return <p>Hubo un error al cargar los productos</p>
  }

  return (
    <section>
      <h2>{titulo}</h2>

      {/* lista */}
      <div className="lista-productos">
        {productos.map((prod) => (
          <Item
            key={prod.id}
            nombre={prod.nombre}
            precio={prod.precio}
            categoria={prod.categoria}
            imagen={prod.imagen}
          />
        ))}
      </div>
    </section>
  )
}

export default ItemListContainer
