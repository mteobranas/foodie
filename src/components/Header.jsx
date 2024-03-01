import { Link, Outlet } from "react-router-dom"
import About from "./About"

export default function Header() {
  return (
    <>
      <header className='h-[100px] flex px-64 justify-between items-center'>
        <h1 className='text-4xl'>Foodie</h1>
        <nav>
          <ul className='flex justify-center items-center gap-4 ps-4'>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
            <li>
              <Link to='/menu'>Menu</Link>
            </li>
            <li>
              <Link to='/reservations'>Reservations</Link>
            </li>
            <li>
              <Link to='/online-order'>Online order</Link>
            </li>
            <li>
              <Link to='/login'>Login</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Outlet />
      <About />
    </>
  )
}
