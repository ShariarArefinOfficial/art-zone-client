
import { Outlet } from 'react-router-dom'
//import './App.css'
import NavBar from './components/Similar/NavBar/NavBar'
import Footer from './components/Similar/Footer/Footer'

function App() {

  return (
    <div>
      <NavBar></NavBar>
      <Outlet></Outlet>
      <Footer></Footer>
      
    </div>
  )
}

export default App
