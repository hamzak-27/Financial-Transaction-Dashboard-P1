import Image from "next/image"
import styles from '@/app/ui/dashboard/users/users.module.css'
import Link from "next/link"
import { fetchUsers } from "@/lib/data"

const Userpage = async() => {

  const users = await fetchUsers();

  console.log(users);


  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Link href="/dashboard/users/add">
        <button className={styles.addButton}>Add New</button>
        
        </Link>
        
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Created At</td>
            <td>Role</td>
            <td>Status</td>
            <td>Action</td>


          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className={styles.user}>
                <Image src='/logo-next.png' alt="" width={40} height={40} className={styles.userImage}/>User 1
              </div>
            </td>
            <td>user@gmail.com</td>
            <td>12.03.2024</td>
            <td>Admin</td>
            <td>Active</td>
            <td>
            <Link href="/dashboard/users/singleUser">
             <button className={`${styles.button} ${styles.view}`}>View</button>
            </Link>
            <button className={`${styles.button} ${styles.delete}`}>Delete</button>
            </td>
          </tr>

          <tr>
            <td>
              <div className={styles.user}>
                <Image src='/logo-next.png' alt="" width={40} height={40} className={styles.userImage}/>User 1
              </div>
            </td>
            <td>user@gmail.com</td>
            <td>12.03.2024</td>
            <td>Admin</td>
            <td>Active</td>
            <td>
            <button className={`${styles.button} ${styles.view}`}>View</button>
            <button className={`${styles.button} ${styles.delete}`}>Delete</button>
            </td>
          </tr>

          <tr>
            <td>
              <div className={styles.user}>
                <Image src='/logo-next.png' alt="" width={40} height={40} className={styles.userImage}/>User 1
              </div>
            </td>
            <td>user@gmail.com</td>
            <td>12.03.2024</td>
            <td>Admin</td>
            <td>Active</td>
            <td>
            <button className={`${styles.button} ${styles.view}`}>View</button>
            <button className={`${styles.button} ${styles.delete}`}>Delete</button>
            </td>
          </tr>

          <tr>
            <td>
              <div className={styles.user}>
                <Image src='/logo-next.png' alt="" width={40} height={40} className={styles.userImage}/>User 1
              </div>
            </td>
            <td>user@gmail.com</td>
            <td>12.03.2024</td>
            <td>Admin</td>
            <td>Active</td>
            <td>
              <button className={`${styles.button} ${styles.view}`}>View</button>
              <button className={`${styles.button} ${styles.delete}`}>Delete</button>
            </td>
          </tr>

          <tr>
            <td>
              <div className={styles.user}>
                <Image src='/logo-next.png' alt="" width={40} height={40} className={styles.userImage}/>User 1
              </div>
            </td>
            <td>user@gmail.com</td>
            <td>12.03.2024</td>
            <td>Admin</td>
            <td>Active</td>
            <td>
            <button className={`${styles.button} ${styles.view}`}>View</button>
            <button className={`${styles.button} ${styles.delete}`}>Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Userpage