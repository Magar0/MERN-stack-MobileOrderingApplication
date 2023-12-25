import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import axios from 'axios'
import { fetchMobileFailure, fetchMobileSuccess, setPageNo, setTotalItems, setFilter } from '../../store/slices/mobileSlices'



const LeftSidebar = () => {

    const dispatch = useDispatch()
    const [isFilterEmpty, setIsFilterEmpty] = useState(false)
    const { filter } = useSelector(state => state.mobile)
    // console.log(pageNo, totalItems);

    const getData = async () => {
        try {
            // const res = await axios.get('http://localhost:3000/api/mobiles/', { params: { ...filter, limit: 6 } });
            const res = await axios.get('https://mobile-ordering.vercel.app/api/mobiles/', { params: { ...filter, limit: 6 } });
            const data = await res.data;

            dispatch(fetchMobileSuccess(data.mobiles))
            dispatch(setTotalItems(data.totalItems));
            dispatch(setPageNo(1))
        } catch (err) {
            console.error(err);
            dispatch(fetchMobileFailure(true))
        }
    }


    const isEmpty = () => {
        const empty = Object.values(filter).filter(e => !Array.isArray(e)).some(ele => ele !== "");
        const isPriceEmpty = filter.price.some(ele => ele !== "");

        if (!empty && !isPriceEmpty) {
            return true;
        } else {
            return false;
        }
    }


    const handleChange = (e) => {
        const { name, value } = e.target;
        dispatch(setFilter({ ...filter, [name]: value }))
    }


    const handlePriceChange = (e) => {
        const { name, value } = e.target;
        dispatch(setFilter({
            ...filter,
            price: [
                name === "minPrice" ? value : filter.price[0],
                name === "maxPrice" ? value : filter.price[1],
            ]
        }))
    }


    const clearAll = async () => {
        dispatch(setFilter({
            name: "",
            brand: "",
            price: ["", ""],
            type: "",
            processor: "",
            memory: "",
            os: ""
        }))
        getData();
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Is Form Empty", isEmpty());
        if (isEmpty()) {
            setIsFilterEmpty(true);
            setTimeout(() => {
                setIsFilterEmpty(false)
            }, 2000)
            return;
        }
        getData();
    }



    return (
        <Wrapper>
            <div className='filter'>
                <h1>Filters</h1>
                <button onClick={clearAll}> Clear All</button>

            </div>
            <form onSubmit={handleSubmit}>

                <div>
                    <label htmlFor="name">Name: </label>
                    <input type="text" name='name' placeholder='Name' id="name" value={filter.name} onChange={handleChange} />
                </div>

                <div>
                    <label htmlFor="brand">Brand: </label>
                    <input type="text" name='brand' id='brand' placeholder='Brand' value={filter.brand} onChange={handleChange} />
                </div>

                <div className='price-input'>
                    <label htmlFor="maxPrice">Price: </label>
                    <div >
                        <input type="number" name='minPrice' id='minPrice' placeholder='Min' min={0} value={filter.price[0]} onChange={handlePriceChange} />
                        <input type="number" name='maxPrice' id='maxPrice' placeholder='Max' min={0} value={filter.price[1]} onChange={handlePriceChange} />
                    </div>
                </div>

                <div>
                    <label htmlFor="type">Type: </label>
                    <select id='type' name='type' value={filter.type} onChange={handleChange}>
                        <option value="">All</option>
                        <option value="smartphone">Smart Phone</option>
                        <option value="featured">Featured Phone</option>
                    </select>

                </div>

                <div>
                    <label htmlFor="memory">Memory: </label>
                    <select name='memory' id='memory' value={filter.memory} onChange={handleChange}>
                        <option value="">All</option>
                        <option value="2">2GB</option>
                        <option value="4">4GB</option>
                        <option value="8">8GB</option>
                        <option value="16">16GB</option>
                        <option value="32">32GB</option>
                        <option value="64">64GB</option>
                        <option value="128">128GB</option>
                        <option value="256">256GB</option>
                    </select>
                </div>

                <div>
                    <label htmlFor="processor">Processor: </label>
                    <input type="text" id='processor' name='processor' placeholder='Processor' value={filter.processor} onChange={handleChange} />
                </div>

                <div>
                    <label htmlFor="os">OS: </label>
                    <input type="text" id='os' name='os' placeholder='OS' value={filter.os} onChange={handleChange} />
                </div>
                <div className='submit'>
                    <button type='submit' className='btn' >Search</button>
                    {isFilterEmpty && <p>No Filter Provided</p>}
                </div>

            </form>
        </Wrapper>

    )

}


const Wrapper = styled.section`
    width: 250px;
    border-right: solid 2px #dbd9d98e; 
    background-color: #fcf8f852; 
    padding: 10px 10px 5px 30px;
    box-shadow: 10px 13px 7px -5px #6b686852;

    input{
        padding: 5px 10px;
        border-radius: 5px;
        border: solid 1px #0000003e
    }

    .filter{
        margin-top:30px ;
        display: flex;
        justify-content: space-between;
        border-bottom: solid 1px #bab9b9ab;

        button{
            background: transparent;
            border: none;
            color: blue;
            
            cursor: pointer;
            text-transform: uppercase;
        }
        
    }    
    
    form{
        margin-top: 30px;
        display: flex;
        flex-direction: column;
        gap: 25px;
            
        label{
            display: inline-block;
            width:30% ;
            margin-right: 10px;
        }
        
        .price-input {
            div{
                display: flex;
                justify-content: space-between;
                input{
                    width:40% ;
                }
            }
        }
        
        .submit{
            text-align: center;
            .btn{
                width: 100%;
                background-color: lightgreen;
                padding: 10px;
                border: none;
                border-radius: 15px;
                cursor: pointer;
                transition: 0.2s background-color; 
                letter-spacing: 0.2rem;
                font-size: 1rem;
                
                &:hover{
                    color: white;
                    background-color: green;
                    font-weight: 500;
                }
            }    
            p{
                color: red;
                font-weight: 300;
            }
        }
    }

    form select{
        padding: 5px 0;
        width: 55%;
        text-align: center;
        text-transform: capitalize;
        border: solid 1px #0000003e;
        option{
            margin-top: 5px;
        }
    }
            
`

export default LeftSidebar;