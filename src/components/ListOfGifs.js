import Gif from './gif/Gif';
import { useState, useEffect } from 'react';
import getGifs from '../services/getGifs';

export default function ListOfGifs({ params }) {
  const { category } = params;
  const [gifs, setGifs] = useState([]);

  useEffect(
    function () {
      getGifs({ category }).then((gifs) => setGifs(gifs));
    },
    [category]
  );

  return (
    <>
      {gifs.map(({ title, id, url }) => (
        <Gif key={id} title={title} url={url} id={id} />
      ))}
    </>
  );
}
