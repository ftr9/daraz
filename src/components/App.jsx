import './App.css'

import Footer from './footer/Footer.jsx'
import Header from './header/Header.jsx'
import SectionOne from './section/SectionOne'
const App = () => {
  window.onscroll = e => {
    console.log(document.documentElement.scrollTop)
  }

  return (
    <div className="app__main">
      <Header />
      <div className="app__section">
        <SectionOne />
      </div>
      <Footer />
    </div>
  )
}

export default App
