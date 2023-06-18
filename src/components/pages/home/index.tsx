
import Image1 from "../../../assets/background.jpg";
import Image2 from "../../../assets/background2.jpg";
import LatestSection from "./LatestSection";
import MainContent from "./mainContent";
import UpcomingSection from "./UpcomingSection";
const Home = () => {

    return (
        <>

            <div className="bg-cover bg-center w-screen h-screen " style={{ backgroundImage: `url(${Image1})` }}>
                <MainContent />
            </div>
            <div className="bg-cover bg-center w-screen h-screen" style={{ backgroundImage: `url(${Image2})` }}>
                <LatestSection />

            </div>
            <div className="bg-cover bg-center w-screen h-screen" style={{ backgroundImage: `url(${Image2})` }}>
                <UpcomingSection />

            </div>

        </>
    );
};

export default Home;
