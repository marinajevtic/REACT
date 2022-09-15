import { useParams } from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch';

// styles
import './Destination.css';

export default function Destination() {
  const { id } = useParams();
  const url = 'http://localhost:3000/destinations/' + id;
  const { error, isPending, data: destination } = useFetch(url);

  return (
    <div className={`destination`}>
      {error && <p className='error'>{error}</p>}
      {isPending && <p className='loading'>Ucitavanje...</p>}
      {destination && (
        <div>
          <h2 className='page-title'>{destination.title}</h2>
          <p>Aranzman traje {destination.duration}.</p>
          <ul>
            {destination.attractions.map(attraction => <li key={attraction}> {attraction} </li>)}
          </ul>
          <p className='method'>{destination.description}</p>
        </div>
      )}
    </div>
  )
}
