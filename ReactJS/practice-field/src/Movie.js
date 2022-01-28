function Movie({ coverImg, title, summary, genres }) {
    return (
        <div>
            <img src={coverImg} alt={title} />
            <h2>{title}</h2>
            <p>{summary}</p>
            {hasOwnProperty("genres") ? (
                <ul>
                    {genres.map((genre) => (
                        <li key={genre}>{genre}</li>
                    ))}
                </ul>
            ) : null}
        </div>
    );
}

export default Movie;
