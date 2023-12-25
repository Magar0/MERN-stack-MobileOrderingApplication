import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Error from "../../components/error/Error"
import ProductPage from "./ProductPage"


const Product = () => {

    const [data, setData] = useState("")
    const params = useParams()
    const { id } = params
    console.log(id);
    console.log(data);

    useEffect(() => {
        fetch(`http://localhost:3000/api/mobiles/${id}`).then((res) => res.json())
            .then((data) => setData(data)).catch(err => console.error(err))
    }, [])
    return (
        <>
            {!data || data.message ? <Error /> : null}
            {data && <ProductPage mobile={data} />}
        </>
    )
}

export default Product