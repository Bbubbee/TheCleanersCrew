

import Header from "./components/header/Header"
import About from "./components/about/About"
import Services from "./components/services/Services"
import Clients from "./components/clients/Clients"
import Footer from "./components/footer/Footer"

const App = () => {
  return (
    <div className="App">
      <Header />
      <About />
      <Services />
      <Clients />
      <Footer />
    </div>
  )
}

export default App