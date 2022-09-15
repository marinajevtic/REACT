import { useLocation } from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch';

// styles
import './Search.css';

// components
import DestinationList from '../../components/DestinationList';

export default function Search() {
  const queryString = useLocation().search; // current URL
  const queryParams = new URLSearchParams(queryString);
  const query = queryParams.get('q');

  const url = 'http://localhost:3000/destinations?q=' + query;
  const { error, isPending, data } = useFetch(url);

  return (
    <div>
      <h2 className='page-title'>Tura u kojoj se posećuje "{query}"</h2>
      {error && <p className='error'>{error}</p>}
      {isPending && <p className='loading'>Ucitavanje...</p>}
      {data && <DestinationList destinations={data}/>}
    </div>
  )
}
