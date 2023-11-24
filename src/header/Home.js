import GoogleIcon from '@mui/icons-material/Google';
import PinterestIcon from '@mui/icons-material/Pinterest';
// import AppleIcon from '@mui/icons-material/Apple';

const Home = () => {
    return (
        <>
            <div className="about">
                <div className="slogan">
                    <h2 className="slogan1">Unlocking Learning  <br /> Journeys and Inspiring <br /> Success Together.</h2>
                </div>
                <div className="paragraph">
                    <p className="paragraph1">Illuminating Minds Inspiring<br /> Futures: Where Knowledge Meets Innovation<br /> on our Education Platform.</p>
                </div>
                <div className="search">
                    <div className="bar">
                        <input type="text" className="search-input" />
                        <button type="button" className="search1">Search</button>
                    </div>

                </div>
            </div>
            <div className="girl">
                <img className="girl1" alt="" src="laptop.png"></img>
            </div>
            <div className='logo'>
                {/* <div className="google">
                    <div className='icon'>
                        <GoogleIcon color='primary' fontSize='small'/>
                    </div>
                    <div className='name'>
                        <h3 className='name1'>Google</h3>
                    </div>
                </div>
                <div className="pinterest">
                    <div className='icon1'>
                        <  PinterestIcon color='primary' fontSize='small'/>
                    </div>
                    <div className='name2'>
                        <h3 className='name3'>Pinterest</h3>
                    </div>
                </div> */}
                <div className='google'></div>
                <div className='pinterest'></div>
                <div className='apple'></div>
            </div>
        </>
    )
}
export default Home;