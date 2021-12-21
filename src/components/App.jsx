import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

////components
import Footer from './footer/Footer.jsx'
import Header from './header/Header.jsx'

////section components
import SectionOne from './section/SectionOne'
import SectionTwo from './section/SectionTwo'
import SectionThree from './section/SectionThree'

////page component
import { ErrorPage, ProductDetailPage } from './pages'

const AppMain = () => {
  return (
    <div className="app__section">
      <SectionOne />
      <SectionTwo />
      <SectionThree />
    </div>
  )
}

const App = () => {
  return (
    <Router>
      <div className="app__main">
        <Header />
        <Routes>
          <Route path="/" element={<AppMain />}></Route>
          <Route path="details/:id" element={<ProductDetailPage />}></Route>
          <Route path="*" element={<ErrorPage />}></Route>
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
