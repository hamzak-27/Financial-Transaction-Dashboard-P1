import Image from "next/image"
import Link from "next/link"
import styles from '@/app/ui/products/products.module.css'

const ProductsPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        
        <Link href="/dashboard/products/add">
        <button className={styles.addButton}>Add New</button>
        </Link>
          
        
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Title</td>
            <td>Description</td>
            <td>Price</td>
            <td>Created At</td>
            <td>Stock</td>
            <td>Action</td>

          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className={styles.product}>
                <Image src="/logo-next.png" width={40} height={40} className={styles.productImage}/> Laptop
              </div>
            </td>
            <td>Lorem ipsum dolor sit amet.</td>
            <td>$500</td>
            <td>24.07.2024</td>
            <td>Available</td>
            <td>
              <Link href="/dashboard/products/singleProduct">
            <button className={`${styles.button} ${styles.view}`}>View</button>
            </Link>
            <button className={`${styles.button} ${styles.delete}`}>Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default ProductsPage