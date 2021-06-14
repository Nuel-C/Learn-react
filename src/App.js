import './App.css';
import { Nav } from './components/Nav'
import { Dashboard } from './components/Dashboard'
import { Login } from './components/Login'
import { Signup } from './components/Signup'
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom'
import { Home } from './components/Home'
import { UserProvider } from './Context'
import { Computer } from './components/Computer'
import { Maths } from './components/Maths'
import { English } from './components/English'
import { Physics } from './components/Physics'
import { Read } from './components/Read'



function App() {
  return (
    <UserProvider>
      <Router>
          <Route exact path='/' render={props=>(
            <div>
              <Nav />
              <div className="App">
              <Home />
              </div>
            </div>
          )}/>
          <Route path = '/dashboard' component = {Dashboard} />
          <Route path = '/login' component = {Login} />
          <Route path = '/signup' component = {Signup} />
          <Route path = '/computer' component = {Computer} />
          <Route path = '/maths' component = {Maths} />
          <Route path = '/english' component = {English} />
          <Route path = '/physics' component = {Physics} />
          <Route path = '/read' component = {Read} />
          <Route render={() => <Redirect to={{pathname: "/"}} />} />
      </Router> 
    </UserProvider> 
  );
}

export default App;
