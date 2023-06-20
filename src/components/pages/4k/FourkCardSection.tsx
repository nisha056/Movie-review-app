import { Pagination } from "@mantine/core";
import axios from "axios";
import { useEffect, useState } from "react";
import FourkCard from "./FourkCard";

const FourkCardSection = () => {
    const [pageCount, setPageCount] = useState(1);
    const handlePageChange = (newPage: number) => {
        setPageCount(newPage);

    }
    const [movies, setMovies] = useState<any | null>(null);
    useEffect(() => {
        // axios.get("https://yts.mx/api/v2/list_movies.json?limit=20&page=6")
        axios.get(`https://yts.mx/api/v2/list_movies.json?limit=20&page=${pageCount}`)
            .then((res) => {
                const value = res.data.data?.movies;
                setMovies(value);
            }, [pageCount])

    })

    return (

        <>
            <div className="flex gap-2 items-center justify-center ">
                <p className="text-2xl mt-5" style={{ color: "#07BBC2" }}>2160p 4K</p>
                <p className="text-2xl mt-5" style={{ color: "#6AB036" }}>YIFY Movies (ordered by <i>latest</i>)</p>
                <p className="text-2xl mt-5" style={{ color: "#6AB036" }}>- page {pageCount}</p>
            </div>
            <div className="mt-5 flex justify-center">
                <Pagination total={20} color="lime" withEdges value={pageCount} onChange={handlePageChange} />
            </div>
            <div className="grid grid-cols-5 mx-10 mt-10">
                {movies?.map((movie: any, index: any) => (
                    <FourkCard key={index} details={movie} />
                ))}
            </div>
            <div className="mt-5 flex justify-center ">
                <Pagination total={10} color="lime" withEdges className="mb-10" value={pageCount} onChange={handlePageChange} />
            </div>
        </>
    )
}
export default FourkCardSection;