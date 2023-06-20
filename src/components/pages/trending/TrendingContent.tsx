import axios from "axios";
import { useEffect, useState } from "react";
import TrendingCard from "./TrendingCard";
import React from "react";

const TrendingContent = () => {

    const [movies, setMovies] = useState<any | null>(null);
    useEffect(() => {
        axios.get("https://yts.mx/api/v2/list_movies.json")
            .then((res) => {
                const value = res.data.data?.movies;
                setMovies(value);
            })

    }, [])

    return (
        <>
            <div className="flex flex-col items-center justify-center">
                <p className="mt-20 text-2xl font-bold" style={{ color: "#6AC045" }}>24h YIFY Trending Movies</p>

            </div>
            <div className="grid grid-cols-5 mx-10 mt-10  ">
                {movies?.map((movie: any, index: any) => (
                    <TrendingCard key={index} details={movie} />
                ))}
            </div>
        </>
    )
};
export default TrendingContent;