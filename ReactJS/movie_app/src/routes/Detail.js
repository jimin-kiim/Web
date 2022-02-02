import React from "react";

class Detail extends React.Component {
    componentDidMount() {
        const { location, history } = this.props;
        if (location.state === undefined) {
            history.push("/");
        }
    }
    render() {
        const { location } = this.props;

        if (location.state) {
            return (
                <div>
                    <img src={location.state.poster} />
                    <h1>{location.state.title}</h1>
                    <h4>{location.state.year}</h4>
                    <h4>{location.state.summary}</h4>
                    <ul>
                        {location.state.genres.map((genre, index) => (
                            <li key={index} className="genres_genre">
                                {genre}
                            </li>
                        ))}
                    </ul>
                </div>
            );
        } else {
            return null;
        }
    }
}
export default Detail;
