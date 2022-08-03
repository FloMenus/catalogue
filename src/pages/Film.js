import { useParams } from 'react-router-dom'
import { useState } from 'react'
import Catalogue from "../Catalogue.json";


const Film = () => {
    const params = useParams();
    const [film, setFilm] = useState(Catalogue[params.id - 1]);
    return (

        <div>
        <h2>{film.title}</h2>
        <img src={film.image} alt={film.image} />
        <h3>By {film.director}</h3>
        <h4>Casting</h4>
        {film.stars.map(actor => (
            <ul>
                <li>{actor}</li>
            </ul>
        ))}
        <h5>Synopsis: {film.description}</h5>
        </div>
    );
}

export default Film;