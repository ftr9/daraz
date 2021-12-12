import './Header.css'
import Mainnav from './Mainnav.jsx'
import Mininav from './Mininav.jsx'

const Header = () => {
  return (
    <div className="header">
      <Mininav />
      <Mainnav />
    </div>
  )
}

export default Header
