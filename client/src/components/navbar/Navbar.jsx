import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import styled from 'styled-components'
import Search from '../search/Search'

const Navbar = () => {
    return (
        <>
            <Wrapper>
                <div className='nav-container'>

                    <NavLink to='/' className='logo flex'>
                        <img src="./logo.avif" alt="logo" height='40' />
                        <h1>Mobile House</h1>
                    </NavLink>
                    <div className="nav-links flex">
                        <Search />
                        <NavLink to='/' > Home </NavLink>
                        <NavLink to='/about' > About </NavLink>
                        <NavLink to='/contact' > Contact Us </NavLink>

                    </div>
                </div>
            </Wrapper>
            <Outlet />
        </>
    )
}

const Wrapper = styled.section`
    position: sticky;
    top: 0;
    z-index: 3;
    background-color: #efefef;
    .nav-container{

        padding: 15px 30px 15px 30px;
        display: flex;
        justify-content: space-between;
        border: solid 2px white;
        width: 90%;
        border-radius: 30px;
        margin: 20px auto 0 auto;
        box-shadow: 5px 10px 20px 5px #c7c7c7ab;
    }
        
    .flex{
        display: flex;
        align-items: center;
    }

    .logo img{
        border-radius: 50%;
        margin-right: 10px;
    }

    a{
        text-decoration: none;
    }
    
    h1{
        color: black;
        letter-spacing: 0.2rem;
        word-spacing: 0.5rem;
    }
    
    .nav-links{
        justify-content: space-evenly;
        width: 70%;
    }
    .nav-links a{
        padding: 7px 35px;
        border-radius: 15px;
        color: #000000b1;
        transition: 0.2s;
        min-width: 120px;
    }
    .nav-links a:hover,
    .nav-links .active{
        color: black;
        font: bolder;
        background-color: #0000003e;
    }

`

export default Navbar