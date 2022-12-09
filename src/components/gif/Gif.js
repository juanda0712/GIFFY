import './Gif.css';
import { Link } from 'wouter';

export default function Gif({ title, url, id }) {
  return (
    <div className="Gif">
      <Link to={`/gif/${id}`}>
        <a>
          <img src={url} alt={title} />
        </a>
      </Link>
    </div>
  );
}
