import { Star1, WifiSquare } from "iconsax-react";
import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import axios from 'axios';

const MainContent = () => {
    const [moviess, setMoviess] = useState<any[] | null>(null);
    useEffect(() => {
        async function getMovie() {
            axios.get("https://yts.mx/api/v2/list_movies.json").then((res) => {
                const temp = res.data.data?.movies?.slice(0, 4);
                setMoviess(temp);
            })
        }
        getMovie()
    }, [])
    return (

        <div className="flex flex-col items-center  ">
            <h1 className="text-white text-4xl font-bold mt-10 mb-5">Download YTS YIFY movies: HD smallest size</h1>
            <p className="text-white text-[15px]">
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
                    <p className="text-lg font-bold text-white ">Popular downloads</p>

                </div>
                <div className="flex gap-3 ">
                    <WifiSquare
                        size="24"
                        color="#EF9D39"
                        variant="Bold"
                    />
                    <p className=" font-bold text-blue-600">more featured..</p>

                </div>

            </div>
            <section className="flex flex-col gap-2 ">
                <div className="flex justify-center " style={{ color: "white" }}>_________________________________________________________________________________________________________________________________________</div>

                <div className="flex items-center justify-center flex-wrap  gap-10 ">
                    {
                        moviess?.map((movie, index) => {
                            return (
                                <MovieCard key={index} details={movie} />
                            )
                        })
                    }

                </div>






            </section>

        </div>


    );
}
export default MainContent;