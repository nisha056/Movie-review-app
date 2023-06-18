import { Star1, WifiSquare } from "iconsax-react";
import MovieCard from "./MovieCard";
import WarningCard from "./WarningCard";

const MainContent = () => {
    const movies = [
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

        <div className="flex flex-col items-center  ">
            <h1 className="text-white text-5xl font-bold mt-20 mb-10">Download YTS YIFY movies: HD smallest size</h1>
            <p className="text-white">
                Welcome to the official YTS.MX website. Here you can browse and download YIFY movies in excellent<br />
                720p, 1080p, 2160p 4K and 3D quality, all at the smallest file size. YTS Movies Torrents.
            </p>
            <a className="font-bold text-blue-600 hover:text-blue-900" href="https://yts.mx">
                IMPORTANT - YTS.MX is the only new official domain for YIFY Movies
            </a>
            <div className="flex items-center justify-between">
                <div className="mr-2">
                    <img
                        src="https://yts.mx/images/telegram.svg"
                        alt="telegram"
                        width={16}
                        height={16}
                        className="object-scale-down"
                    />
                </div>
                <a className="font-bold text-blue-600 hover:text-blue-900" href="https://t.me/ytsmx_updates">
                    YTSMX_UPDATES
                </a>
                <p className="text-white ml-2"> |</p>
                <div className="mr-2 ml-2">
                    <img
                        src="https://yts.mx/images/twitter.svg"
                        alt="telegram"
                        width={16}
                        height={16}
                        className="object-scale-down"
                    />
                </div>
                <a className="font-bold text-blue-600 hover:text-blue-900" href="https://yts.mx">
                    Upcoming: THE WRATH OF BECKY (2023) on June 16. Two years after she escaped ...
                </a>
                <div>
                </div>
            </div>
            <div className="flex items-center gap-10 justify-between  ">
                <div className="flex gap-3">
                    <Star1 size="24" color="green" variant="Bold" />
                    <p className="text-lg font-bold text-white">Popular downloads</p>

                </div>
                <div className="flex gap-3 ">
                    <WifiSquare
                        size="24"
                        color="#EF9D39"
                        variant="Bold"
                    />
                    <p className="text-lg font-bold text-blue-600">more featured..</p>

                </div>

            </div>
            <section className="flex flex-col gap-5 ">
                <div className="flex justify-center " style={{ color: "white" }}>_________________________________________________________________________________________________________________________________________</div>

                <div className="flex items-center justify-center  gap-10 ">
                    {
                        movies.map((movie, index) => {
                            return (
                                <MovieCard key={index} image={movie.img} details={movie} />
                            )
                        })
                    }

                </div>






            </section>

        </div>


    );
}
export default MainContent;