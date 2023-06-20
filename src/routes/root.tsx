import React from 'react'
import { Outlet } from "react-router-dom";
import Navigation from "../components/Navigation";
import Footer from "../footer";

function Root() {
    return (
        <div className="flex flex-col  h-screen">
            <div className=" fixed top-0 z-10 mb-5 w-full ">
                <Navigation />
            </div>
            <div className="h-screen ">
                <div className="w-full mt-10 overflow-y-auto ">
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