import axios from "axios";
import { useEffect, useState } from "react";
import UpcomingCard from "./UpcomingCard";

const UpcomingSection = () => {

    const [upcomingss, setUpcomingss] = useState<any | null>(null);
    useEffect(() => {
        axios.get("https://yts.mx/api/v2/list_movies.json")
            .then((res) => {
                console.log(res.data.data.movies);
                const value = res.data.data?.movies.slice(12, 16);
                setUpcomingss(value);

            })
            .catch((err) => {
                console.log(err);

            })


    }, []);

    return (
        <>
            <div className="flex justify-between gap-10 items-center ml-20">


                <h1 className="text-white font-bold ml-20  mt-20">Upcoming YIFY Movies
                </h1>
                <p className="text-gray-500 mr-20 mt-20">
                    Request a movie
                </p>
            </div>
            <div className="flex items-center justify-center gap-10 mt-10  flex-wrap">
                <div className="flex gap-10 mb-20">
                    {upcomingss?.map((upcoming: any, index: any) => (
                        <UpcomingCard key={index} details={upcoming} />
                    ))}

                </div>
            </div>
        </>

    )
};
export default UpcomingSection;