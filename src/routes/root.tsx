import { Outlet } from "react-router-dom";
import Navigation from "../components/Navigation";

const Root = () => {
    return (
        <div className="flex flex-col md:flex-row relative h-screen">
            <div className=" fixed top-0 mb-5 w-full ">
                <Navigation />
            </div>
            <div className="w-screen mt-10">
                <Outlet />
            </div>
        </div>
    )
};

export default Root;