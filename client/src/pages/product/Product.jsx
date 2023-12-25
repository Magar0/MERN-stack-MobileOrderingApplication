import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Error from "../../components/error/Error"
import ProductPage from "./ProductPage"


const Product = () => {

    const [data, setData] = useState("")
    const params = useParams()
    const { id } = params
    console.log(data);

    useEffect(() => {
        fetch(`https://mobile-ordering.vercel.app/api/mobiles/${id}`).then((res) => res.json())
            .then((data) => setData(data)).catch(err => console.error(err))
    }, [])
    return (
        <>
            {(data.message == "Mobile not found") ? <Error /> : null}
            {data && <ProductPage mobile={data} />}
        </>
    )
}

export default Product