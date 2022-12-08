import { useState } from 'react';
import { useLocation } from 'wouter';
import './Search.css';

export default function Search() {
  const [location, setLocation] = useLocation('#');
  const [query, setQuery] = useState('');
  return (
    <form onSubmit={() => setLocation(`/gif/${query}`)}>
      <div>
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          type="text"
          placeholder="Busca todos los Gifs que quieras"
        ></input>
        <button type="submit">Buscar</button>
      </div>
    </form>
  );
}
