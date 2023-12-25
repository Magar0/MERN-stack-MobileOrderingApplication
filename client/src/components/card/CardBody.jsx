import { AiFillHeart } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { FaMobileScreenButton } from "react-icons/fa6";
import { BiLogoAndroid } from "react-icons/bi";
import { GiProcessor } from "react-icons/gi";
import { MdMemory } from "react-icons/md";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState } from "react";

const CardBody = ({ mobile }) => {

    const [like, setLike] = useState(false);
    const { _id, name, brand, price, type, processor, memory, os } = mobile;

    return (
        < Wrapper>
            <div className="card-body-top">
                <h3 className="card-title"> {name.substring(0, 20)}/ {brand} </h3>
            </div>


            <div className="card-details">
                <div className="column">
                    <div>
                        <i><MdMemory /></i>
                        <p>{memory}</p>
                    </div>
                    <div>
                        <i><FaMobileScreenButton /></i>
                        <p>{type}</p>
                    </div>
                </div>

                <div className="column">
                    <div>
                        <i><GiProcessor /></i>
                        <p>{processor.toString().slice(0, 10)}{processor.length > 10 && "..."}</p>
                    </div>
                    <div>
                        <i><BiLogoAndroid /></i>
                        <p>{os}</p>
                    </div>
                </div>
                <div></div>
            </div>


            <hr />
            <div className="card-bottom">
                <p>Rs.{price}</p>
                <div>

                    {like && <i style={{ color: "red" }} onClick={() => setLike(!like)}><AiFillHeart /></i>}
                    {!like && <i onClick={() => setLike(!like)}><AiOutlineHeart /></i>}

                    <Link to={`/${_id}`}><Button>Buy Now</Button></Link>
                </div>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    padding: 0 15px;

    .card-details {
        display: flex;
        justify-content: space-between;
        padding: 10px 0;
        font-weight: 300;
    }

    .column{
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        div{
            display: flex;
            i{
                color: rgb(55, 164, 242);
                margin-right: 5px;
            }
        }
        div:nth-child(2){
            margin-top: 5px;
        }
    }

    .card-bottom{
        display: flex;
        justify-content: space-between;
        /* align-items: center; */
        padding-top: 15px;
        padding-bottom: 20px;
        p{
            font-size: 1.1rem;
            font-weight: 500;
        }
        div{
            display: flex;
            align-items: center;
            i{
                font-size: 1.5rem;
                cursor: pointer;
                margin-right: 5px;
            }
        }
  }
`


const Button = styled.button`
    background-color: #2cabd5;
    border: none;
    border-radius: 5px;
    color: white;
    cursor: pointer;
    padding: 8px 20px;
    transition: 0ms.2s;

    &:hover{
        background-color: #006f94;
        font-weight: 500;
    }
`

export default CardBody