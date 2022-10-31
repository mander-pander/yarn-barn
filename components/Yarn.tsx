export interface YProduct {
    weight: number
    yardage: number
    size: number
    material: string
}

interface YProductProps {
    product: YProduct
}

const Yarn = (props: YProductProps) => {
    return (
        <div>
            <p>{props.product.weight}</p>
            <p>{props.product.yardage}</p>
            <p>{props.product.size}</p>
            <p>{props.product.material}</p>

        </div>
    )
}

export default Yarn;
