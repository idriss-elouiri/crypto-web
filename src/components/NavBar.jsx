import {FaBars , FaTimes} from 'react-icons/fa';
import "./NavBar.css"
import { useState } from 'react';
const NavBar = () => {
    const [click , setClick] = useState(false);
    const ShowMenu = () => setClick(!click)

    return ( 
        <header>
            <nav className='container'>
                <h1>De <span className='primary'>Fi</span></h1>
                <ul className={click? "list active" : "list"}>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Featured</a></li>
                    <li><a href="#">Earn</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
                <button className="btn">Connect Wallet</button>
                <div className="hamburger" onClick={ShowMenu}>
                    {click ? (<FaTimes size={30}/>) : (<FaBars size={30}/>)}            
                </div>
            </nav>
        </header>
     );
}
 
export default NavBar;