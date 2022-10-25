import Image from "next/image";

export interface IProduct {
    id: string
    name: string
    price: number
    description: string
}

interface IProductProps {
    product: IProduct
}

const Product = (props: IProductProps) => {
    return (
        <div>
            <h2>{props.product.name}</h2>
            <p>{props.product.description}</p>
            <div>
                <div>${props.product.price}</div>
                <button>
                    Add to cart
                </button>
            </div>
        </div>
    )
}

export default Product;
