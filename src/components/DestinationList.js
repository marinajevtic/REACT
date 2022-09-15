import { Link } from 'react-router-dom';

// styles
import './DestinationList.css';

export default function DestinationList({ destinations }) {
  

  if(destinations.length === 0) {
    return <div className='error'>Nema destinacija</div>
  }

  return (
    <div className='destination-list'>
        {destinations.map(destination => (
            <div key={destination.id} className={`card`}>
                <h3>{destination.title}</h3>
                <p>Trajanje aranzmana: {destination.duration}.</p>
                <div>{destination.description.substring(0, 100)}...</div>
                <Link to={`/destinations/${destination.id}`}>Istrazi</Link>
            </div>
        ))}
    </div>
  )
}
