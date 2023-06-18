import LatestCard from "./LatestCard";


const LatestSection = () => {
    const newmovies = [
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
        {
            id: 5,
            img: "https://img.yts.mx/assets/images/movies/custody_2023/medium-cover.jpg",
            description: "Custody",
            date: 2023,

        },

        {
            id: 6,
            img: "https://img.yts.mx/assets/images/movies/on_sacred_ground_2023/medium-cover.jpg",
            description: "On Sacred Ground",
            date: 2023,

        },
        {
            id: 7,
            img: "https://img.yts.mx/assets/images/movies/about_my_father_2023/medium-cover.jpg",
            description: "About My Father",
            date: 2023,

        },
        {
            id: 8,
            img: "https://img.yts.mx/assets/images/movies/extraction_2_2023/medium-cover.jpg",
            description: "Extraction 2",
            date: 2023,

        },


    ];
    const firstFourMovies = newmovies.slice(0, 4);
    const remainingMovies = newmovies.slice(4);
    return (

        <>
            <div className="flex justify-between w-full items-center">


                <h1 className="text-white font-bold ml-20  mt-10">Latest YIFY Movies Torrents
                </h1>
                <p className="text-gray-500 mr-20 mt-10">
                    Browse All
                </p>
            </div>
            <div className="flex items-center justify-center gap-10 mt-10 flex-wrap">
                <div className="flex gap-10">
                    {firstFourMovies.map((newmovie, index) => (
                        <LatestCard key={index} image={newmovie.img} details={newmovie} />
                    ))}
                </div>
                <div className="flex gap-10">
                    {remainingMovies.map((newmovie, index) => (
                        <LatestCard key={index} image={newmovie.img} details={newmovie} />
                    ))}
                </div>
            </div>


        </>



    )
};
export default LatestSection;