import React from "react";
import axios from "axios";
import Movie from "./Movie";
import "./App.css";
class App extends React.Component {
    state = {
        isLoading: true,
        movies: [],
    };
    getMovies = async () => {
        // const movies = await axios.get(
        //     "https://yts-proxy.nomadcoders1.now.sh/list_movies.json"
        // );
        // console.log(movies.data.data.movies);
        const {
            data: {
                data: { movies },
            },
        } = await axios.get(
            "https://yts-proxy.nomadcoders1.now.sh/list_movies.json?sort_by=rating"
        );
        // console.log(movies);
        // this.setState({movies:movies}) movies from setState : movies from axios
        this.setState({ movies, isLoading: false });
    };
    componentDidMount() {
        // setTimeout(() => {
        //     this.setState({ isLoading: false });
        // }, 6000);
        this.getMovies();
    }
    render() {
        const { isLoading, movies } = this.state;
        return (
            <section className="container">
                {isLoading ? (
                    <div className="loader">
                        <span className="loader_text">Loading...</span>
                    </div>
                ) : (
                    <div className="movies">
                        {movies.map((movie) => (
                            <Movie
                                key={movie.id}
                                id={movie.title}
                                year={movie.year}
                                title={movie.title}
                                summary={movie.summary}
                                poster={movie.medium_cover_image}
                                genres={movie.genres}
                            />
                        ))}
                    </div>
                )}
            </section>
        );
    }
}
//return (X) ; bc it's not a function
//insted, it has 'render'
//as render is a method(function of object), it has 'return'

export default App;
