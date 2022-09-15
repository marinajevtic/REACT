import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch';

// styles
import './Create.css';

export default function Create() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [duration, setDuration] = useState('');
  const [newAttraction, setNewAttraction] = useState('');
  const [attractions, setAttractions] = useState([]);

  const attractionsInput = useRef(null);
  const navigate = useNavigate();

  const { postData, data } = useFetch('http://localhost:3000/destinations', 'POST');

  const handleSubmit = async (e) => {
    e.preventDefault();
    postData({ title, attractions, description, duration: duration + ' dana' });
  };

  const handleAdd = (e) => {
    e.preventDefault();
    const att = newAttraction.trim();

    if(att && !attractions.includes(att)) {
      setAttractions(prevAttractions => [...prevAttractions, newAttraction]);
    }

    setNewAttraction('');
    attractionsInput.current.focus(); // to stay inside of the input box
  };

  // redirect the user when we get data response
  useEffect(() => {
    if(data) {
      navigate('/'); // homepage
    }
  }, [data, navigate])

  return (
    <div className='create'>
        <h2 className='page-title'>Dodaj novu destinaciju</h2>

        <form onSubmit={handleSubmit}>

          <label>
            <span>Naziv destinacije:</span>
            <input 
              type="text"
              onChange={(e) => setTitle(e.target.value)} 
              value={title}
              required
            />
          </label>

          <label>
            <span>Opis destinacije:</span>
            <textarea 
              onChange={(e) => setDescription(e.target.value)} 
              value={description}
              required
            />
          </label>

          <label>
            <span>Turisticke atrakcije:</span>
            <div className='attractions'> 
              <input 
                type="text" 
                onChange={(e) => setNewAttraction(e.target.value)}
                value={newAttraction}
                ref={attractionsInput}
              />
              <button onClick={handleAdd} className='btn'>Dodaj</button>
            </div>
          </label>
          <p>Trenutne atrakcije: {attractions.map(att => <em>{att}, </em>)}</p>

          <label>
            <span>Trajanje putovanja (dana)</span>
            <input
              type="number"
              onChange={(e) => setDuration(e.target.value)}
              value={duration}
              required
            />
          </label>

          <button className='btn'>Sacuvaj</button>

        </form>

    </div>
  )
}
