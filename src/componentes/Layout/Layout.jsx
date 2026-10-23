// importaciones
import './Layout.css'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

function Layout({ children }) {
  return (
    <div className="layout">
      <Header />

      {/* main */}
      <main className="layout-main">
        {children}
      </main>

      <Footer />
    </div>
  )
}

export default Layout
