import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from "./components/Layout/Header/Header"
import Home from "./components/Home/Home"

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  )
}

export default App