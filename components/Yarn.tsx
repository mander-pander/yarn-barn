export interface YProduct {
    id: string
    name: string
    price: number
    description: string
    weight: number
}

interface YProductProps {
    product: YProduct
}

const Yarn = (props: YProductProps) => {
    return (
        <div>
            <h2>{props.product.name}</h2>
            <p>{props.product.description}</p>
            <p>{props.product.weight}</p>
            <div>
                <div>${props.product.price}</div>
                <button>
                    Add to cart
                </button>
            </div>
        </div>
    )
}

export default Yarn;
