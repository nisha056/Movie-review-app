import { Tabs } from "@mantine/core";
import { useState } from "react";

const LoginContent = (props: any) => {
    const [activeTab, setActiveTab] = useState<string | null>(props.startingTab);

    return (
        <>
            <Tabs value={activeTab} onTabChange={setActiveTab}>
                <Tabs.List grow>
                    <Tabs.Tab value="login">Login</Tabs.Tab>
                    <Tabs.Tab value="register">Register</Tabs.Tab>
                </Tabs.List>

                <Tabs.Panel value="login">
                    <div className="flex flex-col justify-start  w-full mt-5 ">
                        <form className="space-y-7 items-center">
                            <input className="w-full p-3  rounded-lg placeholder-gray-400 border " placeholder="Username or Email" />
                            <input type="password" name="password" id="password" className="w-full p-3  rounded-lg placeholder-gray-400 border" placeholder="Password" />
                            <button className="p-3 w-full  font-medium text-white" style={{ backgroundColor: "#6AC045" }}>Login</button>
                        </form>
                    </div>
                    <div className="flex items-center justify-center mt-5">
                        <button className="underline">Forgot your password? </button>
                    </div>


                </Tabs.Panel>
                <Tabs.Panel value="register">
                    <div className="flex flex-col items-center justify-center  w-full mt-5 ">
                        <form className="space-y-7 items-center">
                            <input className="w-full p-3  rounded-lg placeholder-gray-400 border " placeholder="Username " />
                            <input className="w-full p-3  rounded-lg placeholder-gray-400 border" placeholder="E-Mail (no confirmation needed)" />
                            <input type="password" name="password" id="password" className="w-full p-3  rounded-lg placeholder-gray-400 border" placeholder="Password" />
                            <input type="password" name="password" id="password" className="w-full p-3  rounded-lg placeholder-gray-400 border" placeholder="Confirm Password" />
                        </form>
                    </div>
                    <div className="mt-5 flex flex-col items-center justify-center">
                        <p className="items-center justify-center text-gray-400"> <i> By clicking Register, you agree to our</i> <em> terms and conditions.</em></p>
                        <button className="p-3 w-full  font-medium text-white mt-5" style={{ backgroundColor: "#6AC045" }}>Register</button>
                    </div>


                </Tabs.Panel>
            </Tabs>



        </>
    )
};
export default LoginContent;