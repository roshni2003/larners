import GoogleIcon from '@mui/icons-material/Google';
import PinterestIcon from '@mui/icons-material/Pinterest';
import AppleIcon from '@mui/icons-material/Apple';

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
                <div className='google'>
                    <div className='icon'>
                        <GoogleIcon color='primary' fontSize='small'/>
                    </div>
                    <div className='name'>
                        <h4 className='name1'>Google</h4>
                    </div>
                </div>
                <div className='pinterest'>
                    <div className='icon'>
                        <PinterestIcon color='primary' fontSize='small'/>
                    </div>
                    <div className='name'>
                        <h4 className='name1'>Pinterest</h4>
                    </div>
                </div>
                <div className='apple'>
                    <div className='icon'>
                        <AppleIcon color='primary' fontSize='small'/>
                    </div>
                    <div className='name'>
                        <h4 className='name1'>Apple</h4>
                    </div>
                </div>
                <div className='vemio'>
                    <div className='icon'>
                        <img alt="" src="vemio.png" height="20px" style={{marginLeft:"-10px"}}></img>
                    </div>
                    <div className='name'>
                        <h4 className='name1'>Vemio</h4>
                    </div>
                </div>
                <div className='finder'>
                    <div className='icon'>
                        <img alt="" src="finder.png" height="20px" ></img>
                    </div>
                    <div className='name'>
                        <h4 className='name1'>Finder</h4>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Home;