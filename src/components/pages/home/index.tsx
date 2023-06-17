
import Image from "../../../assets/background.jpg";
import MainContent from "./mainContent";
import MovieCard from "./MovieCard";


const Home = () => {

    return (
        <>

            <div className="bg-cover bg-center w-screen h-screen" style={{ backgroundImage: `url(${Image})` }}>
                <MainContent />

            </div>

        </>
    );
};

export default Home;
