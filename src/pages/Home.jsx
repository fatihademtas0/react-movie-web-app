import React, { useState } from "react";
import MovieCard from "../components/MovieCard";

function Home() {
    const [searchQuery, setSearchQuery] = useState("");

    const movies = [
        { id: 1, title: "John Wick", release_date: "2014" },
        { id: 2, title: "Spider-man : Homecoming", release_date: "2019" },
        { id: 3, title: "Matrix", release_date: "2000" },
        { id: 4, title: "Lord of The Rings", release_date: "2001" },
    ];

    const handleSearch = (e) => {
        e.preventDefault();
        setSearchQuery("");
    };

    return (
        <div className='home'>
            <form className='search-form' onSubmit={handleSearch}>
                <input
                    type='text'
                    placeholder='Search for movies...'
                    className='search-input'
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />

                <button type='submit' className='search-button'>
                    Search
                </button>
            </form>

            <div className='movies-grid'>
                {movies.map((movie) => (
                    <MovieCard movie={movie} key={movie.id} />
                ))}
            </div>
        </div>
    );
}

export default Home;
