import React, { useState, useEffect } from 'react';
import {Grid,Button } from '@material-ui/core';
import GoogleIcon from '@mui/icons-material/Google';
import PinterestIcon from '@mui/icons-material/Pinterest';
import AppleIcon from '@mui/icons-material/Apple';

const Home = () => {
    const [theme, setTheme] = useState("light-theme");
    const [input, setInput] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    const [searchHistory, setSearchHistory] = useState([]);

    useEffect(() => {
        document.body.className = theme;
    }, [theme]);
    localStorage.removeItem('searchHistory');
    const storedHistory = localStorage.getItem('searchHistory');
    if (storedHistory) {
        setSearchHistory(JSON.parse(storedHistory));
    }


    const saveSearchHistory = (term) => {
        const updatedHistory = [...searchHistory, term];
        setSearchHistory(updatedHistory);
        localStorage.setItem('searchHistory', JSON.stringify(updatedHistory));
    };

    const handleInputChange = (e) => {
        const inputValue = e.target.value;
        setInput(inputValue);
        const filteredSuggestions = [
            'Html',
            'Css',
            'Python',
            'Javascript',
            'C',
            'Java'
        ].filter((suggestion) => suggestion.toLowerCase().includes(inputValue.toLowerCase()));

        setSuggestions(filteredSuggestions);
    };

    const handleSelectSuggestion = (suggestion) => {
        console.log(`Selected suggestion: ${suggestion}`);
        saveSearchHistory(suggestion);
        setInput("");
        setSuggestions([]);
    };


    return (
        <>
            <Button href="#" onClick={() => setTheme((prevTheme) => (prevTheme === "dark-theme" ? "light-theme" : "dark-theme"))} style={{ backgroundColor: " var(--btn-bg-color)", borderRadius: "50px", height: "30px", marginTop: "100px", marginLeft: "1000px" }}>
                Change Theme
            </Button>
            <Grid item xs={12} container spacing={2}>
                <Grid item lg={3} sm={6} xs={12} style={{ height: "290px", width: "400px", marginTop: "100px", float: "left", marginLeft: "200px" }}>
                    <Grid item lg={12} sm={6} xs={12} style={{ height: "140px", width: "400px", marginBottom: "-15px" }}>
                        <h2 className="slogan1" style={{ wordSpacing: "3px", lineHeight: "40px", fontFamily: "sans-serif", color: "var(--main-heading)" }}>Unlocking Learning  <br /> Journeys and Inspiring <br /> Success Together.</h2>
                    </Grid>
                    <Grid className='paragarph' item lg={12} sm={6} xs={12}>
                        <p className="paragraph1">Illuminating Minds Inspiring<br /> Futures: Where Knowledge Meets Innovation<br /> on our Education Platform.</p>
                    </Grid>
                    <Grid className="search" lg={12} sm={6} xs={12}>
                        <Grid className="bar" lg={12} sm={6} xs={12}>
                            <input
                                type="text"
                                className="search-input"
                                placeholder="Search Course"
                                value={input}
                                onChange={handleInputChange}
                            />
                            <button type="button" className="search1">
                                Search
                            </button>
                        </Grid>
                        <Grid className='result' lg={12} sm={6} xs={12}>
                            <ul>
                                {suggestions.map((suggestion, index) => (
                                    <li key={index} onClick={() => handleSelectSuggestion(suggestion)}>
                                        {suggestion}
                                    </li>
                                ))}
                                {searchHistory.map((term, index) => (
                                    <li key={index} onClick={() => handleSelectSuggestion(term)}>
                                        {term}
                                    </li>
                                ))}
                            </ul>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid className="girl" lg={6} sm={6} xs={12}>
                    <img className="girl1" alt="" src="laptop.png"></img>
                </Grid>
                <Grid className='logo' lg={12} sm={6} xs={12}>
                    <Grid className='google' lg={12} sm={6} xs={12}>
                        <Grid className='icon' lg={12} sm={6} xs={12}>
                            <GoogleIcon color='primary' fontSize='small' />
                        </Grid>
                        <Grid className='name' lg={12} sm={6} xs={12}>
                            <h4 className='name1'>Google</h4>
                        </Grid>
                    </Grid>
                    <Grid className='pinterest' lg={12} sm={6} xs={12}>
                        <Grid className='icon' lg={12} sm={6} xs={12}>
                            <PinterestIcon color='primary' fontSize='small' />
                        </Grid>
                        <Grid className='name' lg={12} sm={6} xs={12}>
                            <h4 className='name1'>Pinterest</h4>
                        </Grid>
                    </Grid>
                    <Grid className='apple' lg={12} sm={6} xs={12}>
                        <Grid className='icon' lg={12} sm={6} xs={12}>
                            <AppleIcon color='primary' fontSize='small' />
                        </Grid>
                        <Grid className='name' lg={12} sm={6} xs={12}>
                            <h4 className='name1'>Apple</h4>
                        </Grid>
                    </Grid>
                    <Grid className='vemio' lg={12} sm={6} xs={12}>
                        <Grid className='icon' lg={12} sm={6} xs={12}>
                            <img alt="" src="vemio.png" height="20px" style={{ marginLeft: "-10px" }}></img>
                        </Grid>
                        <Grid className='name' lg={12} sm={6} xs={12}>
                            <h4 className='name1'>Vemio</h4>
                        </Grid>
                    </Grid>
                    <Grid className='finder' lg={12} sm={6} xs={12}>
                        <Grid className='icon' lg={12} sm={6} xs={12}>
                            <img alt="" src="finder.png" height="20px" ></img>
                        </Grid>
                        <Grid className='name' lg={12} sm={6} xs={12}>
                            <h4 className='name1'>Finder</h4>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid className="students"> 
                <img className="future" alt="" src="future.jpg" height="300" width="450" style={{ borderRadius: "30px" }}></img>
            </Grid>
            <Grid className="about1">
                <Grid className="About Us">
                    <h2 className="us">About Us</h2>
                </Grid>
                <Grid className="line">
                    <p className="lines">Welcome to our educational platform, where learning ranscends boundaries. <br />Discover a world of knowledge, engage in interactive courses, and embark on a journey of intellectual growth.</p>
                </Grid>
                <Grid className='growth'>
                    <Grid className='one'>
                        <Grid className='number'>
                            <h2 className='number1'>25K</h2>
                        </Grid>
                        <Grid className='action'>
                            <p className='action1'>Completed Projects.</p>
                        </Grid>
                    </Grid>
                    <Grid className='two'>
                        <Grid className='number'>
                            <h2 className='number1'>12M</h2>
                        </Grid>
                        <Grid className='action'>
                            <p className='action1'>Students Around World.</p>
                        </Grid>
                    </Grid>
                    <Grid className='three'>
                        <Grid className='number'>
                            <h2 className='number1'>95M</h2>
                        </Grid>
                        <Grid className='action'>
                            <p className='action1'>Ideas Raised Fund.</p>
                        </Grid>
                    </Grid>
                    <Grid className='four'>
                        <Grid className='number'>
                            <h2 className='number1'>9K</h2>
                        </Grid>
                        <Grid className='action'>
                            <p className='action1'>Categories Served.</p>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid className='why'>
                <Grid className='WHY'>WHY ACADEMICHUB?</Grid>
                <Grid className='REASON'>It is a Diverse, industry-focused coding courses, interactive learning, experienced instructors, flexible platform, affordable, recognized certifications.</Grid>
            </Grid>

            <Grid className='reason'>
                <Grid className='five'>
                    <img alt="" src="teach.svg" style={{ height: "120px", width: "100px", marginLeft: "20px", marginTop: "10px" }} />
                    <h3 className='text'>Live Lessons</h3>
                </Grid>
                <Grid className='six'>
                    <img alt="" src="free.svg" style={{ height: "120px", width: "100px", marginLeft: "20px", marginTop: "10px" }} />
                    <h3 className='text'>Courses From Basics</h3>
                </Grid>
                <Grid className='seven'>
                    <img alt="" src="lang.svg" style={{ height: "120px", width: "100px", marginLeft: "20px", marginTop: "10px" }} />
                    <h3 className='text'>Free Of Cost</h3>
                </Grid>
                <Grid className='eight'>
                    <img alt="" src="basic.svg" style={{ height: "120px", width: "100px", marginLeft: "20px", marginTop: "10px" }} />
                    <h3 className='text'>Multiple Languages</h3>
                </Grid>
            </Grid>
            <Grid className='course'>
                <Grid className='html'>
                    <img alt="" src="html.jpg" height="80%" width="100%"></img>
                    <p className='link'>Start your HTML journey from here.</p>
                    <a href="https://www.youtube.com/watch?v=pd_uEtbJ0Iw&list=PL8p2I9GklV44CbA1EsDKpZb8mZo8IFbIQ">Vedio Link</a>
                </Grid>
                <Grid className='css'>
                    <img alt="" src="css.png" height="80%" width="100%"></img>
                    <p className='link'>Start your CSS journey from here.</p>
                    <a href="https://www.youtube.com/watch?v=ua24185-rcw&list=PLH8iQ-rTfw2-lp7oienYPq9JT3rc-B_9p">Vedio Link</a>
                </Grid>
                <Grid className='python'>
                    <img alt="" src="python.jpg" height="80%" width="100%"></img>
                    <p className='link'>Start your Python journey from here.</p>
                    <a href="https://www.youtube.com/   awatch?v=aqvDTCpNRek&list=PLu0W_9lII9agICnT8t4iYVSZ3eykIAOME">Vedio Link</a>
                </Grid>
                <Grid className='js'>
                    <img alt="" src="js.png" height="80%" width="100%"></img>
                    <p className='link'>Start your JavaScript journey from here.</p>
                    <a href="https://www.youtube.com/watch?v=ER9SspLe4Hg&list=PLu0W_9lII9ahR1blWXxgSlL4y9iQBnLpR">Vedio Link</a>
                </Grid>
                <Grid className='c'>
                    <img alt="" src="c.png" height="80%" width="100%"></img>
                    <p className='link'>Start your C journey from here.</p>
                    <a href="https://www.youtube.com/watch?v=2NWeucMKrLI&list=PL6gx4Cwl9DGAKIXv8Yr6nhGJ9Vlcjyymq">Vedio Link</a>
                </Grid>
                <Grid className='java'>
                    <img alt="" src="java.png" height="80%" width="100%"></img>
                    <p className='link'>Start your Java journey from here.</p>
                    <a href="https://www.youtube.com/watch?v=bm0OyhwFDuY&list=PLsyeobzWxl7pe_IiTfNyr55kwJPWbgxB5">Vedio Link</a>
                </Grid>
            </Grid>

            </Grid>
        </>
    );
};

export default Home;








