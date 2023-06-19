import { Pagination } from "@mantine/core";
import BrowseCard from "./BrowseCard";


const BrowseCardSection = () => {
    const ourmovies = [
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
            <div className="flex gap-2 items-center justify-center ">
                <p className="text-2xl mt-5 " style={{ color: "#6AB036" }}>YIFY Movies </p>
            </div>
            <div className="mt-5 flex justify-center">
                <Pagination total={10} color="lime" withEdges />
            </div>
            <div className="flex items-center justify-center gap-10 mt-10 flex-wrap">
                <div className="flex gap-10">
                    {ourmovies.map((ourmovie, index) => (
                        <BrowseCard key={index} image={ourmovie.img} details={ourmovie} />
                    ))}
                </div>
            </div>
            <div className="mt-5 flex justify-center ">
                <Pagination total={10} color="lime" withEdges className="mb-20" />
            </div>
        </>
    )
}
export default BrowseCardSection;