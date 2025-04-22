import "./App.css";
import MovieCard from "./components/MovieCard";

function App() {
    return (
        <div>
            <MovieCard
                movie={{ title: "Nolan's Film", release_date: "2014" }}
            />
        </div>
    );
}

export default App;
