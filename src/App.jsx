import { BrowserRouter, Route, Routes } from "react-router-dom"
import MainPage from "./pages/MainPage"
import BasketPage from "./pages/BasketPage"
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from "./components/Header"

function App() {
  

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/basket" element={<BasketPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
