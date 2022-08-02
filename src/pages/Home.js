import catalogue from "../catalogue.json";
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <ul>
        {catalogue.map(film => (
            <div key={film.id}>
                <Link to={`/Film/${film.id}`}>{film.title}</Link>
            </div>
              ))}
        </ul>
    </div>
  );
};

export default Home;
