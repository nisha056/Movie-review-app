const Footer = () => {
    return (
        <>
            <div className="footer flex flex-col justify-center  items-center gap-2"
                style={{ background: "#171717", height: "120px", fontSize: "14px" }}>
                <div className="flex items-center justify-center gap-2">
                    <h2 className="text-white"> YTS©2011-2023</h2>
                    <h2 className="text-white">-</h2>
                    <h2 className="text-gray-400">Blog</h2>
                    <h2 className="text-white">-</h2>
                    <h2 className="text-gray-400">DCMA</h2>
                    <h2 className="text-white">-</h2>
                    <h2 className="text-gray-400">API</h2>
                    <h2 className="text-white">-</h2>
                    <h2 className="text-gray-400">RSS</h2>
                    <h2 className="text-white">-</h2>
                    <h2 className="text-gray-400">Contact</h2>
                    <h2 className="text-white">-</h2>
                    <h2 className="text-gray-400">Browse Movies</h2>
                    <h2 className="text-white">-</h2>
                    <h2 className="text-gray-400">Requests</h2>
                    <h2 className="text-white">-</h2>
                    <h2 className="text-gray-400">Login</h2>
                    <h2 className="text-white">-</h2>
                    <h2 className="text-gray-400">Language</h2>


                </div>
                <div className="flex items-center justify-center gap-2">
                    <h2 className="text-gray-400"> EZTV</h2>
                    <h2 className="text-white">-</h2>
                    <h2 className="text-gray-400">YIFY Status</h2>
                    <h2 className="text-white">-</h2>
                    <h2 className="text-gray-400">YTS Proxies</h2>
                    <h2 className="text-white">-</h2>
                    <h2 className="text-gray-400">YTS Proxies(TOR)</h2>
                    <h2 className="text-white">-</h2>
                    <button className="text-white p-1 text-[10px]  rounded-lg items-center mb-1 bg-blue-600"> Follow @ytsyify</button>
                </div>
                <div className="items-center">
                    <p className="text-center text-white"> By using this site you agree to and accept our  <em> User Agreement</em>, which can be read <em>here</em>.</p>

                </div>

            </div>
        </>

    )
};
export default Footer;