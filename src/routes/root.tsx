import { Outlet } from "react-router-dom";
import Navigation from "../components/Navigation";
import Footer from "../footer";

const Root = () => {
    return (
        <div className="flex flex-col  h-screen">
            <div className=" fixed top-0 mb-5 w-full ">
                <Navigation />
            </div>
            <div className="h-screen overflow-y-auto">
                <div className="w-screen mt-10 ">
                    <Outlet />
                </div>
                <div className="  w-full  ">
                    <Footer />
                </div>

            </div>

        </div>
    )
};

export default Root;