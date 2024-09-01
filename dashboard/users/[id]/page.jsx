import styles from '@/app/ui/dashboard/users/singleUser/singleuser.module.css'
import Image from 'next/image'
const SingleUserPage = () => {
  return (
    <div className={styles.container}>
        <div className={styles.infoContainer}>
            <div className={styles.imgContainer}>
                <Image src="/logo-next.png" alt="" fill/>
            </div>
            User 1
        </div>
        <div className={styles.formContainer}>
            <form className={styles.form}>
                <label>Username</label>
                <input type='text' name='username' placeholder='user1'/>
                <label>Email</label>
                <input type='email' name='email' placeholder='user1@gmail.com'/>
                <label>Password</label>
                <input type='password' name='password' placeholder='user1'/>
                <label>Phone</label>
                <input type='phone' name='phone' placeholder='999 999 999 9'/>
                <label>Address</label>
                <textarea name="address" id="" placeholder="xyz city"></textarea>
                <label>is Admin?</label>
                <select name="isAdmin" id="isAdmin">
                    <option value={true}>Yes</option>
                    <option value={false}>No</option>
                </select>

                <label>is Active</label>
                <select name="isActive" id="isActive">
                    <option value={true}>Yes</option>
                    <option value={false}>No</option>
                </select>

                <button type="submit">Update</button>
            </form>
        </div>
    </div>
  )
}

export default SingleUserPage