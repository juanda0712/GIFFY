import './Gif.css';

export default function Gif({ title, url, id }) {
  return (
    <div className="Gif">
      <a href={`#${id}`}>
        <img src={url} alt={title} />
      </a>
    </div>
  );
}
