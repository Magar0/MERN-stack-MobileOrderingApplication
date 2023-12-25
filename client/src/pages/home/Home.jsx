import React from 'react'
import LeftSidebar from '../../components/leftSidebar/LeftSidebar'
import HomeBar from '../../components/homeBar/HomeBar'
import styled from 'styled-components'

const Home = () => {
    return (
        <>
            <Wrapper>
                <LeftSidebar />
                <HomeBar />
            </Wrapper>
        </>
    )
}

const Wrapper = styled.section`
    min-height: 100vh;
    max-width: 1400px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin: 0% auto;

`

export default Home