import { useFetch } from '../../hooks/useFetch';

// styles
import './Home.css';

// components
import DestinationList  from '../../components/DestinationList';

export default function Home() {
  const { data, isPending, error } = useFetch('http://localhost:3000/destinations');

  return (
    <div className='home'>
      {error && <p className='error'>{error}</p>}
      {isPending && <p className='loading'>Ucitavanje...</p>}
      {data && <DestinationList destinations={data} />}
    </div>
  )
}
