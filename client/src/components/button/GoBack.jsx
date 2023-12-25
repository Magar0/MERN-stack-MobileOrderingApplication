import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

const GoBack = () => {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/')
    }

    return (
        <Button onClick={handleClick}>
            Go Back
        </Button>
    )
}

const Button = styled.button`
    padding: 7px 20px;
    border-radius: 10px;
    border: solid 1px #0000003e;
    cursor: pointer;
    float: right;
    background-color: white;
`
export default GoBack;