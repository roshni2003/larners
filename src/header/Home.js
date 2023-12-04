import React, {useState, useEffect} from 'react';
import GoogleIcon from '@mui/icons-material/Google';
import PinterestIcon from '@mui/icons-material/Pinterest';
import AppleIcon from '@mui/icons-material/Apple';
const Home = () => {
    const [theme, setTheme]  = useState("light-theme");
    const [searchTerm, setSearchTerm] = useState("");
    const [searchHistory, setSearchHistory] = useState([]);

    const toggleTheme =()=>{
        if (theme === "dark-theme"){
            setTheme("light-theme");
        }else{
            setTheme("dark-theme");   
        }
    }
    const handleSearch = () => {
        // Update search history and clear input
        setSearchHistory((prevHistory) => [...prevHistory, searchTerm]);
        setSearchTerm("");
      };


    useEffect (()=> {
        document.body.className = theme;
    },[theme])

    return (
        <>
            <button herf="#" className='btn' onClick={()=> toggleTheme()}>Change Theme </button>
            <div className="about">
                <div className="slogan">
                    <h2 className="slogan1">Unlocking Learning  <br /> Journeys and Inspiring <br /> Success Together.</h2>
                </div>
                <div className="paragraph">
                    <p className="paragraph1">Illuminating Minds Inspiring<br /> Futures: Where Knowledge Meets Innovation<br /> on our Education Platform.</p>
                </div>
                <div className="search">
                    <div className="bar">
                        <input type="text" className="search-input" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}/>
                        <button type="button" className="search1" onClick={handleSearch}>Search</button>
                        <div className="search-history">
                            <h3>Search History:</h3>
                            <ul>
                                {searchHistory.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                        </div>
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
            <div className="students">
                <img className="future" alt="" src="future.jpg" height="300" width="450" style={{borderRadius:"30px"}}></img>
            </div>
            <div className="about1">
                <div className="About Us">
                    <h2 className="us">About Us</h2>
                </div>
                <div className="line">
                    <p className="lines">Welcome to our educational platform, where learning ranscends boundaries. <br/>Discover a world of knowledge, engage in interactive courses, and embark on a journey of intellectual growth.</p>
                </div>
                <div className='growth'>
                    <div className='one'>
                        <div className='number'>
                            <h2 className='number1'>25K</h2>
                        </div>
                        <div className='action'>
                            <p className='action1'>Completed Projects.</p>
                        </div>
                    </div>
                    <div className='two'>
                        <div className='number'>
                        <h2 className='number1'>12M</h2>
                        </div>
                        <div className='action'>
                        <p className='action1'>Students Around World.</p>
                        </div>
                    </div>
                    <div className='three'>
                        <div className='number'>
                        <h2 className='number1'>95M</h2>
                        </div>
                        <div className='action'>
                        <p className='action1'>Ideas Raised Fund.</p>
                        </div>
                    </div>
                    <div className='four'>
                        <div className='number'>
                        <h2 className='number1'>9K</h2>
                        </div>
                        <div className='action'>
                        <p className='action1'>Categories Served.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='why'>
                <div className='WHY'>WHY ACADEMICHUB?</div>
                <div className='REASON'>It is a Diverse, industry-focused coding courses, interactive learning, experienced instructors, flexible platform, affordable, recognized certifications.</div>
            </div>

            <div className='reason'>
                <div className='five'>
                    <img alt="" src="teach.svg" style={{height:"120px",width:"100px", marginLeft:"20px", marginTop:"10px"}} />
                    <h3 className='text'>Live Lessons</h3>
                </div>
                <div className='six'>
                    <img alt="" src="free.svg" style={{height:"120px",width:"100px", marginLeft:"20px", marginTop:"10px"}} />
                    <h3 className='text'>Courses From Basics</h3>
                </div>
                <div className='seven'>
                    <img alt="" src="lang.svg" style={{height:"120px",width:"100px", marginLeft:"20px", marginTop:"10px"}} />
                    <h3 className='text'>Free Of Cost</h3>
                </div>
                <div className='eight'>
                    <img alt="" src="basic.svg" style={{height:"120px",width:"100px", marginLeft:"20px", marginTop:"10px"}} />
                    <h3 className='text'>Multiple Languages</h3>
                </div>
            </div>
            <div className='course'>
                <div className='html'>
                    <img alt="" src="html.jpg" height="80%" width="100%"></img>
                    <p className='link'>Start your HTML journey from here.</p>
                    <a href="https://www.youtube.com/watch?v=pd_uEtbJ0Iw&list=PL8p2I9GklV44CbA1EsDKpZb8mZo8IFbIQ">Vedio Link</a>                    
                </div>
                <div className='css'>
                    <img alt="" src="css.png" height="80%" width="100%"></img>
                    <p className='link'>Start your CSS journey from here.</p>
                    <a href="https://www.youtube.com/watch?v=ua24185-rcw&list=PLH8iQ-rTfw2-lp7oienYPq9JT3rc-B_9p">Vedio Link</a>                    
                </div>
                <div className='python'>
                    <img alt="" src="python.jpg" height="80%" width="100%"></img>
                    <p className='link'>Start your Python journey from here.</p>
                    <a href="https://www.youtube.com/watch?v=aqvDTCpNRek&list=PLu0W_9lII9agICnT8t4iYVSZ3eykIAOME">Vedio Link</a>                    
                </div>
                <div className='js'>
                    <img alt="" src="js.png" height="80%" width="100%"></img>
                    <p className='link'>Start your JavaScript journey from here.</p>
                    <a href="https://www.youtube.com/watch?v=ER9SspLe4Hg&list=PLu0W_9lII9ahR1blWXxgSlL4y9iQBnLpR">Vedio Link</a>                    
                </div>
                <div className='c'>
                    <img alt="" src="c.png" height="80%" width="100%"></img>
                    <p className='link'>Start your C journey from here.</p>
                    <a href="https://www.youtube.com/watch?v=2NWeucMKrLI&list=PL6gx4Cwl9DGAKIXv8Yr6nhGJ9Vlcjyymq">Vedio Link</a>                    
                </div>
                <div className='java'>
                    <img alt="" src="java.png" height="80%" width="100%"></img>
                    <p className='link'>Start your Java journey from here.</p>
                    <a href="https://www.youtube.com/watch?v=bm0OyhwFDuY&list=PLsyeobzWxl7pe_IiTfNyr55kwJPWbgxB5">Vedio Link</a>                    
                </div>
            </div>      
        </>
    )
}
export default Home;

