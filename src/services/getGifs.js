export default function getGifs({ category = 'lofi' } = {}) {
  const API_URL = `https://api.giphy.com/v1/gifs/search?api_key=${process.env.REACT_APP_API_KEY}&q=${category}&limit=12&offset=0&rating=G&lang=en`;

  return fetch(API_URL)
    .then((res) => res.json())
    .then((response) => {
      const { data } = response;
      const gifs = data.map((gif) => {
        const { title, id, images } = gif;
        const { url } = images.downsized_medium;
        return { title, id, url };
      });
      return gifs;
    });
}
