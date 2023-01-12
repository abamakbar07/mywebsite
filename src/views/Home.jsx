import logo from "../assets/ttd_2_putih_garis.png"
import happyCup from "../assets/happy_cup.svg"

const Home = () => {
    return (
        <div className="Home">
            <div className="hello">
                Hello there... I'am
            </div>
            <div className="name">
                <img className="akbarafriansyahpng" src={happyCup} alt="" />
            </div>
            <div className="person">
                And Iam a 
                <div className="kontener">
                    <div className="iam">
                        {/* I'am a<span></span> */}
                        <div><div>Nothing</div></div>
                        <div><div>Nothing</div></div>
                        <div><div>Nothing</div></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
