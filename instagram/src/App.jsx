import './App.css'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import SignUp from './component/SignUp'
import SignIn from './component/SignIn'

function App() {


  return (
   <>
   <Router>
    <Routes>
      <Route exact path='/' element={<SignUp/>}/>
      <Route exact path='/signin' element={<SignIn/>}/>
    </Routes>
   </Router>
   </>
  )
}

export default App
