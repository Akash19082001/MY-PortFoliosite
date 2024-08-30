
import './App.css'
import Contect from './Components/Contact'
import Footer from './Components/Footer'
import Main from './Components/Main'
import Projects from './Components/Projects'
import Resume from './Components/Resume'
import Sidenav from './Components/Sidenav'
import Work from './Components/Work'

function App() {
  

  return (
    <div>
      <Sidenav/>
      <Main/>
      <Work/>
      <Resume/>
      <Projects/>
      <Contect/>
      <Footer/>
    </div>
  )
}

export default App
