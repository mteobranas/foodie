import { BrowserRouter, Route, Routes } from "react-router-dom"
import "./App.css"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Highlights from "./components/Highlights"
import BookingPage from "./components/BookingPage"

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
