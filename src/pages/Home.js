import Catalogue from "../Catalogue.json";
import { Link } from 'react-router-dom'
import './Home.css';

const Home = () => {
  return (
    <div>
      <h1>AlloCinoche</h1>
      <ul className="film-list">
        {Catalogue.map(film => (
            <div className="film" key={film.id}>
                <Link to={`/Film/${film.id}`}>
                    <img className="film-image" src={film.image} alt={film.title} />
                    <h3 className="film-title">{film.title}</h3>
                    <h4 className="film-director">{film.director}</h4>
                </Link>
            </div>
              ))}
        </ul>
    </div>
  );
};

export default Home;
