import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { fetchMobileFailure, fetchMobileSuccess } from "../../store/slices/mobileSlices";
import styled from "styled-components";

const Search = () => {

    const [search, setSearch] = useState("")
    const dispatch = useDispatch();

    const handleSearch = async () => {
        try {
            // const res = await fetch(`http://localhost:3000/api/mobiles/search?name=${search}`);
            const res = await fetch(`https://mobile-ordering.vercel.app/api/mobiles/${search ? "search?name=" + search : ""}`);
            const data = await res.json();
            dispatch(fetchMobileSuccess(data))
        } catch (err) {
            console.log(err);
            dispatch(fetchMobileFailure(true))
        }
    }

    return (
        <Wrapper>
            <i onClick={handleSearch}><FaSearch /></i>
            <input type="text" placeholder="Search" value={search} onChange={(e) => setSearch(e.target.value)} onKeyDown={(e) => e.key === "Enter" ? handleSearch() : null} />
        </Wrapper>
    )
}

const Wrapper = styled.section`
    min-width: 200px;
    flex-grow: 0.7;
    position: relative;

    input{
        font-size: 1rem;
        width: 80%;
        padding: 5px 35px;
        border-radius: 10px;
        border: none;
        background-color: white;
    }
    
    i{
        position: absolute;
        left: 10px;
         top: 5px;
         cursor: pointer;
         transition: 0.2s;
    }

    i:hover{
        color: blue;
        font-size: larger;
    }
`

export default Search