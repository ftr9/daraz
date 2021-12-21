import { useState } from 'react'
import './Header.css'
import Mainnav from './Mainnav.jsx'
import Mininav from './Mininav.jsx'

import { useLocation } from 'react-router-dom'

const Header = () => {
  const [shrinkMininav, setShrinkMininav] = useState(false)
  const [openMainNavChild, setOpenMainNavChild] = useState(false)

  const location = useLocation()

  if (location.pathname === '/') {
    ////scroll and navigation bar change logic
    window.onscroll = e => {
      const scrolledTop = document.documentElement.scrollTop

      ////with jsut two scroll shrink Mininav
      if (scrolledTop >= 18) {
        setShrinkMininav(true)
      } else {
        setShrinkMininav(false)
      }

      ////open cta buttons
      if (scrolledTop >= 480) {
        setOpenMainNavChild(true)
      } else {
        setOpenMainNavChild(false)
      }
    }
  }

  ////shrinkStatus is passed as props in to mainnav because we need to show some shadow
  return (
    <div className="header">
      <Mininav shrinkStatus={shrinkMininav} />
      <Mainnav openStatus={openMainNavChild} shrinkStatus={shrinkMininav} />
    </div>
  )
}

export default Header
