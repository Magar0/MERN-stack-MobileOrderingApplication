import { Link } from "react-router-dom";
import styled from "styled-components";

const Error = () => {
    return (
        <>
            <Wrapper>
                <div className="box">
                    <h1>Error 404</h1>
                    <h2>Not Found</h2>
                    <p>Could not find the requested resources</p>

                    <Link to="/">
                        <button className="btn"  >Go To Homepage</button>
                    </Link>
                </div>
            </Wrapper>
        </>
    )
}

const Wrapper = styled.section`
    height: 100vh;
    width: 100vw;
    display: grid;
    place-items: center;
    background-color: white;
    z-index: 5;
    position: absolute;
    top: 0;

    .box {
        background-color: rgb(226, 242, 242);
        padding: 3rem;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;

        h1,h2 {
            color: red;
            margin-bottom: 1rem;
            font-size: 3rem;
            text-transform: capitalize;
        }
        p {
            font-size: 2rem;
            margin-bottom: 1rem;
        }
    }

    .btn {
        font-size: 1.1rem;
        padding: 10px 20px;
        border-radius: 5px;
        background-color: bisque;
        cursor: pointer;
    
        &:hover {
            background-color: rgb(248, 44, 44);
            color: white;
        }
    }
`
export default Error;