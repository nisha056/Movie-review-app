import FourkCardSection from "./FourkCardSection";
import FourkContent from "./FourkContent";

const Fourk = () => {
    return (
        <>
            <div className="  bg-black w-full h-80">
                <FourkContent />

            </div>
            <div className="min-h-screen" style={{ backgroundColor: "#1D1D1D" }}>
                <FourkCardSection />
            </div>

        </>

    );
}
export default Fourk;