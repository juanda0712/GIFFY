import { useEffect, useState } from 'react';
import getSingleGif from '../../services/getSingleGif';
import './SingleGif.css';

export default function SingleGif({ params }) {
  const { identifier } = params;
  const [gif, setGif] = useState({});

  useEffect(
    function () {
      getSingleGif({ identifier }).then((data) => setGif(data));
    },
    [identifier]
  );

  return (
    <article className="article">
      <div className="text">
        <h2>{gif.title}</h2>
      </div>
      <div className="image">
        <img src={gif.url} alt={gif.slug} />
        <div></div>
      </div>
      <div className="text">
        <p>Tipo: {gif.type}</p>
        <p>Rating: {gif.rating}</p>
      </div>
    </article>
  );
}
