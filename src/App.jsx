import { BrowserRouter, Route, Routes } from "react-router-dom"
import "./App.css"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Highlights from "./components/Highlights"
import BookingPage from "./components/BookingPage"
import Testimonials from "./components/Testmonials"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Header />}>
          <Route
            index
            element={
              <>
                <Hero />
                <Highlights />
                <Testimonials />
              </>
            }
          />
          <Route path='/reservations' element={<BookingPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
