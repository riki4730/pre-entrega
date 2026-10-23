// importaciones
import './App.css'
import Layout from './componentes/Layout/Layout'
import ItemListContainer from './componentes/Productos/ItemListContainer'
import FormularioItem from './componentes/Productos/FormularioItem'

function App() {
  return (
    <Layout>
      <ItemListContainer titulo="Nuestros productos" />
      <FormularioItem />
    </Layout>
  )
}

export default App
