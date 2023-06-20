import axios from "axios";
import { useEffect, useState } from "react";
import LatestCard from "./LatestCard";


const LatestSection = () => {

    const [newmoviess, setNewMoviess] = useState<any | null>(null)
    const [nextmovies, setNextMovies] = useState<any | null>(null);
    useEffect(() => {
        axios.get("https://yts.mx/api/v2/list_movies.json ")
            .then((res) => {
                const value1 = res.data.data?.movies.slice(5, 9);
                const value2 = res.data.data?.movies.slice(10, 14);
                setNewMoviess(value1);
                setNextMovies(value2);


            })

    }, [])

    return (

        <>
            <div className="flex justify-between gap-10  items-center ml-20">

                <h1 className="text-white font-bold ml-20  mt-10 mx-10">Latest YIFY Movies Torrents
                </h1>
                <p className="text-gray-500  mt-10 mr-10">
                    Browse All
                </p>



            </div>
            <div className="flex items-center justify-center gap-10 mt-10 flex-wrap">
                <div className="flex gap-10">
                    {newmoviess?.map((newmovie, index) => (
                        <LatestCard key={index} details={newmovie} />
                    ))}
                </div>
                <div className="flex gap-10">
                    {nextmovies?.map((nextmovie: any, index: any) => (
                        <LatestCard key={index} details={nextmovie} />
                    ))}
                </div>
            </div>


        </>



    )
};
export default LatestSection;