import './App.css'

import Footer from './footer/Footer.jsx'
import Header from './header/Header.jsx'
import SectionOne from './section/SectionOne'
import SectionTwo from './section/SectionTwo'
import SectionThree from './section/SectionThree'

const App = () => {
  return (
    <div className="app__main">
      <Header />
      <div className="app__section">
        <SectionOne />
        <SectionTwo />
        <SectionThree />
      </div>
      <Footer />
    </div>
  )
}

export default App
