const FourkContent = () => {
    return (
        <div className="flex flex-col justify-between ml-20">

            <h1 className=" mt-20 mb-2 text-2xl" style={{ color: "#5A5A56" }}> Search Term:</h1>
            <div className="flex gap-5 justify-between">
                <input className="w-full" style={{ backgroundColor: "#282828", color: "white" }} />
                <button className="p-2  text-white font-bold" style={{ backgroundColor: "#6AC045" }}>Search</button>
            </div>




        </div>

    )
};
export default FourkContent;