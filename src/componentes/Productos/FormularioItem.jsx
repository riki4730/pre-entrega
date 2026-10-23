// importaciones
import { useState } from 'react'
import './Productos.css'

function FormularioItem() {
  // estados
  const [nombre, setNombre] = useState('')
  const [precio, setPrecio] = useState('')
  const [categoria, setCategoria] = useState('')
  const [imagen, setImagen] = useState(null)

  // función para enviar el formulario
  const handleSubmit = async (e) => {
    e.preventDefault()
    const form = e.target

    if (nombre === '' || precio === '' || categoria === '' || !imagen) {
      console.log('console de error en envio: faltan datos')
      return
    }

    console.log('Subiendo imagen a Imgbb..')

    //datos de la imagen
    const formData = new FormData()
    formData.append('image', imagen)

    try {
      // fetch a imgbb
      const apiKey = import.meta.env.VITE_IMGBB_API_KEY
      const response = await fetch(`https://api.imgbb.com/1/upload?key=${apiKey}`, {
        method: 'POST',
        body: formData,
      })

      const data = await response.json()
      const urlImagen = data.data.url

      console.log('Imagen subida con éxito.')
      console.log('URL:', urlImagen)

      // objeto con los datos completos
      const nuevoProducto = {
        nombre: nombre,
        precio: Number(precio),
        categoria: categoria,
        urlImagen: urlImagen,
      }

      console.log('Enviando los siguientes datos COMPLETOS a la API:')
      console.log(nuevoProducto)

      // limpiar
      setNombre('')
      setPrecio('')
      setCategoria('')
      setImagen(null)
      form.reset()
    } catch (error) {
      // console de error en envio
      console.log('Error al subir la imagen:', error)
    }
  }

  return (
    <section className="formulario">
      <h2>Cargar nuevo producto</h2>

      {/* formulario */}
      <form onSubmit={handleSubmit}>
        <label>Nombre</label>
        <input
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />

        <label>Precio</label>
        <input
          type="number"
          value={precio}
          onChange={(e) => setPrecio(e.target.value)}
        />

        <label>Categoría</label>
        <input
          type="text"
          value={categoria}
          onChange={(e) => setCategoria(e.target.value)}
        />

        <label>Imagen</label>
        <input
          type="file"
          accept=".jpg,.png"
          onChange={(e) => setImagen(e.target.files[0])}
        />

        <button type="submit">Agregar producto</button>
      </form>
    </section>
  )
}

export default FormularioItem