import { Gitlab, PauseCircle, Search } from 'jiffy-icons';
import { HorizontalFlex, List, TextField, Grid, TextStyle } from 'jiffy-ui'
import React, { useState } from 'react'
import Logo from '../../assets/dLogo.png'
import { Link, Outlet } from 'react-router-dom';
const Header = () => {
    const [value, setValue] = useState("");

    return (
        <>
            <div className='header'>
                <div className='section-container'>
                    <HorizontalFlex blockAlign={{ "lg": "center" }} align={{ "lg": "spaceBetween", "md": "spaceBetween", "sm": "spaceBetween" }}>
                        <HorizontalFlex gap={24}>
                            {/* <img src={Logo} alt='Logo' /> */}

                            <nav className='demo_nav'>
                                <ul>
                                    <li>
                                        <Link to="/">Home</Link>
                                    </li>
                                    <li>
                                        <Link to="/pannel">pannel</Link>
                                    </li>

                                </ul>
                            </nav>

                        </HorizontalFlex>
                        <HorizontalFlex gap={24} blockAlign={{ "lg": "center" }}>
                            <TextField
                                prefix={<Search size={16} />}
                                isRequired
                                size='Medium'
                                value={value}
                                placeholder='Search here' onChange={(e) => setValue(e)} />

                            <a className='github_link'></a>
                        </HorizontalFlex>
                    </HorizontalFlex>

                </div>
            </div>
            <Outlet />
        </>
    )
}

export default Header
