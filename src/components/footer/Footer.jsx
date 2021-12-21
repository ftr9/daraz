import './Footer.css'

import { Footerone, Footertwo, Footerthree } from './section'
import { useLocation } from 'react-router-dom'

const Footer = () => {
  const location = useLocation()

  return (
    <div className="footer">
      <Footerone />
      <Footertwo />
      {location.pathname === '/' ? (
        <Footerthree />
      ) : (
        <div style={{ width: '80%', margin: '0 auto' }}>&copy; Daraz 2021</div>
      )}
    </div>
  )
}

export default Footer
