import { Link } from "react-router-dom";
import {Mens } from './Mens'

export default function Navbar(){
  

  return (
    <div className="Navbar">

      <h1 className="heading">AJIO</h1>
      <ul className="list">
        <li> <Link to="/Mens">Men</Link></li>
        <li> <Link to="/Kids">Kids</Link></li>
        <li> <Link to="/Women">Women</Link></li>
        <li> <Link to="/Cart">Cart</Link></li>
      
      </ul>

    </div>
  )
}
