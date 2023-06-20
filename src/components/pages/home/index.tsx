
import Image1 from "../../../assets/background.jpg";
import Image2 from "../../../assets/background2.jpg";
import LatestSection from "./LatestSection";
import MainContent from "./mainContent";
import UpcomingSection from "./UpcomingSection";
import React from "react";
const Home = () => {

    return (
        <>
            <div className="bg-cover bg-center  h-screen " style={{ backgroundImage: `url(${Image1})` }}>
                <MainContent />
            </div>
            <div className="bg-cover  bg-center  min:h-screen " style={{ backgroundImage: `url(${Image2})` }}>
                <LatestSection />
                <UpcomingSection />
            </div>

        </>
    );
};

export default Home;
