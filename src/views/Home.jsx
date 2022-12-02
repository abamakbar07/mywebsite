import logo from "../assets/ttd_2_putih_garis.png"

const Home = () => {
    return (
        <div className="Home">
            <div className="hello">
                Hello there... Saya
            </div>
            <div className="name">
                <img className="akbarafriansyahpng" src={logo} alt="" />
            </div>
            <div className="person">
                And Iam a 
                <div className="kontener">
                    <div className="iam">
                        {/* I'am a<span></span> */}
                        <div><div>Tank User</div></div>
                        <div><div>Chess Player</div></div>
                        <div><div>Fullstack Developer</div></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
