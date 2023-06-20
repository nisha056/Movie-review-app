import axios from "axios";
import { useEffect, useState } from "react";
import TrendingCard from "./TrendingCard";

const TrendingContent = () => {
    const trendingmovies = [
        {
            id: 1,
            img: "https://img.yts.mx/assets/images/movies/custody_2023/medium-cover.jpg",
            description: "Custody",
            date: 2023,

        },

        {
            id: 2,
            img: "https://img.yts.mx/assets/images/movies/on_sacred_ground_2023/medium-cover.jpg",
            description: "On Sacred Ground",
            date: 2023,

        },
        {
            id: 3,
            img: "https://img.yts.mx/assets/images/movies/about_my_father_2023/medium-cover.jpg",
            description: "About My Father",
            date: 2023,

        },
        {
            id: 4,
            img: "https://img.yts.mx/assets/images/movies/extraction_2_2023/medium-cover.jpg",
            description: "Extraction 2",
            date: 2023,

        },

    ];
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