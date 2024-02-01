import { Button } from "react-bootstrap"
import { Link, Navigate, Route, Routes } from "react-router-dom"
import Login from "./pages/login/Login"
import Signup from "./pages/signup/Signup"
import Films from "./pages/films/Films"
import Home from "./pages/home/Home"
import { useContext } from "react"
import { SessionContext } from "./contexts/SessionContext"

function App() {

  const { logout, user } = useContext(SessionContext)

  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            {user ? '' : <li>
              <Link to="/login">Login</Link>
            </li>}

            {user ? '' : <li>
              <Link to="/signup">Signup</Link>
            </li>}

            {user ? <li>
              <Link to="/films">Films</Link>
            </li> : ''}

            {user ? <button className="btn btn-outline-danger" onClick={logout}>logout</button> : ''}

          </ul>
        </nav>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/login" element={user ? <Navigate to="/films"></Navigate> : <Login></Login>}></Route>
          <Route path="/signup" element={<Signup></Signup>}></Route>
          <Route path="/films" element={<Films></Films>}></Route>
        </Routes>
      </main>
    </>
  )
}

export default App
