import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail() {
    const [loading, setLoading] = useState(true);
    const [movie, setMovie] = useState();
    const { id } = useParams(); // i'm going to get the value stored in the variable written in the path.
    // id, console.log(id)->{id:'38293'}
    //{id}, console.log(id)-> 38293
    const getMovie = async () => {
        const json = await (
            await fetch(
                `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
            )
        ).json();

        setMovie(json.data.movie);
        setLoading(false);
        console.log(movie);
    };
    useEffect(() => {
        getMovie();
    }, []);
    return (
        <div>
            {loading ? (
                <h1>Loading...</h1>
            ) : (
                <div>
                    <img src={movie.medium_cover_image} alt={movie.title} />
                    <h2>{movie.title}</h2>
                    <p>{movie.runtime} minutes</p>
                    <p>⭐️ {movie.rating}/10</p>
                    <ul>
                        {movie.genres &&
                            movie.genres.map((genre) => (
                                <li key={genre}>{genre}</li>
                            ))}
                    </ul>
                </div>
            )}
        </div>
    );
}
export default Detail;
