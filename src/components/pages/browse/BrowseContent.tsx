
const BrowseContent = () => {
    return (
        <>
            <div className="flex flex-col gap-5 ml-20  ">
                <h1 className="  mt-20 text-2xl flex  gap-5 ml-20" style={{ color: "#5A5A56" }}> Search Term:</h1>

                <div className="flex gap-5 ml-20">
                    <input className=" rounded w-3/4" style={{ backgroundColor: "#282828", color: "white" }} />
                    <button className="p-2 w-20 mr-20  text-white font-bold rounded" style={{ backgroundColor: "#6AC045" }}>Search</button>
                </div>
                <div className="flex gap-8 ml-20 items-center ">
                    <div>
                        <label className="text-2xl mb-2 " style={{ color: "#5A5A56" }}>
                            Quality:

                            <select className="w-full mt-5" style={{ backgroundColor: "#282828" }} placeholder="All">
                                <option value="all">All</option>

                                <option value="480p">480p</option>
                                <option value="720">720p</option>
                                <option value="1080">1080p</option>
                                <option value="2160">2160p</option>
                                <option value="3D">3D</option>
                            </select>
                        </label>

                    </div>
                    <div>
                        <label className="text-2xl" style={{ color: "#5A5A56" }}>
                            Genre:

                            <select className="w-full  mt-5" style={{ backgroundColor: "#282828" }} placeholder="All">
                                <option value="all">All</option>
                                <option value="Adventure">Adventure</option>
                                <option value="Comic">Comic</option>
                                <option value="Thriller">Thriller</option>
                            </select>
                        </label>

                    </div>
                    <div>
                        <label className="text-2xl  " style={{ color: "#5A5A56" }}>
                            Rating:

                            <select className="w-full  mt-5" style={{ backgroundColor: "#282828" }} placeholder="All">
                                <option value="all">All</option>
                                <option value="9+">9+</option>
                                <option value="8+">8+</option>
                                <option value="8-">8-</option>
                            </select>
                        </label>

                    </div>
                    <div>
                        <label className="text-2xl " style={{ color: "#5A5A56" }}>
                            Year:

                            <select className="w-full  mt-5" style={{ backgroundColor: "#282828" }} placeholder="All">
                                <option value="all">All</option>
                                <option value="2000">2000</option>
                                <option value="1990">1990</option>
                                <option value="1980">1980</option>
                            </select>
                        </label>

                    </div>
                    <div>
                        <label className="text-2xl " style={{ color: "#5A5A56" }}>
                            Language

                            <select className="w-full  mt-5" style={{ backgroundColor: "#282828" }} placeholder="All">
                                <option value="all">All</option>
                                <option value="English">English</option>
                                <option value="Nepali">Nepali</option>
                                <option value="Russian">Russian</option>
                            </select>
                        </label>

                    </div>
                    <div>
                        <label className="text-2xl " style={{ color: "#5A5A56" }}>
                            Order By :

                            <select className="w-full  mt-5" style={{ backgroundColor: "#282828" }} placeholder="All">
                                <option value="all">All</option>
                                <option value="Latest">Latest</option>
                                <option value="Oldest">Oldest</option>
                                <option value="Featured">Featured</option>
                            </select>
                        </label>

                    </div>
                </div>
            </div>
        </>


    )
};
export default BrowseContent;