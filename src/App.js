import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from "./components/Layout/Header/Header"
import Home from "./components/Home/Home"
import Footer from "./components/Layout/Footer/Footer"
import Courses from "./components/Courses/Courses"
const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App