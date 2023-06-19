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

    return (
        <>
            <div className="flex flex-col items-center justify-center">
                <p className="mt-20 text-2xl font-bold" style={{ color: "#6AC045" }}>24h YIFY Trending Movies</p>

            </div>
            <div className="flex items-center justify-center gap-10 mt-10 flex-wrap">
                <div className="flex gap-10 mb-20 ">
                    {trendingmovies.map((trendingmovie, index) => (
                        <TrendingCard key={index} image={trendingmovie.img} details={trendingmovie} />
                    ))}
                </div>
            </div>
        </>
    )
};
export default TrendingContent;