import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from "./components/Layout/Header/Header"
import Home from "./components/Home/Home"
import Footer from "./components/Layout/Footer/Footer"
import Courses from "./components/Courses/Courses"
import Login from "./components/Auth/Login"
import Register from "./components/Auth/Register"
import ForgetPassword from "./components/Auth/ForgetPassword"
import ResetPassword from "./components/Auth/ResetPassword"
import Contact from "./components/Contact/Contact"
import About from "./components/About/About"
import Request from "./components/Request/Request"
const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/request" element={<Request />} />
        <Route path="/about" element={<About />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgetpassword" element={<ForgetPassword />} />
        <Route path="/resetpassword/:token" element={<ResetPassword />} />



      </Routes>
      <Footer/>
    </Router>
  )
}

export default App