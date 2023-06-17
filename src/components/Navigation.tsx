import { Card, TextInput } from "@mantine/core";
import { SearchNormal1 } from "iconsax-react";
import { useNavigate } from "react-router-dom";

const Navigation = () => {
    const navigate = useNavigate();
    const handleNavigate1 = () => {
        navigate("/");
    }
    const handleNavigate2 = () => {
        navigate("/4k");
    }
    return (
        <>
            <main>
                <div className="navigation-bar flex justify-between items-center  " style={{ background: "#1D1D1D" }}>
                    <div className="navigation-start flex  gap-3 ">
                        <div className="w-full ml-20 ">
                            <img
                                src="https://yts.mx/assets/images/website/logo-YTS.svg"
                                alt="Logo"
                                className="mt-2 mb-2 object-scale-down   "
                            />
                        </div>
                        <div className=" text-xl w-full whitespace-nowrap mt-4" style={{ color: "#7B7B7B" }}>
                            HD movies at the smallest file size.
                        </div>

                    </div>

                    <div className="navigation-search p-2  ">

                        <div className=" ">
                            <Card radius="xl" size="sm" withBorder className="p-0.5 " style={{ background: "#1D1D1D", borderColor: "gray" }}>
                                <TextInput
                                    placeholder="Quick Search"
                                    radius="xl"
                                    variant="unstyled"
                                    size="sm"
                                    styles={{
                                        input: {
                                            color: 'gray',

                                        },
                                    }}
                                    icon={<SearchNormal1 size="0.8rem" />}
                                />


                            </Card>


                        </div>
                    </div>
                    <div className="navigation-content flex gap-5 items-center text-md  text-gray-400">
                        <button onClick={handleNavigate1}>Home</button>
                        <button onClick={handleNavigate2} style={{ color: "#5AB242" }}>4k</button>
                        <button>Trending </button>
                        <button> Browse Movies</button>
                    </div>
                    <div className="navigation-button flex gap-2 mr-5">
                        <button className="text-white font-bold">Log in</button>
                        <div className="text-white mt-6">|</div>
                        <button className="text-white font-bold">Register</button>
                    </div>
                </div>
                <section>

                </section>

            </main>
        </>
    )
}
export default Navigation;