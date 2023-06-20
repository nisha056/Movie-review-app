import { Pagination } from "@mantine/core";
import axios from "axios";
import { useEffect, useState } from "react";
import BrowseCard from "./BrowseCard";


const BrowseCardSection = () => {
    const [movies, setMovies] = useState<any | null>(null);
    const [pageCount, setPageCount] = useState(1);
    const handlePageChange = (page: number) => {
        setPageCount(page);
    }

    useEffect(() => {
        axios.get(`https://yts.mx/api/v2/list_movies.json?limit=20&page=${pageCount}`)
            .then((res) => {
                const value = res.data.data?.movies;
                setMovies(value);
            })

    }, [pageCount]);
    return (

        <>
            <div className="flex gap-2 items-center justify-center ">
                <p className="text-2xl mt-5 " style={{ color: "#6AB036" }}>YIFY Movies </p>
                <p className="text-2xl mt-5" style={{ color: "#6AB036" }}>- page {pageCount}</p>
            </div>
            <div className="mt-5 flex justify-center">
                <Pagination total={20} color="lime" withEdges value={pageCount} onChange={handlePageChange} />
            </div>
            <div className="grid grid-cols-5 mt-10 mx-10">
                {movies?.map((movie: any, index: any) => (
                    <BrowseCard key={index} details={movie} />
                ))}
            </div>
            <div className="mt-5 flex justify-center ">
                <Pagination total={20} color="lime" withEdges className="mb-20" value={pageCount} onChange={handlePageChange} />
            </div>
        </>
    )
}
export default BrowseCardSection;