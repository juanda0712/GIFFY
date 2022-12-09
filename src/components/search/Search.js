import { useState } from 'react';
import { Link } from 'wouter';
import './Search.css';

export default function Search() {
  const [query, setQuery] = useState('');
  return (
    <form>
      <div>
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          type="text"
          placeholder="Busca todos los Gifs que quieras"
        />
        <Link to={`/gifs/${query}`} type="submit">
          <a className="button">Buscar</a>
        </Link>
      </div>
    </form>
  );
}
