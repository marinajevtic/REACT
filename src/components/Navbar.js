import { Link } from 'react-router-dom';


// styles
import './Navbar.css';

// components
import SearchBar from './SearchBar';

export default function Navbar() {

    return (
        <div className='navbar' style={{}}>
            <nav>
               <Link to="/" className='brand'>
                    <h1>Turisticka agencija</h1>
               </Link> 
               <SearchBar />
               <Link to="/create">Dodaj destinaciju</Link>
            </nav>
        </div>
  )
}
