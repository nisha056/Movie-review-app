import { Card, Modal, TextInput } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { SearchNormal1 } from "iconsax-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginContent from "./pages/login";

const Navigation = () => {
    const navigate = useNavigate();
    const [opened, { open, close }] = useDisclosure(false);
    const [modalView, setModalView] = useState<string>('login');

    const handleNavigate1 = () => {
        navigate("/");
    };

    const handleNavigate2 = () => {
        navigate("/4k");
    };
    const handleNavigate3 = () => {
        navigate("/trending");
    };
    const handleNavigate4 = () => {
        navigate("/browse");
    };

    return (
        <main>
            <div
                className="navigation-bar flex justify-between  items-center"
                style={{ background: "#1D1D1D", height: "60px", fontSize: "14px" }}
            >
                <div className="navigation-start items-center flex gap-5">
                    <div className="w-full ml-20">
                        <img
                            src="https://yts.mx/assets/images/website/logo-YTS.svg"
                            alt="Logo"
                            className="mt-2 mb-2 object-scale-down"
                        />
                    </div>
                    <div className="text-xl whitespace-nowrap mt-2" style={{ color: "#7B7B7B" }}>
                        HD movies at the smallest file size.
                    </div>
                </div>

                <div className="navigation-search">
                    <div>
                        <Card radius="xl" size="sm" withBorder style={{ background: "#1D1D1D", borderColor: "gray", height: "40px", padding: "1px" }}>
                            <div className="flex items-center mt-1 ">
                                <TextInput
                                    placeholder="Quick Search"
                                    radius="xl"
                                    variant="unstyled"
                                    size="xs"
                                    styles={{
                                        input: {
                                            color: "gray",
                                        },

                                    }}
                                    icon={<SearchNormal1 size="0.8rem" />}
                                />

                            </div>

                        </Card>


                    </div>
                </div>

                <div className="navigation-content flex gap-5 items-center text-sm text-gray-400">
                    <button onClick={handleNavigate1}  >Home</button>
                    <button onClick={handleNavigate2} style={{ color: "#5AB242" }}>
                        4k
                    </button>
                    <button onClick={handleNavigate3} >Trending</button>
                    {/* <button onClick={handleNavigate3} onMouseEnter={handleHover} style={{ color: isHovered ? 'white' : 'gray' }} onMouseLeave={handleNotHover} >Trending</button> */}
                    <button onClick={handleNavigate4}>Browse Movies</button>
                </div>

                <div className="navigation-button flex gap-2 mr-20">
                    <Modal size="lg" opened={opened} onClose={close} >
                        <LoginContent startingTab={modalView} />
                    </Modal>
                    <button onClick={() => {
                        setModalView('login');
                        open()
                    }} className="text-white font-bold text-sm">Log in</button>
                    <div className="text-white mt-2">|</div>
                    <button onClick={() => {
                        setModalView('register');
                        open()
                    }} className="text-white font-bold text-sm">Register</button>
                </div>
            </div >
            <section></section>
        </main >
    );
};

export default Navigation;
