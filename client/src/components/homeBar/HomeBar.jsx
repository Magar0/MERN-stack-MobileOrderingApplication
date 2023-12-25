import React, { useEffect } from 'react'
import styled from 'styled-components';
import Card from '../card/Card';
import { fetchMobileFailure, fetchMobileStarted, fetchMobileSuccess } from '../../store/slices/mobileSlices';
import { useDispatch, useSelector } from 'react-redux';
import Loading from '../loading/Loading';
import Error from '../error/Error';

const HomeBar = () => {

    const dispatch = useDispatch();
    const { mobiles, loading, error } = useSelector(state => state.mobile)
    // console.log(mobiles);

    const getData = async () => {
        fetch('http://localhost:3000/api/mobiles').then((res) => res.json())
            .then((data) => dispatch(fetchMobileSuccess(data)))
            .catch(err => dispatch(fetchMobileFailure("true")))
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <>
            {loading && <Loading />}

            <Wrapper>
                {error && <h3 className='error'>Something Went Wrong</h3>}
                {mobiles && mobiles.length > 0 ?
                    mobiles.map((mobile, ind) => <Card key={ind} mobile={mobile} />) :
                    ((!error && !loading) && <p>No Mobile Found😔</p>)
                }
            </Wrapper>
        </>
    )
}

const Wrapper = styled.section`
    flex-grow: 1;
    padding: 20px ;
    display: grid;
    place-items: center;
    gap: 20px;
    position: relative;
    grid-template-columns: auto auto auto;
    .error{
        position: absolute;
        top: 50px;
        left: 50px;
    }

    @media screen and (max-width:1120px) {
        grid-template-columns: auto auto;
    }

`

export default HomeBar;