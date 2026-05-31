import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Card from './components/Card'

function App() {
  
  return (
    <>
     <Navbar />
     <Footer />
     <div className="cards">
      <Card title="Card 1" desc="Card 1 description" />
      <Card title="Card 2" desc="Card 2 description" />
      <Card title="Card 3" desc="Card 3 description" />
     </div>    
    </>
  )
}

export default App
