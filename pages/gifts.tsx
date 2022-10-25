import {GetStaticProps} from "next";
import styles from '../styles/Gifts.module.css';
import ProductList from '../components/ProductList';
import {IProduct} from '../components/Product';

interface IProductListProps {
    products: IProduct[]
}

function Gifts({products}: IProductListProps) {
    return (
        <main className={styles.main}>
          <h1 className={styles.title}>
            Gifts
          </h1>

          <div className={styles.grid}>
              <div className={styles.card}>
                <h2>Gifts</h2>
                <p>Gift ideas for the fiber crafter in your life</p>
              </div>

              <div className={styles.card}>
                <h2>Yarn</h2>
                <p>Browse yarn by weight or brand</p>
                <ProductList products={products} />
              </div>

            <div className={styles.card}>
              <h2>Books</h2>
              <p>Selection of books</p>
            </div>

            <div className={styles.card}>
              <h2>Kits</h2>
              <p>
                Browse Kits
              </p>
            </div>

            <div className={styles.card}>
              <h2>Accessories</h2>
              <p>
                Browse Tools and Accessories
              </p>
            </div>

            <div className={styles.card}>
              <h2>Socks</h2>
              <p>
                All things socks
              </p>
            </div>
          </div>
        </main>
    )
}

export const products: IProduct[] = [
    {
        id: "advent",
        name: "Rainbow Advent Calendar",
        price: 125.00,
        description: "Advent consisting of 25 mini skeins of yarn for every day in December leading up to Christmas Day."
    }
]

export const getStaticProps: GetStaticProps = async (context) => {

    return {
        props: {
            products
        }
    }
}

  export default Gifts;
