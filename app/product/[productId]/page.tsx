import Container from "@/app/components/Container"
import { product } from "@/app/utils/product"
import ProductDetails from "./ProductDetails"

interface IPrams {
    productId?: string
}


const Product = ({params} : {params: IPrams }) => {
    console.log('params', params)
    

    return <div className="p-8">
    <Container>
    <ProductDetails product = {product} />
    <div className="flex flex-col mt-20 gap-4">
    Add Rating
    </div>
    <div>List</div>
    </Container>
    </div>
}

export default Product;