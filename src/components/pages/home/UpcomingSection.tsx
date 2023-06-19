import UpcomingCard from "./UpcomingCard";

const UpcomingSection = () => {
    const upcomings = [
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
            <div className="flex justify-between gap-10 w-full items-center">


                <h1 className="text-white font-bold ml-20  mt-20">Upcoming YIFY Movies
                </h1>
                <p className="text-gray-500 mr-20 mt-20">
                    Request a movie
                </p>
            </div>
            <div className="flex items-center justify-center gap-10 mt-10 flex-wrap">
                <div className="flex gap-10">
                    {upcomings.map((upcoming, index) => (
                        <UpcomingCard key={index} image={upcoming.img} details={upcoming} />
                    ))}

                </div>
            </div>
        </>

    )
};
export default UpcomingSection;