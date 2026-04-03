import './App.css'
import AboutUs from './components/AboutUs'
import Footer from './components/Footer'
import Header from './components/Header'
import Menu from './components/Menu'
import Hero from './components/Hero'
import OurTeam from './components/OurTeam'
import Events from './components/Events'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import MenuCard from './ui/MenuCard'
import ContactUs from './components/ContactUs'
import CartPage from './components/CartPage'



function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <AboutUs />
              <div id="menu">
                <Menu />
              </div>
              <div id='hero'>
                <Hero />
              </div>
              <div id='team'>
                <OurTeam />
              </div>
              <div id='events'>
                <Events />
              </div>
              <div id='contact'>
                <ContactUs/>
              </div>
              <div id='footer'>
                <Footer />
              </div>
            </>
          }
        />
        <Route path="/menu/:id" element={<MenuCard />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>

    </Router>
  )
}

export default App