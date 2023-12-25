
import styled from 'styled-components'
import CardBody from "./CardBody";

const Card = ({ mobile }) => {

    return (
        <Wrapper>
            <Image>
                <img src={mobile.img} alt="img" />
            </Image>

            <CardBody mobile={mobile} />

        </Wrapper>
    )
}

const Image = styled.div`
    height: 300px;
    width: 250px;
    padding: 10px;
    img{
        width:100%;
        height: 100%;
        /* max-height: 350px; */
    }

    @media screen and (max-width:1120px) {
       max-height: 250px;
       max-width: 270px;
    }
`

const Wrapper = styled.div`
    /* width: 400px; */
    margin-bottom: 20px;
  background-color: #fff;
  border-radius: 1rem;
  padding: 10px 10px 0;
  border: none;
  transition: all .3s;

  &:hover{
    transform: scale(1.05);
  }
`

export default Card;