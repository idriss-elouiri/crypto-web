import "./Home.css"
import Img from '../assets/hero-img.png'
const Home = () => {
    return ( 
        <section className='hero-section'>
            <div className="container">
                <div className="left">
                    <p>Buy & Sell Crypto 24/7 using your retirement account</p>
                    <h1>Invest in Cryptocurreny with Your IRA</h1>
                    <p>Buy, Sell, and store hundreds of cryptocurrencies</p>
                    <div className="box">
                        <input  type='email' placeholder='Enter your email'/>
                        <button className="btn">Learn More</button>
                    </div>
                </div>
                <div className="right">
                    <img src={Img} alt="Img" />
                </div>
            </div>
        </section>
     );
}
 
export default Home;