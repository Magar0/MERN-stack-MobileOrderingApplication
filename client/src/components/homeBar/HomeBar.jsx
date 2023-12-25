import React, { useEffect } from 'react'
import styled from 'styled-components';
import Card from '../card/Card';
import { useDispatch, useSelector } from 'react-redux';
import Loading from '../loading/Loading';
import styles from "./homeBar.module.css";
import InfiniteScroll from "react-infinite-scroll-component";
import { fetchMobileFailure, fetchMobileStarted, fetchMobileSuccess, setPageNo, setTotalItems } from '../../store/slices/mobileSlices';
import axios from 'axios';


const HomeBar = () => {

    const dispatch = useDispatch();
    const { mobiles, loading, error, pageNo, totalItems, filter } = useSelector(state => state.mobile)
    const skip = 6 * pageNo;
    console.log(pageNo, totalItems);

    const getData = async () => {
        try {
            // const res = await axios.get('http://localhost:3000/api/mobiles/', { params: { ...filter, skip, limit: 6 } })
            const res = await axios.get('https://mobile-ordering.vercel.app/api/mobiles/', { params: { ...filter, skip, limit: 6 } })
            const data = await res.data;
            dispatch(fetchMobileSuccess([...mobiles, ...data.mobiles]))
            dispatch(setTotalItems(data.totalItems));
            dispatch(setPageNo(pageNo + 1))
        } catch (err) {
            console.error(err);
            dispatch(fetchMobileFailure(true))
        }

    }

    const loadMore = () => {
        setTimeout(() => getData(), 1000)
    }


    useEffect(() => {
        getData()
    }, [])

    return (
        <>
            {loading && <Loading />}

            <Wrapper>
                <InfiniteScroll dataLength={mobiles.length} next={loadMore} hasMore={mobiles.length < totalItems}

                    loader={
                        <div className={styles.loading}>
                            <div className={styles['lds-ring']}><div></div><div></div><div></div><div></div></div>
                        </div>
                    }
                    endMessage={
                        <p style={{ textAlign: "center", fontSize: "1.5rem" }}>
                            (<b>{totalItems ? "Yay! You have seen it all 🫡" : (!loading ? "Nothing Found 😔" : null)}</b>)
                        </p>
                    }>
                    <div className="flex">
                        {mobiles.map((mobile) => <Card key={mobile._id} mobile={mobile} />)}
                    </div>

                </InfiniteScroll>

                {/* {error && <h3 className='error'>Something Went Wrong</h3>} */}
            </Wrapper>
        </>
    )
}

const Wrapper = styled.section`
    flex-grow: 1;
    padding: 20px ;
    .flex{
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
    }

`

export default HomeBar;