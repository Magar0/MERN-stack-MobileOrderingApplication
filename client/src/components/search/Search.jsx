import { FaSearch } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { fetchMobileFailure, fetchMobileSuccess, setFilter, setPageNo, setTotalItems } from "../../store/slices/mobileSlices";
import styled from "styled-components";

const Search = () => {

    const { filter } = useSelector(state => state.mobile)
    const dispatch = useDispatch();

    const search = filter.name

    const handleSearch = async () => {
        try {
            // const res = await fetch(`http://localhost:3000/api/mobiles?${search ? "name=" + search + "&" : ""}limit=6`);
            const res = await fetch(`https://mobile-ordering.vercel.app/api/mobiles?${search ? "name=" + search + "&" : ""}limit=6`);
            const data = await res.json();

            dispatch(fetchMobileSuccess(data.mobiles))
            dispatch(setTotalItems(data.totalItems));
            dispatch(setPageNo(1))
        } catch (err) {
            console.log(err);
            dispatch(fetchMobileFailure(true))
        }
    }

    const handleClick = (e) => {
        dispatch(setFilter({ ...filter, name: e.target.value }))
    }

    return (
        <Wrapper>
            <i onClick={handleSearch}><FaSearch /></i>
            <input type="text" placeholder="Search" value={search} onChange={handleClick} onKeyDown={(e) => e.key === "Enter" ? handleSearch() : null} />
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