export default function getSingleGif({ identifier }) {
  const GIF_URL_API = `https://api.giphy.com/v1/gifs/${identifier}?api_key=FgN6G4jeX9WboiCViDXuABdg23HbGBYc`;

  return fetch(GIF_URL_API)
    .then((res) => res.json())
    .then((response) => {
      const { type, id, slug, title, rating, images } = response.data;
      const { url } = images.original;
      const gif = { type, id, slug, title, rating, url };
      return gif;
    });
}
