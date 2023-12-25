import styled from 'styled-components'
import { FaCartPlus } from "react-icons/fa";
import { AiFillThunderbolt } from "react-icons/ai";
import GoBack from '../../components/button/GoBack';

const ProductPage = ({ mobile }) => {
    // console.log(mobile)
    const { name, brand, price, memory, processor, os, img } = mobile
    return (
        <Wrapper>
            <div className='main-container'>
                <GoBack />
                <h1>{name}/ <span style={{ fontWeight: 400, color: "red" }}>{brand}</span></h1>

                <div className="flex">
                    <div className="col col-1">
                        <img src={img} alt="pic" height={100} width={100} />
                    </div>

                    <div className="col col-2">
                        <ul>
                            <li><h5>Price:</h5> {price}</li>
                            <li><h5>Processor:</h5> {processor}</li>
                            <li><h5>Memory:</h5> {memory}</li>
                            <li><h5>OS:</h5> {os}</li>
                        </ul>

                        <div className='div-btn'>
                            <button className='btn btn1'>Add to Cart <i><FaCartPlus /></i></button>
                            <button className='btn btn2'>Buy Now <i><AiFillThunderbolt /></i></button>
                        </div>
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    .main-container{
        margin-top: 20px;
        padding: 0 50px;
        .flex{
            margin-top: 20px;
            display: flex;
            justify-content: space-around;
        }
    }  
    .col-1{
        width: 25%;
        img{
            height: auto;
            width: 100%;
            max-height: 300px;
        }
    }
    .col-2{
        width:55%;
        padding: 30px;
        display: grid;
        align-content: center;
        ul{
            list-style: none;
            li{
                margin:0 0 15px 30px  ;
                h5{
                    font-size: 1.2rem;
                    display: inline-block;
                    font-weight: 600;
                }
            }
        }
    }

    .div-btn{
        display: flex;
        justify-content: flex-start;
    
        .btn{
            flex-grow: 0.3;
            margin-left: 20px;
            padding: 10px 20px;
            border-radius: 10px;
            border: none;
            color: white;
            font-size: 1rem;
            cursor: pointer;
            box-shadow:0 1px 2px 0 rgba(0,0,0,.2);
        }
        .btn1{
            background-color: #FF9F00;
            &:hover{
                background-color: #b8750b;
            }
        }
        .btn2{
            background-color: #FB641B;
            &:hover{
                background-color: #a84b1d;
            }
        }
    }


`

export default ProductPage;