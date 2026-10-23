// importaciones
import styles from './Header.module.css'

function Header() {
  return (
    <header className={styles.header}>
      {/* logo */}
      <h1 className={styles.logo}>Mi Tienda de Ropa</h1>

      {/* nav */}
      <nav className={styles.nav}>
        <a href="#">Inicio</a>
        <a href="#">Productos</a>
        <a href="#">Contacto</a>
      </nav>
    </header>
  )
}

export default Header
